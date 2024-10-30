import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";

import "@/styles/tailwind.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "homepage",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/shortcut-icon.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://next-isr-bug.vmdevel.cz"),
  alternates: {
    canonical: "/",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="cs"
    >
      <head>
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
      </head>
      <body className="flex h-full flex-col">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
