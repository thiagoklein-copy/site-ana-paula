import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Work_Sans,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { BUSINESS } from "@/lib/constants";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.anapaulasobierai.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Psicóloga em Novo Hamburgo | Ana Paula Sobierai · CRP 07/44922",
    template: "%s | Ana Paula Sobierai",
  },
  description:
    "Psicóloga clínica em Novo Hamburgo com abordagem psicanalítica. Atendimento presencial e online para crianças, adolescentes, adultos e idosos. CRP 07/44922.",
  keywords: [
    "psicóloga Novo Hamburgo",
    "psicoterapia psicanalítica",
    "psicóloga clínica Novo Hamburgo",
    "terapia online RS",
    "Ana Paula Sobierai",
  ],
  authors: [{ name: BUSINESS.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Ana Paula Sobierai Psicologia",
    title: "Psicóloga em Novo Hamburgo | Ana Paula Sobierai",
    description:
      "Um espaço de escuta psicanalítica para crianças, adolescentes, adultos e idosos. Presencial em Novo Hamburgo e online.",
    images: [
      {
        url: "/images/og-placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Ana Paula Sobierai — Psicóloga Clínica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga em Novo Hamburgo | Ana Paula Sobierai",
    description:
      "Psicoterapia psicanalítica em Novo Hamburgo e online. CRP 07/44922.",
    images: ["/images/og-placeholder.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${cormorant.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-ink">
        <Header />
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
