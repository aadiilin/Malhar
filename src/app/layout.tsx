import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malharul Islam Academy | Empowering Community Through Education",
  description:
    "Malharul Islam Academy - A premier Islamic educational institution at Vellamchira, Thodupuzha, Idukki, Kerala. Quality education, community development, and Islamic values.",
  keywords: "Malharul Islam Academy, Vellamchira, Thodupuzha, Idukki, Kerala, Islamic education, community development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
