import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { StringTuneInit } from "@/components/StringTuneInit";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Extracta / Index — The Copper Decommissioning Desk",
  description:
    "A field index for copper network decommissioning: audits, extraction, recovered capital. Zero upfront CAPEX, zero disruption to live service.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0a08",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        <Providers>
          <StringTuneInit />
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
