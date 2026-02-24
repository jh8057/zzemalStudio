"use client";

import { STUDIO } from "@/lib/constants";

export default function NaverMap() {
  const { lat, lng } = STUDIO.coordinates;
  const query = encodeURIComponent(STUDIO.address);

  return (
    <div className="w-full overflow-hidden border border-border">
      <iframe
        src={`https://map.naver.com/p/search/${query}?c=${lng},${lat},15,0,0,0,dh`}
        className="w-full border-0 min-h-[300px] sm:min-h-[400px]"
        height="400"
        loading="lazy"
        title="스튜디오 달리 위치"
        allowFullScreen
      />
    </div>
  );
}
