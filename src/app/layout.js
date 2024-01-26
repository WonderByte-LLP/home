"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "WonderByte",
//   description: "WonderByte Software",
// };

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}