import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AOSInit } from "./module/aos";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = localFont({
  src: "./fonts/Inter-Regular.woff",
  variable: "--font-inter",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Home",
  description: "Lost n Found Home",
  
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <AOSInit/>

      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        <ToastContainer/>
        {children}
      </body>
    </html>
  );
}
