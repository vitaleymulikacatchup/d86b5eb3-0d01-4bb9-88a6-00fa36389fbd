import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse — fun memecoin with easy buy steps and tokenomics",
  description: "MemePulse makes memecoin buying playful and transparent—clear steps to buy, strong tokenomics, and a community-first vibe.",
  keywords: ["memecoin", "crypto", "buy memecoin", "tokenomics", "community", "meme", "web3", "crypto landing"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MemePulse",
    title: "MemePulse — fun memecoin with easy buy steps and tokenomics",
    description: "MemePulse makes memecoin buying playful and transparent—clear steps to buy, strong tokenomics, and a community-first vibe.",
    images: [
      {
        url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759135207240-b6bbe84b.jpg",
        width: 1200,
        height: 630,
        alt: "Mascot memecoin character with bold colors and playful vibe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse — fun memecoin with easy buy steps and tokenomics",
    description: "MemePulse makes memecoin buying playful and transparent—clear steps to buy, strong tokenomics, and a community-first vibe.",
    images: [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759135207240-b6bbe84b.jpg",
    ],
  },
  robots: { index: true, follow: true },
  icons: { type: "image/x-icon", url: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}