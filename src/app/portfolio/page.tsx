import type { Metadata } from "next";
import InstagramGallery from "@/components/portfolio/InstagramGallery";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "스튜디오 달리의 촬영 포트폴리오입니다. 증명사진, 여권사진, 프로필 촬영 결과물을 확인하세요.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-24 px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
            Portfolio
          </p>
          <h1 className="text-2xl md:text-3xl font-extralight tracking-wide">
            포트폴리오
          </h1>
        </div>

        <InstagramGallery />
      </div>
    </div>
  );
}
