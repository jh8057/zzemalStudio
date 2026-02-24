# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Development server
npm run build      # Production build (static export to out/)
npm run lint       # ESLint
npm run test       # Run tests once (Vitest)
npm run test:watch # Watch mode
```

## Architecture

**Next.js 16 App Router** with static export (`output: "export"`). Deployed as a JAMstack app to S3 + CloudFront.

### Key directories

- `src/app/` — App Router pages: `/`, `/portfolio/`, `/reserve/`, `/location/`, `/admin/`
- `src/components/` — Organized by page (`home/`, `portfolio/`, `reserve/`, `location/`, `admin/`) + `layout/` and `three/`
- `src/lib/constants.ts` — **Single source of truth for all business data** (13KB): studio info, pricing, products, services, hours, URLs
- `src/lib/api.ts` — API client functions for reservation submission and admin CRUD (AWS Lambda + API Gateway backend)
- `src/hooks/useAuth.ts` — JWT auth for admin dashboard; stores token in `sessionStorage` under `darly_admin_token`

### Rendering pattern

- All interactive components require `"use client"` directive
- Three.js components use `dynamic(() => import(...), { ssr: false })` — never SSR
- Root layout is a Server Component

### Styling

Tailwind CSS v4 + CSS custom properties defined in `globals.css`. No CSS Modules or styled-components. Key theme tokens: `--color-accent: #8b7355` (brown), `--color-background: #faf9f7` (cream). Font: Pretendard (Korean-optimized).

### 3D / Performance

- `src/components/three/` contains React Three Fiber scenes
- Mobile/low-end devices run in "lite mode": `dpr={lite ? [1,1] : [1,2]}` and reduced geometry
- Detect lite mode via `navigator.userAgent` (Android) or CPU core count

### Data updates

To update business info (hours, pricing, services, contact), only edit `src/lib/constants.ts`. No other files need changing.

### Backend

Reservation API: AWS Lambda via API Gateway (`ap-northeast-2`). Endpoint hardcoded in `constants.ts` under `URLS`.

## Commit Convention

커밋 메시지 형식: `[scope] 설명` (한국어 허용)

```
[scope] 변경 내용 요약
```

**주요 scope 예시:**

| scope | 용도 |
|---|---|
| `[feat]` | 새 기능 추가 |
| `[fix]` | 버그 수정 |
| `[style]` | UI/스타일 변경 |
| `[refactor]` | 코드 리팩토링 |
| `[chore]` | 설정, 패키지, 기타 |
| `[컴포넌트명]` | 특정 컴포넌트 수정 (예: `[reserve]`, `[admin]`, `[three]`) |

대규모 변경은 자유 형식도 허용 (예: `개편 2차: 다크→라이트 테마 전면 개편`)

### Deployment

GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`: builds → syncs `out/` to S3 → invalidates CloudFront.

Required GitHub Secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`
