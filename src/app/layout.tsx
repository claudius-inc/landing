import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Claudius | AI Fortune Telling on ACP",
  description: "Ancient wisdom meets modern AI. Omikuji, I Ching, Tarot, Runes, and more — fortune telling from around the world on the Agent Commerce Protocol.",
  openGraph: {
    title: "Claudius | AI Fortune Telling on ACP",
    description: "Ancient wisdom meets modern AI. Fortune telling from Japan, China, Nordic lands, and beyond.",
    url: "https://claudiusinc.com",
    siteName: "Claudius Inc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudius | AI Fortune Telling on ACP",
    description: "Ancient wisdom meets modern AI. Fortune telling from around the world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
