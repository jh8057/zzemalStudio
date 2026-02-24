"use client";

import { toast } from "sonner";
import { STUDIO, URLS, DIRECTIONS } from "@/lib/constants";

export default function DirectionInfo() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO.address);
      toast.success("주소가 복사되었습니다.");
    } catch {
      toast.error("복사에 실패했습니다.");
    }
  };

  return (
    <div className="space-y-px bg-border max-w-2xl mx-auto">
      <div className="p-8 bg-surface">
        <h3 className="text-xs uppercase tracking-[0.15em] text-muted mb-4">
          Address
        </h3>
        <p className="text-sm text-foreground/70 mb-2 leading-relaxed">
          {STUDIO.address}
        </p>
        <p className="text-xs text-muted mb-5">{DIRECTIONS.landmark}</p>
        <button
          onClick={handleCopy}
          className="text-xs uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors duration-300"
        >
          Copy Address
        </button>
      </div>

      <div className="p-8 bg-surface">
        <h3 className="text-xs uppercase tracking-[0.15em] text-muted mb-4">
          How to Get Here
        </h3>
        <ul className="space-y-4 text-sm text-foreground/70">
          <li>
            <span className="text-xs uppercase tracking-[0.1em] text-muted/60">
              지하철
            </span>
            <p className="mt-1">{DIRECTIONS.subway}</p>
          </li>
          <li>
            <span className="text-xs uppercase tracking-[0.1em] text-muted/60">
              버스
            </span>
            <p className="mt-1">{DIRECTIONS.bus}</p>
          </li>
          <li>
            <span className="text-xs uppercase tracking-[0.1em] text-muted/60">
              주차
            </span>
            <p className="mt-1">{DIRECTIONS.parking}</p>
          </li>
        </ul>
      </div>

      <div className="p-8 bg-surface">
        <h3 className="text-xs uppercase tracking-[0.15em] text-muted mb-4">
          Contact
        </h3>
        <ul className="space-y-2 text-sm text-foreground/70">
          <li>
            <a
              href={`tel:${STUDIO.phone}`}
              className="hover:text-foreground transition-colors duration-300"
            >
              {STUDIO.phone}
            </a>
          </li>
          <li className="text-muted text-xs">
            {STUDIO.consultingHours} · {STUDIO.closedDay}
          </li>
        </ul>
      </div>

      <div className="p-8 bg-surface flex gap-3 justify-center">
        <a
          href={URLS.naverMap}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs uppercase tracking-[0.12em] font-medium rounded transition-all duration-300"
          style={{ backgroundColor: "#03C75A", color: "#ffffff" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#02a84e")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#03C75A")}
        >
          Naver Map
        </a>
        <a
          href={URLS.kakaoMap}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs uppercase tracking-[0.12em] font-medium rounded transition-all duration-300"
          style={{ backgroundColor: "#FEE500", color: "#3C1E1E" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#f0d800")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#FEE500")}
        >
          Kakao Map
        </a>
      </div>
    </div>
  );
}
