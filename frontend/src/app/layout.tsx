import type { Metadata } from "next";
import { Toaster } from "sonner";

import "./globals.css";
import { inter } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Ai mental health chatbot using deep neural network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
