import { URLS } from "./constants";

export interface ReservationData {
  userName: string;
  phone: string;
  time: string;
  peopleNum: string;
  purpose?: string;
  etc?: string;
}

export interface ReservationItem extends ReservationData {
  id: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
  updatedAt?: string;
}

export async function submitReservation(data: ReservationData): Promise<void> {
  const response = await fetch(URLS.reserveApi, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("예약 신청 중 오류가 발생했습니다.");
  }
}

// Admin API
const ADMIN_API = URLS.reserveApi.replace(/\/[^/]*$/, "");

export async function adminLogin(
  password: string
): Promise<{ token: string }> {
  const res = await fetch(`${ADMIN_API}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "로그인 실패");
  }
  return res.json();
}

export async function fetchReservations(
  token: string
): Promise<ReservationItem[]> {
  const res = await fetch(`${ADMIN_API}/admin/reservations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("예약 목록 조회 실패");
  const data = await res.json();
  return data.reservations;
}

export async function updateReservationStatus(
  token: string,
  id: string,
  status: "pending" | "confirmed" | "cancelled"
): Promise<void> {
  const res = await fetch(`${ADMIN_API}/admin/reservations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error("상태 변경 실패");
}
