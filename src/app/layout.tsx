import PostHogPageView from "@/components/Posthog/PostHogPageView";
import { CSPostHogProvider } from "@/components/Posthog/PostHogProvider";
import "@/styles/globals.css";
import { type Metadata } from "next";
import { Open_Sans as Font } from "next/font/google";
import { Suspense } from "react";

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
        <Suspense>
          <PostHogPageView />
        </Suspense>
        <body>{children}</body>
      </CSPostHogProvider>
    </html>
  );
}
