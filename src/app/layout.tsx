import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { STUDIO, URLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: "스튜디오 달리 | 증명사진 · 여권사진 · 프로필 촬영",
    template: "%s | 스튜디오 달리",
  },
  description:
    "서울 강서구 염창동에 위치한 전문 촬영 스튜디오. 증명사진, 여권사진, 프로필 촬영을 합리적인 가격에 만나보세요.",
  keywords: [
    "증명사진",
    "여권사진",
    "프로필촬영",
    "스튜디오",
    "염창동",
    "강서구",
    "스튜디오 달리",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "스튜디오 달리",
    title: "스튜디오 달리 | 증명사진 · 여권사진 · 프로필 촬영",
    description:
      "서울 강서구 염창동에 위치한 전문 촬영 스튜디오. 합리적인 가격에 전문 촬영을 만나보세요.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PhotographyBusiness",
              name: STUDIO.name,
              alternateName: STUDIO.nameEn,
              description: STUDIO.description,
              image: "/logo.jpeg",
              telephone: STUDIO.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: "염창동 184-8 어반카운티 지하 1층 B01호",
                addressLocality: "강서구",
                addressRegion: "서울",
                addressCountry: "KR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: STUDIO.coordinates.lat,
                longitude: STUDIO.coordinates.lng,
              },
              url: "https://studiodarly.com",
              sameAs: [URLS.instagram, URLS.kakaoChannel],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "10:00",
                closes: "19:00",
              },
              priceRange: "₩25,000 ~ ₩30,000",
            }),
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
