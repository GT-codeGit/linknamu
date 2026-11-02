import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { profile } from "@/data/profile";

// 한글까지 고르게 둥근 산세리프. 패키지의 가변 폰트를 직접 호스팅합니다.
const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} | 링크나무`,
  description: profile.bio,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// 첫 페인트 전에 저장된 테마(없으면 시스템 설정)를 적용해 깜빡임을 막습니다.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${pretendard.variable} min-h-screen bg-gradient-to-b from-[#FFF9F0] via-[#FFF1E4] to-[#FFDCC7] bg-fixed font-sans text-stone-800 antialiased dark:from-[#1A1512] dark:via-[#211915] dark:to-[#2E1F18] dark:text-stone-100`}
      >
        {children}
      </body>
    </html>
  );
}
