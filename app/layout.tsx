import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    "https://vibak-cleaning-services.thesoftwaretriad.chatgpt.site",
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Vibak Cleaning Services | Professional Cleaning in Cheshire East",
    template: "%s | Vibak Cleaning Services",
  },
  description:
    "Client-focused domestic, office, Airbnb, hotel, commercial, and tenancy cleaning across Cheshire East.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Vibak Cleaning Services",
    description: "Cheshire East's new standard in professional cleaning.",
    url: "/",
    siteName: "Made Simple Cleans",
    images: [
      {
        url: "/og.png",
        width: 1792,
        height: 1024,
        alt: "Vibak Cleaning Services social preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibak Cleaning Services",
    description: "Professional cleaning across Cheshire East.",
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
