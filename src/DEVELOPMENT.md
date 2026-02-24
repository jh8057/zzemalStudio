# 개발 가이드

## 기술 스택

- **Next.js 16** (App Router, `output: 'export'` 정적 빌드)
- **Tailwind CSS v4** (다크 테마, `@theme inline` 커스텀 변수)
- **React Three Fiber + drei** (홈 히어로 3D 씬)
- **Framer Motion** (스크롤 애니메이션, 메뉴 전환)
- **sonner** (토스트 알림)
- **Vitest + React Testing Library** (단위 테스트)

## 로컬 개발

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # 정적 빌드 → out/
npm test          # Vitest 실행
```

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── layout.tsx          # 글로벌 레이아웃 (Header, Footer, JSON-LD, 폰트)
│   ├── page.tsx            # 홈 (Hero + Services + Instagram + CTA)
│   ├── portfolio/page.tsx
│   ├── reserve/page.tsx
│   ├── location/page.tsx
│   ├── admin/              # 어드민 (layout에서 인증 가드)
│   └── not-found.tsx
├── components/
│   ├── layout/             # Header, Footer, MobileMenu
│   ├── three/              # Scene, CameraLens, FloatingShapes (홈 전용)
│   ├── home/               # HeroSection, ServicesSection, InstagramFeed, CTASection
│   ├── portfolio/          # InstagramGallery
│   ├── reserve/            # PricingTable, ReserveForm
│   ├── location/           # NaverMap, DirectionInfo
│   └── admin/              # AdminLogin, ReservationTable
├── hooks/
│   └── useAuth.ts          # 어드민 JWT 인증 (sessionStorage)
├── lib/
│   ├── constants.ts        # 스튜디오 정보, URL, 가격, 정책 등 모든 상수
│   └── api.ts              # Lambda API 호출 (예약 생성, 어드민 로그인/조회/상태변경)
└── types/
    └── index.ts
```

## 주요 설정

### next.config.ts
- `output: 'export'` — S3 정적 배포용
- `trailingSlash: true` — S3 라우팅 (`/reserve/index.html`)
- `images.unoptimized: true` — 정적 빌드 필수

### 디자인 토큰 (globals.css)
다크 갤러리 테마. `@theme inline`으로 Tailwind 커스텀 색상 정의:
- `background: #0a0a0a`, `foreground: #f5f5f5`
- `surface: #141414`, `border: #2a2a2a`, `muted: #737373`

### Three.js
- `Scene.tsx` — Canvas, 조명, 마우스 패럴랙스, 모바일 lite 모드
- `CameraLens.tsx` — 투명 유리 구체 (MeshTransmissionMaterial)
- `FloatingShapes.tsx` — 미니멀 빛 파티클 3개
- `HeroSection.tsx`에서 `next/dynamic` SSR: false로 로드

## Lambda API

`lambda/` 디렉토리에 SAM 템플릿 + 함수:

| 엔드포인트 | 함수 | 설명 |
|-----------|------|------|
| `POST /reservations` | reservations.mjs | 예약 생성 (DynamoDB + SES) |
| `POST /admin/login` | admin.mjs | 비밀번호 검증, JWT 발급 |
| `GET /admin/reservations` | admin.mjs | 예약 목록 (JWT 필요) |
| `PATCH /admin/reservations/:id` | admin.mjs | 상태 변경 (JWT 필요) |

배포: `sam build && sam deploy --guided`

## 배포 (GitHub Actions)

`.github/workflows/deploy.yml`:
```
push to main → npm ci → build → S3 sync → CloudFront invalidation
```

필요한 GitHub Secrets:
- `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`

## 상수 변경

모든 스튜디오 정보는 `src/lib/constants.ts`에 집중:
- 스튜디오 정보 (이름, 주소, 전화, 계좌)
- 외부 URL (Instagram, 카카오, 네이버)
- 가격/정책
- 네비게이션 링크
