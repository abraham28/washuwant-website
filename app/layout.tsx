import React from "react";
import "css/globals.scss";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { OFFICIAL_DOMAIN_URL } from "./constants";

const inter = Inter({
  style: "normal",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: [],
});

export const metadata: Metadata = {
  metadataBase: new URL(OFFICIAL_DOMAIN_URL),
  title: {
    default: "Wash U Want | Laundry Services in Novaliches, Quezon City",
    template: "%s | Wash U Want",
  },
  description:
    "Wash U Want offers reliable wash, dry, and fold laundry services in Novaliches, Quezon City—drop off or self-service options available.",
  keywords: [
    "laundry service",
    "wash and fold",
    "self service laundry",
    "Novaliches laundry",
    "Quezon City laundry",
    "laundry pickup",
  ],
  authors: [{ name: "Wash U Want" }],
  applicationName: "Wash U Want",
  openGraph: {
    type: "website",
    url: OFFICIAL_DOMAIN_URL,
    siteName: "Wash U Want",
    title: "Wash U Want | Laundry Services in Novaliches, Quezon City",
    description:
      "Professional wash, dry, and fold services with self-service options in Novaliches, QC.",
    locale: "en_PH",
    images: [
      {
        url: "/images/washuwant-banner.png",
        width: 1200,
        height: 630,
        alt: "Wash U Want laundry services banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wash U Want | Laundry Services",
    description:
      "Reliable wash, dry, and fold services with self-service options in Novaliches, QC.",
    images: ["/images/washuwant-banner.png"],
  },
  icons: [
    { url: "/favicon.ico", sizes: "any" },
    { type: "image/x-icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    {
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: OFFICIAL_DOMAIN_URL,
  },
  manifest: "/manifest.webmanifest",
  other: {
    "x-ua-compatible": "IE=edge",
  },
};

export const viewport: Viewport = {
  themeColor: "#0088aa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
