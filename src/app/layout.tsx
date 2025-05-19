import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { cn } from "@/lib/utils";
import "./globals.css";
import Image from "next/image";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { ThemeProvider } from "next-themes";
import SidebarComponent from "./components/Sidebar";
import Link from "next/link";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Spiritual Doses",
  description: "A tool to guide you in your Spiritual Journey. ",
  keywords: "dosesofislam,dosesofimaan,Islam,Imaan,Ihsaan",
  manifest: "/web.manifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        {/* Google Translate */}
        <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></Script>

        {/* Google Translate CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.26tY-h6gH9w.L.W.O/am=CAM/d=0/rs=AN8SPfpIXxhebB2A47D9J-MACsXmFF6Vew/m=el_main_css"
        />
      </head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className="flex flex-col min-h-screen bg-background font-sans antialiased">
          <SidebarProvider defaultOpen={true}>
            <SidebarComponent />
            {/* <SidebarTrigger className="ml-2 aspect-square hidden md:block" /> */}
            <main className="flex flex-col w-full">
              <div className="border-b flex justify-between xl:hidden py-2 px-3 sticky top-0 z-[20] bg-white/95 dark:bg-gray-700/95">
                <SidebarTrigger className="ml-2 aspect-square" />
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="Brand logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </Link>

                <div className="w-[28px]"></div>
              </div>

              <div className="z-10">{children}</div>
              {/* <div
                id="google_translate_element"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  right: 16,
                  top: 16,
                  zIndex: 1000,
                  backgroundColor: "#f7f7f7",
                  padding: "12px",
                }}
              ></div> */}
            </main>
          </SidebarProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
