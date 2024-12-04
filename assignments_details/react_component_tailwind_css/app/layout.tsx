import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import "slick-carousel/slick/slick.css";


export const metadata: Metadata = {
  title: "Pakistan | Tour and Travel",
  description: "Tour and Travel app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body>
        
        {/* <main className="relative overflow-hidden"> */}
        <Navbar/>
          {children}
        <Footer/>
        {/* </main> */}
        
      </body>
    </html>
  );
}
