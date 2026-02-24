export const STUDIO = {
  name: "스튜디오 달리",
  nameEn: "Studio Darly",
  tagline: "증명사진 · 여권사진 · 프로필 촬영",
  description:
    "증명, 프로필 촬영 전문 스튜디오 달리입니다. 방문해 주시면 그 자리에서 바로 보정 및 사진 인화까지 즉시 진행하고 있습니다. 촬영 전 상담부터 촬영 후 보정까지 1:1 맞춤 진행을 도와드립니다. 20가지 이상의 컬러 배경지와 편안한 촬영을 위한 다양한 용품이 구비되어 있습니다.",
  address: "서울 강서구 염창동 184-8 어반카운티 지하 1층 B01호 스튜디오 달리",
  phone: "0507-1335-9835",
  consultingHours: "10:00 ~ 21:00",
  closedDay: "매주 수요일 정기휴무",
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
  blog: "https://blog.naver.com/studiodarly",
  kakaoChannel: "https://pf.kakao.com/_yxngWxj",
  kakaoMap: "http://kko.to/yUv0CvuRiu",
  naverPlace: "https://map.naver.com/p/entry/place/1943946669",
  naverMap: "https://map.naver.com/p/entry/place/1943946669",
  naverReserve:
    "https://map.naver.com/p/entry/place/1943946669?placePath=/booking",
  reserveApi:
    "https://uyfw49m706.execute-api.ap-northeast-2.amazonaws.com/sendDarlyReserve",
} as const;

export const BUSINESS_HOURS = [
  { day: "월", hours: "10:00 - 21:00", closed: false },
  { day: "화", hours: "10:00 - 21:00", closed: false },
  { day: "수", hours: "정기휴무", closed: true },
  { day: "목", hours: "10:00 - 21:00", closed: false },
  { day: "금", hours: "10:00 - 21:00", closed: false },
  { day: "토", hours: "10:00 - 21:00", closed: false },
  { day: "일", hours: "10:00 - 21:00", closed: false },
] as const;

