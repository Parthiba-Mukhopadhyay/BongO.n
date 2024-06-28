import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JeevanSathi",
  description: "Created by BongO(N)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow p-4 md:p-8 lg:p-16">
            {children}
          </main>
          <Chatbot/>
      </body>
    </html>
  );
}
