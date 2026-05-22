import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiri – nemokami sąsiuviniai Lietuvos studentams",
  description: "Iš Estijos į Lietuvą atkeliaujanti „Kiri“ iniciatyva dalija studentams nemokamus sąsiuvinius su jūsų reklama. Sąsiuvinyje – formulių lapas, liniuotė ir kita naudinga informacija.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
