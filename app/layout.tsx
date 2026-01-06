import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Head from "next/head";

const sen = Sen({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Perk Studio",
  description:
    "Welcome to ThePerkStudio, where your brand's full potential awaits discovery. In the fast-paced world of branding, it's easy for essential elements to slip through the cracks, leaving your brand feeling incomplete or lacking that certain je ne sais quoi. But fear not, because at ThePerkStudio, we specialize in uncovering those hidden gems and adding that extra 'perk' that transforms good brands into unforgettable ones. Let us help you unlock the true essence of your brand and elevate it to new heights of success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <html lang="en">
        <body
          className={cn(
            sen.className,
            "max-w-[1450px] mx-auto px-[30px] md:px-[100px]"
          )}
          suppressHydrationWarning={true}
        >
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </body>
      </html>
    </>
  );
}
