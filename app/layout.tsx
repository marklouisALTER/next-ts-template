import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProviders from "./provider/query-providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata:Metadata = {
  title: "Template Ts",
  description: "Template description" 
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <QueryProviders>
          <main>
            {children}
          </main>
        </QueryProviders>
      </body>
    </html>
  );
}
