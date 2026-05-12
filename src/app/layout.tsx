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
  title: "CraftedByChris · Custom Hand-Painted Sneakers · Baltimore, MD",
  description:
    "CBC — Crafted By Chris LLC. Custom hand-painted Air Force 1 sneakers built one pair at a time in Baltimore, MD. 5+ years creating limited-run custom footwear for the DMV. Shop on Etsy.",
  metadataBase: new URL("https://craftedbychrisllc.com"),
  keywords: [
    "custom hand-painted shoes Baltimore",
    "CBC footwear",
    "Crafted By Chris",
    "DMV custom shoe maker",
    "Baltimore custom sneakers",
    "custom Air Force 1 Maryland",
    "limited edition custom shoes DMV",
    "CraftedByChris LLC",
    "custom painted shoes DC Maryland Virginia",
    "Etsy custom sneakers Baltimore",
  ],
  openGraph: {
    title: "CraftedByChris · Custom Hand-Painted Sneakers · Baltimore, MD",
    description:
      "Hand-painted custom AF1 sneakers built in Baltimore, MD. 5+ years, hundreds of Etsy customers, zero shortcuts. Shop CBC on Etsy.",
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
