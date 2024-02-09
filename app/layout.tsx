"use client";import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SessionProvider from "@/components/SessionProvider";
import React from "react";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>
          <ReactQueryProvider>
            <SessionProvider>
              <Navbar />
              {children}
            </SessionProvider>
          </ReactQueryProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
