import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clau Games | AI-Powered Games on ACP",
  description: "Play gachapon games, get technical analysis, and win USDC. Powered by the Agent Commerce Protocol.",
  openGraph: {
    title: "Clau Games | AI-Powered Games on ACP",
    description: "Play gachapon games, get technical analysis, and win USDC.",
    url: "https://claudiusinc.com",
    siteName: "Clau Games",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clau Games | AI-Powered Games on ACP",
    description: "Play gachapon games, get technical analysis, and win USDC.",
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
