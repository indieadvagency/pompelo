import type { Metadata } from "next";
import { Poppins, DM_Sans, Fredoka } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const display = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Bubbly, rounded wordmark font — matches the Pompelo logo lettering
const logo = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-logo",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://pompelo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pompelo — Growing with Style",
    template: "%s · Pompelo",
  },
  description:
    "Pompelo designs comfortable, playful, premium fashion for every childhood adventure. Discover our collections, our story and our craft.",
  keywords: [
    "children's fashion",
    "kidswear",
    "premium kids clothing",
    "baby clothes",
    "Pompelo",
    "European childrenswear",
  ],
  authors: [{ name: "Pompelo" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Pompelo — Growing with Style",
    description:
      "Comfortable, playful, premium fashion for every childhood adventure.",
    siteName: "Pompelo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pompelo — Growing with Style",
    description:
      "Comfortable, playful, premium fashion for every childhood adventure.",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='24' fill='%23FA0000'/%3E%3Cpath d='M22 78 V44 C22 30 30 22 40 22 C46 22 50 25 50 33 C50 25 54 22 60 22 C70 22 78 30 78 44 V78' stroke='white' stroke-width='12' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Cellipse cx='42' cy='62' rx='4.6' ry='7' fill='white'/%3E%3Cellipse cx='58' cy='62' rx='4.6' ry='7' fill='white'/%3E%3C/svg%3E",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${logo.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
