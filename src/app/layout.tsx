import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1e3a8a",
};

export const metadata: Metadata = {
  title: "ToP Cricket Team - Team of Puthumanassery",
  description:
    "Uniting Passion, Power, and Precision — Puthumanassery Cricket, Where Every Run Counts! Two times Pavaratty Champions.",
  keywords: "cricket, team, puthumanassery, sports, pavaratty, champions",
  authors: [{ name: "Team of Puthumanassery" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ToP Cricket",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "ToP Cricket Team - Team of Puthumanassery",
    description:
      "Uniting Passion, Power, and Precision — Puthumanassery Cricket, Where Every Run Counts!",
    type: "website",
    siteName: "ToP Cricket Team",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
