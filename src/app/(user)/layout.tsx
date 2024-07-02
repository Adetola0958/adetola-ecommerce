import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "../../styles/globals.css";
import "slick-carousel/slick/slick.css"
import BannerThumbnails from "@/components/BannerThumbnails";
import Layout from "@/components/Layout";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adetola Shopping Store || best place to shop",
  description: "Your trusted online store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <Navbar/>
          <BannerThumbnails/>
          {children}
        </Layout>
      </body>
    </html>
  );
}
