import type { Metadata } from "next";
import { Archivo_Black, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const body = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "CraftedByChris · Drop 04",
  description:
    "Hand-built drops for party floors, fashion fronts and the daily street. Limited runs, numbered pairs, signed by Chris in Austin, TX.",
  metadataBase: new URL("https://craftedbychrisllc.com"),
  openGraph: {
    title: "CraftedByChris · Drop 04",
    description:
      "Hand-built drops for party floors, fashion fronts and the daily street. Limited runs, numbered pairs.",
    url: "https://craftedbychrisllc.com",
    siteName: "CraftedByChris",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
