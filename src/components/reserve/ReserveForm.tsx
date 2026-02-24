"use client";

import { useState } from "react";
import { toast } from "sonner";
import { submitReservation } from "@/lib/api";

export default function ReserveForm() {
  const [form, setForm] = useState({
    userName: "",
    phone: "",
    time: "",
    peopleNum: "",
    purpose: "",
    etc: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.userName.trim()) {
      toast.error("이름을 입력해주세요.");
      return;
    }
    if (!form.phone.trim()) {
      toast.error("연락처를 입력해주세요.");
      return;
    }
    if (!form.time.trim()) {
      toast.error("예약 일시를 입력해주세요.");
      return;
    }
    if (!form.peopleNum.trim()) {
      toast.error("인원 수를 입력해주세요.");
      return;
    }

    setLoading(true);
    try {
      await submitReservation({
        ...form,
        phone: form.phone.replace(/-/g, ""),
      });
      toast.success("예약 신청이 완료되었습니다. 확인 후 연락드리겠습니다.");
      setForm({
        userName: "",
        phone: "",
        time: "",
        peopleNum: "",
        purpose: "",
        etc: "",
      });
    } catch {
      toast.error("예약 신청 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto">
      <div>
        <label className="block text-xs uppercase tracking-[0.15em] text-muted mb-3">
          이름 <span className="text-accent">*</span>
        </label>
        <input
          name="userName"
          value={form.userName}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground/50 transition-colors text-sm"
          placeholder="홍길동"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.15em] text-muted mb-3">
          연락처 <span className="text-accent">*</span>
        </label>
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground/50 transition-colors text-sm"
          placeholder="010-1234-5678"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.15em] text-muted mb-3">
          예약 일시 <span className="text-accent">*</span>
        </label>
        <input
          name="time"
          value={form.time}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground/50 transition-colors text-sm"
          placeholder="3월 15일 14시~16시"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.15em] text-muted mb-3">
          인원 수 <span className="text-accent">*</span>
        </label>
        <input
          name="peopleNum"
          value={form.peopleNum}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground/50 transition-colors text-sm"
          placeholder="3"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.15em] text-muted mb-3">이용 목적</label>
        <input
          name="purpose"
          value={form.purpose}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground/50 transition-colors text-sm"
          placeholder="프로필 촬영"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.15em] text-muted mb-3">기타 요청사항</label>
        <textarea
          name="etc"
          value={form.etc}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground/50 transition-colors text-sm resize-none"
          placeholder="추가 요청사항을 입력해주세요"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 text-sm uppercase tracking-[0.15em] bg-foreground text-background font-medium hover:bg-foreground/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {loading ? "전송 중..." : "예약 신청"}
      </button>
    </form>
  );
}
