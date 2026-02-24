"use client";

import { toast } from "sonner";
import { STUDIO, URLS } from "@/lib/constants";

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
        <p className="text-sm text-foreground/70 mb-5 leading-relaxed">
          {STUDIO.address}
        </p>
        <button
          onClick={handleCopy}
          className="text-xs uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors duration-300"
        >
          Copy Address
        </button>
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
          <li className="text-muted text-xs">{STUDIO.consultingHours}</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-px bg-border">
        <a
          href={URLS.naverMap}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 bg-surface text-center text-xs uppercase tracking-[0.15em] text-muted hover:text-foreground hover:bg-surface-alt transition-all duration-300"
        >
          Naver Map
        </a>
        <a
          href={URLS.kakaoMap}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 bg-surface text-center text-xs uppercase tracking-[0.15em] text-muted hover:text-foreground hover:bg-surface-alt transition-all duration-300"
        >
          Kakao Map
        </a>
      </div>
    </div>
  );
}
