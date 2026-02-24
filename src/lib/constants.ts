export const STUDIO = {
  name: "스튜디오 달리",
  nameEn: "Studio Darly",
  tagline: "증명사진 · 여권사진 · 프로필 촬영",
  description:
    "서울 강서구 염창동에 위치한 전문 촬영 스튜디오. 증명사진, 여권사진, 프로필 촬영을 합리적인 가격에 만나보세요.",
  address: "서울 강서구 염창동 184-8 어반카운티 지하 1층 B01호 스튜디오 달리",
  phone: "0507-1335-9835",
  consultingHours: "10:00 ~ 19:00",
  bank: {
    name: "우리은행",
    account: "1002-229-545508",
    holder: "방민규",
  },
  coordinates: {
    lat: 37.55093083,
    lng: 126.873672,
  },
} as const;

export const URLS = {
  instagram: "https://www.instagram.com/studio.darly/",
  kakaoChannel: "https://pf.kakao.com/_yxngWxj",
  kakaoMap: "http://kko.to/yUv0CvuRiu",
  naverPlace:
    "https://map.naver.com/p/entry/place/1943946669",
  naverMap:
    "https://map.naver.com/p/entry/place/1943946669",
  naverReserve:
    "https://map.naver.com/p/entry/place/1943946669?placePath=/booking",
  reserveApi:
    "https://uyfw49m706.execute-api.ap-northeast-2.amazonaws.com/sendDarlyReserve",
} as const;

export const PRICING = {
  weekday: {
    label: "평일",
    price: 25000,
    priceFormatted: "25,000원",
    unit: "/시간 (3인 기준)",
  },
  weekend: {
    label: "주말",
    price: 30000,
    priceFormatted: "30,000원",
    unit: "/시간 (3인 기준)",
  },
  additionalPerson: {
    label: "추가 인원",
    price: 5000,
    priceFormatted: "+5,000원",
    unit: "/시간·인",
  },
  minimumHours: 2,
} as const;

export const SERVICES = [
  {
    id: "id-photo",
    title: "증명사진",
    description: "취업, 입학, 자격증 등 각종 증명사진을 전문적으로 촬영합니다.",
    icon: "camera",
  },
  {
    id: "passport",
    title: "여권사진",
    description: "국제 규격에 맞는 여권사진을 정확하게 촬영해 드립니다.",
    icon: "globe",
  },
  {
    id: "profile",
    title: "프로필 촬영",
    description:
      "자연스럽고 전문적인 프로필 사진으로 당신의 매력을 담아드립니다.",
    icon: "user",
  },
] as const;

export const POLICIES = {
  deposit: {
    under100k: "전액 선입금",
    over100k: "10만원 선입금",
    deadline: "예약 후 12시간 이내 미입금 시 자동 취소",
  },
  cancellation: [
    { period: "8일 이상 전", refund: "100% 환불" },
    { period: "7일 전", refund: "50% 환불 또는 날짜 변경" },
    { period: "6일~당일", refund: "환불 및 날짜 변경 불가" },
  ],
  notes: [
    "최소 대여 시간은 2시간입니다.",
    "대여 시간에는 세팅 및 정리 시간이 포함됩니다.",
    "선 예약이 없는 경우 10분 전 입장 가능합니다.",
  ],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "홈" },
  { href: "/portfolio/", label: "포트폴리오" },
  { href: "/reserve/", label: "예약안내" },
  { href: "/location/", label: "오시는길" },
] as const;

export const KAKAO_MAP = {
  timestamp: "1677429222324",
  key: "2dv2t",
} as const;

export const GALLERY_IMAGES = [
  {
    src: "https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230807_180%2F1691384650160iDccl_JPEG%2F%25B9%25CE%25C1%25F5%252C%25BF%25EE%25C0%25FC%25B8%25E9%25C7%25E3_%25B1%25D4%25B0%25DD-%25BF%25B9%25B8%25B2%25B4%25D4.jpg",
    alt: "스튜디오 달리 가격 안내",
  },
  {
    src: "https://search.pstatic.net/common/?autoRotate=true&quality=100&type=w560_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20260202_78%2F1770019508583NRYEt_JPEG%2FGm7vwtfAGL_06.jpg",
    alt: "촬영 작업물 1",
  },
  {
    src: "https://search.pstatic.net/common/?autoRotate=true&quality=100&type=w560_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20260202_248%2F1769997439828CxHlg_JPEG%2FTV6VvTY695_02.jpg",
    alt: "촬영 작업물 2",
  },
  {
    src: "https://search.pstatic.net/common/?autoRotate=true&quality=100&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250217_289%2F17397542160887rTjG_JPEG%2F5x7_%25C7%25D1%25C4%25C6_%25C0%25CE%25C8%25AD_%25B1%25D4%25B0%25DD-9.jpg",
    alt: "한컷 인화 규격",
  },
  {
    src: "https://search.pstatic.net/common/?autoRotate=true&quality=100&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260223_251%2F177182961687914QWn_JPEG%2F%25B9%25DD%25B8%25ED%25C7%25D4%252C%25C0%25CC%25B7%25C2%25BC%25AD_%25B1%25D4%25B0%25DD_-_%25B1%25E8%25B5%25B5%25C8%25F1%25B4%25D4.jpg",
    alt: "반명함 이력서 규격",
  },
] as const;
