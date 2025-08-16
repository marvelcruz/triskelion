import type { Metadata } from "next";
import { montserrat, noto_sans, rubik } from "./styles/fonts";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Triskelion SVG as a string for favicon
const triskelionSvg = `
<svg width="32" height="32" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="triskelion-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="50%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#ec4899" />
    </linearGradient>
  </defs>
  
  <circle cx="60" cy="60" r="6" fill="url(#triskelion-gradient)" />
  
  <g transform="translate(60,60)">
    <g transform="rotate(0)">
      <path
        d="M 0,0 Q -12,-20 -20,-32 Q -28,-36 -32,-28 Q -28,-20 -20,-16 Q -12,-12 -8,-20 Q -6,-28 -12,-32"
        fill="url(#triskelion-gradient)"
        stroke="rgba(255,255,255,0.3)"
        stroke-width="0.5"
      />
      <circle cx="-20" cy="-28" r="6" fill="url(#triskelion-gradient)" />
    </g>
    <g transform="rotate(120)">
      <path
        d="M 0,0 Q -12,-20 -20,-32 Q -28,-36 -32,-28 Q -28,-20 -20,-16 Q -12,-12 -8,-20 Q -6,-28 -12,-32"
        fill="url(#triskelion-gradient)"
        stroke="rgba(255,255,255,0.3)"
        stroke-width="0.5"
      />
      <circle cx="-20" cy="-28" r="6" fill="url(#triskelion-gradient)" />
    </g>
    <g transform="rotate(240)">
      <path
        d="M 0,0 Q -12,-20 -20,-32 Q -28,-36 -32,-28 Q -28,-20 -20,-16 Q -12,-12 -8,-20 Q -6,-28 -12,-32"
        fill="url(#triskelion-gradient)"
        stroke="rgba(255,255,255,0.3)"
        stroke-width="0.5"
      />
      <circle cx="-20" cy="-28" r="6" fill="url(#triskelion-gradient)" />
    </g>
  </g>
</svg>
`;

// Convert SVG to data URL for favicon
const triskelionDataUrl = `data:image/svg+xml;base64,${Buffer.from(triskelionSvg).toString('base64')}`;

export const metadata: Metadata = {
  title: "Triskelion",
  description: "Triskelion Portfolio - Social Media Marketing Agency",
  keywords: ["Triskelion", "Social Media", "Marketing", "Agency", "Digital Marketing"],
  authors: [{ name: "Triskelion Agency" }],
  icons: {
    icon: [
      {
        url: triskelionDataUrl,
        type: "image/svg+xml",
      },
      {
        url: "/icons/TRI.ico", // Fallback to original
        type: "image/x-icon",
      }
    ],
    apple: triskelionDataUrl,
    shortcut: triskelionDataUrl,
  },
  openGraph: {
    title: "Triskelion - Social Media Marketing Agency",
    description: "We help businesses grow their social media presence with authentic, results-driven strategies.",
    type: "website",
    images: [
      {
        url: triskelionDataUrl,
        width: 120,
        height: 120,
        alt: "Triskelion Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Triskelion - Social Media Marketing Agency",
    description: "We help businesses grow their social media presence with authentic, results-driven strategies.",
    images: [triskelionDataUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-TileImage" content={triskelionDataUrl} />
        
        {/* Preload the Triskelion logo for better performance */}
        <link rel="preload" href={triskelionDataUrl} as="image" type="image/svg+xml" />
      </head>
      <body
        className={`${montserrat.variable} ${noto_sans.variable} ${rubik.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}