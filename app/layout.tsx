import "./globals.css";
import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
//import { Analytics } from "@vercel/analytics/react";

const InterFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Hive 3747",
  description:
    "A high school robotics team based in Sandy, Utah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <meta property="og:image" content="/opengraph-image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="832" />
      <meta
        property="og:site_name"
        content="The Hive 3747"
      />
      
      <meta name="twitter:image" content="/twitter-image.png" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="832" />
      <body className={InterFont.className}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}