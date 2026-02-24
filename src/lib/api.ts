import { URLS } from "./constants";

export interface ReservationData {
  userName: string;
  phone: string;
  time: string;
  peopleNum: string;
  purpose?: string;
  etc?: string;
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
