import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "شركات الأشخاص - النظام التجاري السعودي",
  description: "لعبة تعليمية تفاعلية عن شركات الأشخاص في النظام التجاري السعودي",
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="bg-sky-50">
      <body className={`${notoSansArabic.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
