import type { Metadata } from "next";
import { Instrument_Sans, Italiana } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { CurrencyProvider } from "@/components/CurrencyProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans"
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana"
});

export const metadata: Metadata = {
  title: "Heaven Beauty",
  description: "A soft, lightweight tint for radiant everyday beauty.",
  icons: {
    icon: "/images/logo-icon.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${italiana.variable}`}>
      <body>
        <CurrencyProvider>
          <CartProvider>{children}</CartProvider>
        </CurrencyProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
