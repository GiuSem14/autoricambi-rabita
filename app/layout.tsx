import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import CookieManager from "@/components/CookieManager";

export const metadata: Metadata = {
  title: "Autoricambi Rabita - Barrafranca",
  description:
    "Autoricambi Rabita è il punto di riferimento per i ricambi auto a Barrafranca e nella provincia di Enna.",
  keywords: [
    "autoricambi Barrafranca",
    "ricambi auto Barrafranca",
    "ricambi Enna",
    "autoricambi Rabita",
  ],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Autoricambi Rabita – Ricambi Auto a Barrafranca",
    description: "Ricambi auto disponibili subito o su ordinazione a Barrafranca (EN). Risposta rapida via WhatsApp.",
    locale: "it_IT",
    type: "website",
  },
  alternates: {
    canonical: 'https://www.autoricambirabita.it',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="bg-brand-black text-brand-white antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <CookieManager />
      </body>
    </html>
  );
}
