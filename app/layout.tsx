import type { Metadata } from "next";
import { montserrat, noto_sans, rubik } from "./styles/fonts";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Triskelion",
  description: "Marvelous Olabode's Portfolio",
  icons: {
    icon: "/icons/icont.ico",
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
        className={`${montserrat.variable} ${noto_sans.variable} ${rubik.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
