import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Peace Nnorom",
  description: "Full-Stack Engineer building scalable business applications, enterprise platforms, and digital products. Expert in React, Next.js, TypeScript, NestJS & Node.js.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: '16x16', type: 'image/png' },
      { url: "/favicon-32x32.png", sizes: '32x32', type: 'image/png' },
      { url: "/favicon.ico", sizes: 'any' },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/site.webmanifest", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}