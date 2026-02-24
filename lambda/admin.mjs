import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";

const ddb = DynamoDBDocumentClient.from(
  new DynamoDBClient({ region: "ap-northeast-2" })
);

const TABLE = process.env.TABLE_NAME || "DarlyReservations";
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;
const JWT_SECRET = process.env.JWT_SECRET || "darly-secret-change-me";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
};

function response(statusCode, body) {
  return { statusCode, headers, body: JSON.stringify(body) };
}

// 간단 JWT 생성 (HS256)
function createJwt(payload) {
  const header = Buffer.from(
    JSON.stringify({ alg: "HS256", typ: "JWT" })
  ).toString("base64url");
  const body = Buffer.from(
    JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + 86400 })
  ).toString("base64url");
  const signature = crypto
    .createHmac("sha256", JWT_SECRET)
    .update(`${header}.${body}`)
    .digest("base64url");
  return `${header}.${body}.${signature}`;
}

function verifyJwt(token) {
  try {
    const [header, body, signature] = token.split(".");
    const expected = crypto
      .createHmac("sha256", JWT_SECRET)
      .update(`${header}.${body}`)
      .digest("base64url");
    if (signature !== expected) return null;
    const payload = JSON.parse(Buffer.from(body, "base64url").toString());
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

function getToken(event) {
  const auth = event.headers?.Authorization || event.headers?.authorization;
  if (!auth?.startsWith("Bearer ")) return null;
  return auth.slice(7);
}

// POST /admin/login
async function login(body) {
  const { password } = body;
  if (!password || !ADMIN_PASSWORD_HASH) {
    return response(401, { error: "인증 실패" });
  }

  const hash = crypto.createHash("sha256").update(password).digest("hex");
  if (hash !== ADMIN_PASSWORD_HASH) {
    return response(401, { error: "비밀번호가 올바르지 않습니다." });
  }

  const token = createJwt({ role: "admin" });
  return response(200, { token });
}

// GET /admin/reservations
async function listReservations() {
  const result = await ddb.send(
    new ScanCommand({
      TableName: TABLE,
    })
  );

  const items = (result.Items || []).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return response(200, { reservations: items });
}

// PATCH /admin/reservations/:id
async function updateReservation(id, body) {
  const { status } = body;
  if (!["pending", "confirmed", "cancelled"].includes(status)) {
    return response(400, { error: "유효하지 않은 상태입니다." });
  }

  await ddb.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { id },
      UpdateExpression: "SET #s = :s, updatedAt = :u",
      ExpressionAttributeNames: { "#s": "status" },
      ExpressionAttributeValues: {
        ":s": status,
        ":u": new Date().toISOString(),
      },
    })
  );

  return response(200, { message: "상태가 변경되었습니다." });
}

export const handler = async (event) => {
  const method = event.httpMethod || event.requestContext?.http?.method;
  const path = event.path || event.rawPath || "";

  if (method === "OPTIONS") {
    return response(200, {});
  }

  // POST /admin/login — 인증 불필요
  if (method === "POST" && path.endsWith("/admin/login")) {
    const body = JSON.parse(event.body || "{}");
    return login(body);
  }

  // 이하 인증 필요
  const token = getToken(event);
  const payload = token ? verifyJwt(token) : null;
  if (!payload) {
    return response(401, { error: "인증이 필요합니다." });
  }

  // GET /admin/reservations
  if (method === "GET" && path.endsWith("/admin/reservations")) {
    return listReservations();
  }

  // PATCH /admin/reservations/:id
  if (method === "PATCH" && path.includes("/admin/reservations/")) {
    const id = path.split("/").pop();
    const body = JSON.parse(event.body || "{}");
    return updateReservation(id, body);
  }

  return response(404, { error: "Not found" });
};
