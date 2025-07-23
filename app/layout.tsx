import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import { Inter } from 'next/font/google'
import { Playwrite_ID } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const playwriteId = Playwrite_ID({
  style: "normal",
  display: 'swap',
  weight: "400",
})


export const metadata: Metadata = {
  title: "Siddhesh Narsingkar",
  description: "This is about me.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`} style={{
        '--font-inter': inter.style.fontFamily,
        '--font-playwrite-id': playwriteId.style.fontFamily,
      } as React.CSSProperties}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
