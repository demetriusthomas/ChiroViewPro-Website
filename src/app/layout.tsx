import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chiroviewpro.com"),
  title: {
    default: "ChiroView Pro | Advanced Chiropractic Practice Management Software",
    template: "%s | ChiroView Pro",
  },
  description:
    "Streamline your chiropractic practice with ChiroView Pro. DICOM imaging, patient management, AI-powered SOAP notes, automated scheduling, and more. Built for modern chiropractors.",
  keywords: [
    "chiropractic software",
    "practice management",
    "DICOM viewer",
    "chiropractic EHR",
    "patient management",
    "SOAP notes",
    "chiropractic scheduling",
    "medical imaging software",
    "chiropractor software",
    "healthcare practice management",
  ],
  authors: [{ name: "ChiroView Pro" }],
  creator: "ChiroView Pro",
  publisher: "ChiroView Pro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chiroviewpro.com",
    siteName: "ChiroView Pro",
    title: "ChiroView Pro | Advanced Chiropractic Practice Management",
    description:
      "The complete practice management solution for modern chiropractors. DICOM imaging, patient scheduling, AI-powered notes, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ChiroView Pro - Practice Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChiroView Pro | Chiropractic Practice Management",
    description:
      "Streamline your practice with advanced DICOM imaging, patient management, and AI-powered tools.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-navy-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
