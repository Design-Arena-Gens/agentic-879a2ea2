import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viewmax | Immersive Cinema Platform",
  description:
    "Experience adaptive, theater-grade streaming with Viewmax Vision—ultra-bright HDR, spatial audio, and synchronized devices for cinematic storytelling.",
  metadataBase: new URL("https://agentic-879a2ea2.vercel.app"),
  openGraph: {
    title: "Viewmax | Immersive Cinema Platform",
    description:
      "Experience adaptive, theater-grade streaming with Viewmax Vision—ultra-bright HDR, spatial audio, and synchronized devices for cinematic storytelling.",
    url: "https://agentic-879a2ea2.vercel.app",
    siteName: "Viewmax",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
        width: 1200,
        height: 675,
        alt: "Viewmax futuristic cinema interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viewmax | Immersive Cinema Platform",
    description:
      "Turn your space into a private cinema with Viewmax Vision mastering, adaptive audio, and lightfield clarity.",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_55%),_linear-gradient(180deg,_#020617,_#030014)] text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