export const PRODUCTS = [
  {
    category: "증명 · 여권",
    items: [
      {
        id: "passport-basic",
        title: "BASIC 여권/비자 사진",
        description:
          "여권/비자/국제면허/공무원 원서 등 목적에 적합. 흰색 배경, 1:1 보정. 3.5×4.5cm 기준 9장 제공.",
        originalPrice: 30000,
        price: 25000,
        priceNote: "",
        duration: "약 20분",
      },
      {
        id: "id-photo",
        title: "1:1 맞춤 증명사진",
        description:
          "신분증·면허증·사원증·이력서 등. 컬러 배경 촬영 가능, 현장 1:1 맞춤 보정. 3.5×4.5cm(신분증) 또는 3×4cm(반명함) 9장 제공.",
        originalPrice: 35000,
        price: 30000,
        priceNote: "",
        duration: "약 30분",
      },
      {
        id: "employee-id",
        title: "1:1 맞춤 사원증/반명함 사진",
        description:
          "이력서·사원증 이용에 적합. 컬러 배경 촬영, 현장 1:1 맞춤 보정. 3×4cm 반명함 9장 제공.",
        originalPrice: 35000,
        price: 30000,
        priceNote: "",
        duration: "약 30분",
      },
      {
        id: "id-passport-set-white",
        title: "증명 여권 SET (화이트 ONLY)",
        description:
          "여권(흰 배경) 촬영 후 증명 사이즈로도 출력. 3.5×4.5cm 9장(여권) + 9장(증명) 총 18장 제공.",
        originalPrice: 50000,
        price: 35000,
        priceNote: "",
        duration: "약 30분",
      },
      {
        id: "id-passport-set-color",
        title: "증명 여권 SET (화이트+컬러)",
        description:
          "여권(흰 배경)·증명(컬러 가능) 개별 촬영. 3.5×4.5cm 9장(여권) + 9장(증명) 총 18장 제공.",
        originalPrice: 50000,
        price: 40000,
        priceNote: "",
        duration: "약 40분",
      },
    ],
  },
  {
    category: "프로필 · 장수사진",
    items: [
      {
        id: "personal-profile",
        title: "1인 퍼스널 프로필",
        description:
          "상업용 이미지·웹사이트 프로필·개인 소장. 베스트 1컷 보정 + 디지털 파일 전달 + 4×6 1장 + 3.5×4.5cm 9장 인화.",
        originalPrice: 80000,
        price: 60000,
        priceNote: "",
        duration: "약 40~50분",
      },
      {
        id: "senior-photo",
        title: "장수 사진 — 액자 포함",
        description:
          "기록·소장용. 컬러 배경 촬영, 현장 보정. 3.5×4.5cm 9장 + 8R 사진 및 액자 세트 제공. (11R 업그레이드 시 +10,000원)",
        originalPrice: 100000,
        price: 70000,
        priceNote: "",
        duration: "보정 약 30분 / 액자 수령 최대 4일",
      },
    ],
  },
  {
    category: "단체 촬영",
    items: [
      {
        id: "couple",
        title: "커플 사진",
        description:
          "베이지색 배경 촬영. 5장 보정(원본 jpg 무료 제공) + 4×6 사진 2장 인화(페이퍼 액자 포함).",
        originalPrice: 80000,
        price: 80000,
        priceNote: "예약금 5,000원 / 잔액 현장결제",
        duration: "약 1시간",
      },
      {
        id: "friendship",
        title: "우정 사진 (3~4인)",
        description:
          "베이지색 배경 촬영. 5장 보정(원본 jpg 무료 제공) + 4×6 사진 6장 인화(페이퍼 액자 포함). 인원 추가 시 1인당 +10,000원.",
        originalPrice: 90000,
        price: 90000,
        priceNote: "예약금 5,000원 / 잔액 현장결제",
        duration: "약 1시간",
      },
      {
        id: "family",
        title: "가족 사진 (3~4인)",
        description:
          "베이지색 배경 촬영. 5장 보정(원본 jpg 무료 제공) + 5×7 사진 2장 인화(페이퍼 액자 포함). 인원 추가 시 1인당 +10,000원.",
        originalPrice: 90000,
        price: 90000,
        priceNote: "예약금 5,000원 / 잔액 현장결제",
        duration: "약 1시간",
      },
    ],
  },
  {
    category: "반려동물 촬영",
    items: [
      {
        id: "pet-profile",
        title: "반려동물 단독 프로필",
        description:
          "컬러 배경 촬영. 5장 보정(원본 jpg 무료 제공) + 4×6 사진 2장 인화(페이퍼 액자 포함).",
        originalPrice: 60000,
        price: 60000,
        priceNote: "예약금 5,000원 / 잔액 현장결제",
        duration: "약 1시간",
      },
      {
        id: "pet-owner-profile",
        title: "반려동물 동반 프로필",
        description:
          "베이지·컬러 배경 촬영. 5장 보정(원본 jpg 무료 제공) + 4×6 사진 2장 인화. 반려동물 포함 2인 기준.",
        originalPrice: 80000,
        price: 80000,
        priceNote: "예약금 10,000원 / 잔액 현장결제",
        duration: "약 1시간",
      },
      {
        id: "pet-family",
        title: "반려동물 동반 가족사진",
        description:
          "베이지색 배경 촬영. 5장 보정(원본 jpg 무료 제공) + 5×7 사진 2장 인화. 반려동물 포함 3~4인 기준, 추가 시 1인당 +10,000원.",
        originalPrice: 100000,
        price: 100000,
        priceNote: "예약금 10,000원 / 잔액 현장결제",
        duration: "약 1시간",
      },
    ],
  },
  {
    category: "기타",
    items: [
      {
        id: "outdoor",
        title: "출장 및 기타 촬영",
        description:
          "음식·졸업·연주회 등 출장 촬영. 별도 문의 후 진행.",
        originalPrice: 100000,
        price: 100000,
        priceNote: "",
        duration: "별도 협의",
      },
      {
        id: "reprint",
        title: "개인 증명사진 파일 재출력",
        description: "기존 촬영분 파일 재출력.",
        originalPrice: 10000,
        price: 10000,
        priceNote: "",
        duration: "즉시",
      },
    ],
  },
] as const;

