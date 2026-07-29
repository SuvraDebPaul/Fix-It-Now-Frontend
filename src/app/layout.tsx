import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import { plexSans, plexMono, bigShoulders } from "@/lib/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/providers/providers";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Fix It Now",
    default: "Fix It Now",
  },
  description: "Every job gets a ticket. Every ticket gets a pro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        roboto.variable,
        plexSans.variable,
        plexMono.variable,
        bigShoulders.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
