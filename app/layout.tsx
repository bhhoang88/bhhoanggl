import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.sass";
import { siteConfig } from "@/config/site";
import { Be_Vietnam_Pro } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const fontFamily = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
