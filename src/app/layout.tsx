import type { Metadata } from "next";
import { Bebas_Neue, Sora } from "next/font/google";
import "./globals.css";

const heading = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const body = Sora({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "CraftedByChris | Handcrafted Heat",
  description:
    "Premium handcrafted shoe drops for parties, fashion events, and everyday flex. Pre-order the next hot release from CraftedByChris.",
  metadataBase: new URL("https://craftedbychrisllc.com"),
  openGraph: {
    title: "CraftedByChris | Handcrafted Heat",
    description:
      "Premium handcrafted shoe drops for parties, fashion events, and everyday flex.",
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
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
