import type { Metadata } from "next";
import NaverMap from "@/components/location/NaverMap";
import DirectionInfo from "@/components/location/DirectionInfo";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "오시는길",
  description:
    "스튜디오 달리 오시는길. 서울 강서구 염창동 184-8 어반카운티 지하 1층.",
};

export default function LocationPage() {
  return (
    <div className="pt-28 pb-24 px-8">
      <Toaster position="top-center" richColors theme="light" />
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
            Location
          </p>
          <h1 className="text-2xl md:text-3xl font-extralight tracking-wide">
            오시는길
          </h1>
        </div>

        <div className="mb-12">
          <NaverMap />
        </div>

        <DirectionInfo />
      </div>
    </div>
  );
}
