import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import crypto from "crypto";

const ddb = DynamoDBDocumentClient.from(
  new DynamoDBClient({ region: "ap-northeast-2" })
);
const ses = new SESClient({ region: "ap-northeast-2" });

const TABLE = process.env.TABLE_NAME || "DarlyReservations";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL;

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
};

function response(statusCode, body) {
  return { statusCode, headers, body: JSON.stringify(body) };
}

// POST /reservations — 예약 생성
async function createReservation(body) {
  const { userName, phone, time, peopleNum, purpose, etc } = body;

  if (!userName || !phone || !time || !peopleNum) {
    return response(400, { error: "필수 항목을 입력해주세요." });
  }

  const id = crypto.randomUUID();
  const item = {
    id,
    userName,
    phone: phone.replace(/-/g, ""),
    time,
    peopleNum,
    purpose: purpose || "",
    etc: etc || "",
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  await ddb.send(new PutCommand({ TableName: TABLE, Item: item }));

  // SES 이메일 알림
  if (ADMIN_EMAIL && FROM_EMAIL) {
    try {
      await ses.send(
        new SendEmailCommand({
          Source: FROM_EMAIL,
          Destination: { ToAddresses: [ADMIN_EMAIL] },
          Message: {
            Subject: { Data: `[스튜디오 달리] 새 예약: ${userName}` },
            Body: {
              Text: {
                Data: [
                  `이름: ${userName}`,
                  `연락처: ${phone}`,
                  `일시: ${time}`,
                  `인원: ${peopleNum}`,
                  `목적: ${purpose || "-"}`,
                  `기타: ${etc || "-"}`,
                  ``,
                  `어드민에서 확인하세요.`,
                ].join("\n"),
              },
            },
          },
        })
      );
    } catch (e) {
      console.error("SES send failed:", e);
    }
  }

  return response(201, { message: "예약 신청이 완료되었습니다.", id });
}

export const handler = async (event) => {
  const method = event.httpMethod || event.requestContext?.http?.method;
  const path = event.path || event.rawPath || "";

  // CORS preflight
  if (method === "OPTIONS") {
    return response(200, {});
  }

  // POST /reservations
  if (method === "POST" && path.endsWith("/reservations")) {
    const body = JSON.parse(event.body || "{}");
    return createReservation(body);
  }

  return response(404, { error: "Not found" });
};
