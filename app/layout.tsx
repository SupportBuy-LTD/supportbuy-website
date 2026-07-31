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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
          id="gtm"
          strategy="afterInteractive"
        >
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WLJLXMSZ');`}
        </Script>
      </head>
      <body
        className={clsx(
          fontSans.variable,
        )}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLJLXMSZ" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
          }}
        >
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
