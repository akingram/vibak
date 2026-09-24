import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    "https://made-simple-cleans-premium.thesoftwaretriad.chatgpt.site",
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Made Simple Cleans | Professional Cleaning Across East London",
    template: "%s | Made Simple Cleans",
  },
  description:
    "Premium home, Airbnb, end-of-tenancy, and commercial cleaning across East London.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Made Simple Cleans",
    description: "Professional cleaning across East London.",
    url: "/",
    siteName: "Made Simple Cleans",
    images: [
      {
        url: "/og.png",
        width: 1792,
        height: 1024,
        alt: "Made Simple Cleans social preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Made Simple Cleans",
    description: "Professional cleaning across East London.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