export const PRICING = {
  weekday: {
    label: "증명/여권",
    price: 25000,
    priceFormatted: "25,000원",
    unit: "~",
  },
  weekend: {
    label: "프로필",
    price: 60000,
    priceFormatted: "60,000원",
    unit: "~",
  },
  additionalPerson: {
    label: "단체 촬영",
    price: 80000,
    priceFormatted: "80,000원",
    unit: "~",
  },
  minimumHours: 2,
} as const;

export const SERVICES = [
  {
    id: "id-passport",
    title: "증명 · 여권사진",
    description:
      "신분증, 여권, 비자, 운전면허 등 각종 증명사진을 1:1 맞춤 촬영 및 현장 보정합니다.",
    icon: "camera",
    startingPrice: "25,000원~",
  },
  {
    id: "profile",
    title: "퍼스널 프로필",
    description:
      "상업용 이미지·웹사이트 프로필·개인 소장 등 목적에 맞춘 1인 프로필 촬영입니다.",
    icon: "user",
    startingPrice: "60,000원~",
  },
  {
    id: "group",
    title: "단체 촬영",
    description:
      "커플, 우정, 가족 등 소중한 추억을 현장 맞춤 보정으로 담아드립니다.",
    icon: "users",
    startingPrice: "80,000원~",
  },
  {
    id: "pet",
    title: "반려동물 촬영",
    description:
      "반려동물 단독 프로필부터 동반 가족사진까지 다양한 구성으로 진행합니다.",
    icon: "heart",
    startingPrice: "60,000원~",
  },
  {
    id: "senior",
    title: "장수 사진",
    description:
      "기록과 소장을 위한 장수사진. 8R 사진 및 액자 세트로 제공됩니다.",
    icon: "frame",
    startingPrice: "70,000원~",
  },
  {
    id: "outdoor",
    title: "출장 촬영",
    description:
      "음식, 졸업, 연주회 등 다양한 출장 촬영. 스튜디오 무인 대여도 가능합니다.",
    icon: "map-pin",
    startingPrice: "100,000원~",
  },
] as const;

export const DIRECTIONS = {
  landmark:
    "염동초 정문 방면 위치. 강변 부동산 좌측 건물 입구 → 엘리베이터 지하 1층 → 우측 스튜디오",
  subway: "염창역 1번 출구에서 도보 7분",
  bus: "마을버스 강서 04 탑승 → 새마을금고 정류장 하차",
  parking:
    "건물 기계식 주차장 무료 이용 가능 (방문 전 예약 시 주차 여부 체크 요청)",
} as const;

export const NOTICE = [
  "촬영·보정·인화까지 약 20~50분 소요됩니다 (상품별 상이).",
  "여권사진은 흰색 배경 필수. 흰색 옷·악세사리·컬러렌즈 착용 불가.",
  "예약시간은 촬영 시작 시간이며, 준비 필요 시 10분 일찍 방문해 주세요.",
  "예약시간 15분 이상 지각 시 예약이 뒤로 변경되거나 취소될 수 있습니다.",
] as const;

export const SHOOTING_TIPS = [
  "무늬가 많은 옷보다는 단색 계열을 추천드립니다.",
  "화장은 평소보다 살짝 진하게 해 오시면 더욱 예쁘게 나옵니다.",
  "헤어·메이크업을 받고 방문하시면 최상의 결과를 얻을 수 있어요.",
  "입술이 트지 않도록 각질 정리 및 립밤을 발라주세요.",
  "남성분들은 옆머리를 잘 눌러주시는 것을 추천드립니다.",
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
    "예약 없이 당일 방문도 가능합니다 (대기 발생 가능).",
    "현장 즉시 보정 및 인화 진행.",
    "스튜디오 무인 대여 및 출장 촬영은 별도 문의 바랍니다.",
    "주차 필요 시 예약 시 주차 여부를 체크해 주세요.",
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
