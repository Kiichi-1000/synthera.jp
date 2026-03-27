import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Synthera — Creative Digital Studio",
    template: "%s | Synthera",
  },
  description:
    "テクノロジーとクリエイティビティの融合により、新しい価値を創造するクリエイティブデジタルスタジオ。",
  metadataBase: new URL("https://synthera.jp"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${display.variable} ${sans.variable}`}>
      <body
        className={`${sans.className} relative min-h-screen flex flex-col text-[15px] leading-relaxed text-[var(--color-ink)] antialiased`}
      >
        <div className="mesh-bg" aria-hidden />
        <Header />
        <main className="relative z-10 flex-1 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-[3.75rem] md:pb-0 md:pt-[5.5rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
