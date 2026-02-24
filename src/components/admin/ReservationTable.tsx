"use client";

import { useState } from "react";
import { toast } from "sonner";
import { updateReservationStatus, type ReservationItem } from "@/lib/api";

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  pending: { label: "대기", color: "bg-yellow-100 text-yellow-800" },
  confirmed: { label: "확인", color: "bg-green-100 text-green-800" },
  cancelled: { label: "취소", color: "bg-red-100 text-red-800" },
};

interface Props {
  reservations: ReservationItem[];
  token: string;
  onUpdate: () => void;
}

export default function ReservationTable({
  reservations,
  token,
  onUpdate,
}: Props) {
  const [filter, setFilter] = useState<string>("all");
  const [updating, setUpdating] = useState<string | null>(null);

  const filtered =
    filter === "all"
      ? reservations
      : reservations.filter((r) => r.status === filter);

  const handleStatusChange = async (
    id: string,
    status: "pending" | "confirmed" | "cancelled"
  ) => {
    setUpdating(id);
    try {
      await updateReservationStatus(token, id, status);
      toast.success("상태가 변경되었습니다.");
      onUpdate();
    } catch {
      toast.error("상태 변경에 실패했습니다.");
    } finally {
      setUpdating(null);
    }
  };

  return (
    <div>
      {/* Filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {[
          { key: "all", label: "전체" },
          { key: "pending", label: "대기" },
          { key: "confirmed", label: "확인" },
          { key: "cancelled", label: "취소" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
              filter === f.key
                ? "bg-foreground text-background border-foreground"
                : "border-border hover:border-foreground/30"
            }`}
          >
            {f.label}
            {f.key === "all"
              ? ` (${reservations.length})`
              : ` (${reservations.filter((r) => r.status === f.key).length})`}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center text-muted py-16">예약이 없습니다.</div>
      ) : (
        <div className="space-y-4">
          {filtered.map((r) => {
            const status = STATUS_LABELS[r.status] || STATUS_LABELS.pending;
            return (
              <div
                key={r.id}
                className="p-5 rounded-xl bg-surface border border-border"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">{r.userName}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </div>
                    <div className="text-sm text-muted space-y-0.5">
                      <div>연락처: {r.phone}</div>
                      <div>일시: {r.time}</div>
                      <div>인원: {r.peopleNum}명</div>
                      {r.purpose && <div>목적: {r.purpose}</div>}
                      {r.etc && <div>기타: {r.etc}</div>}
                    </div>
                    <div className="text-xs text-muted/60">
                      {new Date(r.createdAt).toLocaleString("ko-KR")}
                    </div>
                  </div>

                  {/* Status Actions */}
                  <div className="flex gap-2 shrink-0">
                    {r.status !== "confirmed" && (
                      <button
                        onClick={() => handleStatusChange(r.id, "confirmed")}
                        disabled={updating === r.id}
                        className="px-3 py-1.5 text-xs font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                      >
                        확인
                      </button>
                    )}
                    {r.status !== "cancelled" && (
                      <button
                        onClick={() => handleStatusChange(r.id, "cancelled")}
                        disabled={updating === r.id}
                        className="px-3 py-1.5 text-xs font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                      >
                        취소
                      </button>
                    )}
                    {r.status !== "pending" && (
                      <button
                        onClick={() => handleStatusChange(r.id, "pending")}
                        disabled={updating === r.id}
                        className="px-3 py-1.5 text-xs font-medium border border-border rounded-lg hover:bg-surface-alt transition-colors disabled:opacity-50"
                      >
                        대기로
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
