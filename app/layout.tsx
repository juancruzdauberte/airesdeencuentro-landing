import type { Metadata, Viewport } from "next";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "El Encuentro - Casa de Descanso | Alquiler Vacacional Exclusivo",
  description:
    "Descubre El Encuentro: una experiencia de alquiler temporal diseñada para el confort, la naturaleza y momentos inolvidables.",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "El Encuentro - Casa de Descanso",
    description:
      "Tu refugio ideal para desconectar y volver a conectar con la naturaleza.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
