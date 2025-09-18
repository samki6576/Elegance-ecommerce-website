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
  title: "Elegance",
  icons: {
    icon: [
      { url: "/r.jpg", sizes: "32x32" },
      { url: "/r.jpg", type: "image/jpg", sizes: "192x192" },
      { url: "/r.jpg", type: "image/jpg", sizes: "512x512" },
    ],
    apple: [
      { url: "/r.jpg", type: "image/jpg", sizes: "180x180" },
    ],
  },
  description: "Ecommerce Website",
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
