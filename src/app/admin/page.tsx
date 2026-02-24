"use client";

import { useEffect, useState, useCallback } from "react";
import { Toaster } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { fetchReservations, type ReservationItem } from "@/lib/api";
import ReservationTable from "@/components/admin/ReservationTable";

export default function AdminPage() {
  const { token } = useAuth();
  const [reservations, setReservations] = useState<ReservationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError("");
    try {
      const data = await fetchReservations(token);
      setReservations(data);
    } catch {
      setError("예약 목록을 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <Toaster position="top-center" richColors />

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">예약 관리</h2>
        <button
          onClick={load}
          disabled={loading}
          className="text-sm px-4 py-1.5 border border-border rounded-lg hover:bg-surface-alt transition-colors disabled:opacity-50"
        >
          {loading ? "로딩 중..." : "새로고침"}
        </button>
      </div>

      {error ? (
        <div className="text-center text-red-500 py-16">{error}</div>
      ) : loading ? (
        <div className="text-center text-muted py-16">불러오는 중...</div>
      ) : (
        <ReservationTable
          reservations={reservations}
          token={token!}
          onUpdate={load}
        />
      )}
    </>
  );
}
