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
       <body className="flex flex-col min-h-screen bg-gray-900">
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Chatbot/>
      </body>
    </html>
  );
}
