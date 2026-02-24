# 스튜디오 달리 (Studio Darly)

서울 강서구 염창동에 위치한 전문 촬영 스튜디오 웹사이트.

## 페이지 구성

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | 홈 | Three.js 히어로, Instagram 피드, 서비스 소개 (3개), 예약 CTA |
| `/portfolio` | 포트폴리오 | Instagram 임베드 갤러리 |
| `/reserve` | 예약안내 | 가격표, 이용안내, 네이버 예약 버튼 |
| `/location` | 오시는길 | 카카오맵 iframe, 주소 복사, 카카오/네이버 딥링크 |

## 서비스 정보

| 카테고리 | 상품 | 시작가 |
|----------|------|--------|
| 증명·여권 | 여권사진, 증명사진, 사원증, SET | 25,000원~ |
| 프로필·장수 | 1인 퍼스널 프로필, 장수사진(액자 포함) | 60,000원~ |
| 단체 | 커플, 우정(3~4인), 가족(3~4인) | 80,000원~ |
| 반려동물 | 단독 프로필, 동반 프로필, 동반 가족사진 | 60,000원~ |
| 기타 | 출장 촬영, 개인 파일 재출력 | 별도 문의 |

## 외부 연동

- **Instagram**: 프로필 임베드 위젯 (API 불필요, 실시간 반영)
- **네이버 플레이스**: 예약/리뷰 링크
- **카카오**: 카카오 채널, 카카오 지도 딥링크

## 연락처

- 전화: 0507-1335-9835
- 상담시간: 10:00 ~ 21:00 (매주 수요일 정기휴무)
- 주소: 서울 강서구 염창동 184-8 어반카운티 지하 1층 B01호

---

## 개발 가이드

### 기술 스택

- **Next.js 16** (App Router, `output: 'export'` 정적 빌드)
- **Tailwind CSS v4** (라이트 테마, `@theme inline` 커스텀 변수)
- **React Three Fiber + drei** (홈 히어로 3D 씬)
- **Framer Motion** (스크롤 애니메이션, 메뉴 전환)

### 로컬 개발

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # 정적 빌드 → out/
npm test          # Vitest 실행
```

### 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── layout.tsx          # 글로벌 레이아웃 (Header, Footer, JSON-LD, 폰트)
│   ├── page.tsx            # 홈 (Hero → InstagramFeed → Services → CTA)
│   ├── portfolio/page.tsx
│   ├── reserve/page.tsx
│   ├── location/page.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/             # Header, Footer, MobileMenu
│   ├── three/              # Scene, CameraLens, FloatingShapes (홈 전용)
│   ├── home/               # HeroSection, ServicesSection, InstagramFeed, CTASection
│   ├── portfolio/          # InstagramGallery
│   ├── reserve/            # PricingTable, ReserveForm
│   └── location/           # NaverMap, DirectionInfo
├── lib/
│   ├── constants.ts        # 스튜디오 정보, URL, 가격, 정책 등 모든 상수
│   └── api.ts
└── types/
    └── index.ts
```

### 주요 설정

**next.config.ts**
- `output: 'export'` — S3 정적 배포용
- `trailingSlash: true` — S3 라우팅 (`/reserve/index.html`)
- `images.unoptimized: true` — 정적 빌드 필수

**디자인 토큰 (globals.css)**
라이트 테마. `@theme inline`으로 Tailwind 커스텀 색상 정의.

**Three.js 구조**
- `Scene.tsx` — Canvas, 조명, 마우스 패럴랙스, 모바일 lite 모드
- `CameraLens.tsx` — 투명 유리 구체 (MeshTransmissionMaterial)
- `FloatingShapes.tsx` — 미니멀 빛 파티클
- `HeroSection.tsx`에서 `next/dynamic` SSR: false로 로드

### 배포 (GitHub Actions)

`.github/workflows/deploy.yml`: `push to main → npm ci → build → S3 sync → CloudFront invalidation`

필요한 GitHub Secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`

### 상수 변경

모든 스튜디오 정보는 `src/lib/constants.ts`에 집중 관리:
스튜디오 정보, 외부 URL, 서비스/가격/정책, 네비게이션 링크
