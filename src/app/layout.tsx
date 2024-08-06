import { CSPostHogProvider } from "@/app/provider";
import "@/styles/globals.css";

import { Open_Sans as Font } from "next/font/google";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Jayesh Bhole",
  description: "Things I've been up to. Things I've lost sleep over.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Font({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${font.className}`}>
      <CSPostHogProvider>
        <body>{children}</body>
      </CSPostHogProvider>
    </html>
  );
}
