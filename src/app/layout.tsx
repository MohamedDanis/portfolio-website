import "./globals.css";

import { cn } from "@/lib/utils";
import { geistSans, geistMono } from "./fonts/fonts";
import { constructMetadata } from "@/lib/metadata";
import { Rubik } from 'next/font/google'

export const metadata = constructMetadata();

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--rubik',
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", rubik.variable)}
      >
        {children}
      </body>
    </html>
  );
}
