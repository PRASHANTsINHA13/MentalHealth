import type { Metadata } from "next";
import { Toaster } from "sonner";

import "./globals.css";
import { inter } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Mental health care bot",
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
