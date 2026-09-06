import "@/styles/globals.css";
import {
  Metadata,
  Viewport,
} from "next";
import { Link } from "@heroui/link";
import { Analytics } from "@vercel/analytics/next";
import clsx from "clsx";
import Script from "next/script";
import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { GoogleTagManager } from "@next/third-parties/google";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "SupportBuy: Where Community Support Meets Verified Commerce",
    description:
      "Raise support for real needs or grow your business with community-backed funding. Every contribution goes directly to verified merchants — no middlemen, no misuse, no doubt.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "SupportBuy social preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SupportBuy: Where Community Support Meets Verified Commerce",
    description:
      "Raise support for real needs or grow your business with community-backed funding. Every contribution goes directly to verified merchants — no middlemen, no misuse, no doubt.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/supportbuy_logo.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Support Buy",
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media:
        "(prefers-color-scheme: light)",
      color: "white",
    },
    {
      media:
        "(prefers-color-scheme: dark)",
      color: "black",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
    >
      <head>
        <Script
          src="/pwa-global.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={clsx(
          fontSans.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
          }}
        >
          {children}
        </Providers>
        <Analytics />
        <Script
          src="/register-sw.js"
          strategy="afterInteractive"
        />
      </body>
      <GoogleTagManager gtmId="GTM-WLJLXMSZ" />
    </html>
  );
}
