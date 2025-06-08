import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "지혜의 길 - 삶의 지혜를 나누는 공간",
  description: "건강, 여가, 재테크 등 중장년층을 위한 유익한 정보를 제공하는 공간입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
