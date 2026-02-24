import type { Metadata } from "next";
import PricingTable from "@/components/reserve/PricingTable";
import ReserveForm from "@/components/reserve/ReserveForm";
import { Toaster } from "sonner";
import { POLICIES, STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "예약안내",
  description:
    "스튜디오 달리 예약 안내 및 가격 정보. 평일 25,000원, 주말 30,000원.",
};

export default function ReservePage() {
  return (
    <div className="pt-28 pb-24 px-8">
      <Toaster position="top-center" richColors theme="light" />
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
            Reservation
          </p>
          <h1 className="text-2xl md:text-3xl font-extralight tracking-wide">
            예약안내
          </h1>
        </div>

        <section className="mb-24">
          <PricingTable />
        </section>

        <section className="mb-24 max-w-2xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted text-center mb-10">
            Information
          </h2>

          <div className="space-y-px bg-border">
            <div className="p-8 bg-surface">
              <h3 className="text-sm font-medium mb-4">입금 안내</h3>
              <ul className="space-y-2 text-xs text-muted leading-relaxed">
                <li>총 금액 10만원 이하: {POLICIES.deposit.under100k}</li>
                <li>총 금액 10만원 초과: {POLICIES.deposit.over100k}</li>
                <li>{POLICIES.deposit.deadline}</li>
                <li className="pt-3 text-foreground/70">
                  {STUDIO.bank.name} {STUDIO.bank.account} ({STUDIO.bank.holder}
                  )
                </li>
              </ul>
            </div>

            <div className="p-8 bg-surface">
              <h3 className="text-sm font-medium mb-4">취소/환불 정책</h3>
              <ul className="space-y-2 text-xs text-muted leading-relaxed">
                {POLICIES.cancellation.map((item) => (
                  <li key={item.period}>
                    {item.period} — {item.refund}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-surface">
              <h3 className="text-sm font-medium mb-4">주의사항</h3>
              <ul className="space-y-2 text-xs text-muted leading-relaxed">
                {POLICIES.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-lg mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted text-center mb-3">
            Direct Booking
          </h2>
          <p className="text-center text-muted text-xs mb-10">
            네이버 예약 외 직접 예약을 원하시면 아래 폼을 작성해주세요
          </p>
          <ReserveForm />
        </section>
      </div>
    </div>
  );
}
