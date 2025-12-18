import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarField from "@/components/canvas/StarField";
import Providers from "@/components/providers/Providers";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A dynamic developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-[#050505] text-foreground antialiased selection:bg-white/20`}>
        <Providers>
          <LanguageProvider>
            <StarField />
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
