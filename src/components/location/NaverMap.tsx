import { STUDIO } from "@/lib/constants";

export default function NaverMap() {
  const { lat, lng } = STUDIO.coordinates;

  return (
    <div className="w-full overflow-hidden border border-border">
      <iframe
        src={`https://map.kakao.com/link/map/스튜디오달리,${lat},${lng}`}
        className="w-full border-0"
        style={{ height: "450px" }}
        loading="lazy"
        title="스튜디오 달리 위치"
        allowFullScreen
      />
    </div>
  );
}
