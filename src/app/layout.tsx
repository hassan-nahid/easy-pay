import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap', 
});
export const metadata: Metadata = {
  title: "Easy Pay",
  description: "Pay fast and smarterfrom anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
      >
        {children}
      </body>
    </html>
  );
}
