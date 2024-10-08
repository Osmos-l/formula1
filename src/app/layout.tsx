import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MobxProviderClient from "@/components/App/MobxProviderClient";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Formula1 LiveTracking",
  description: "LiveTracking of formula 1 current session",
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
      <MobxProviderClient>
        {children}
      </MobxProviderClient>
      </body>
    </html>
  );
}
