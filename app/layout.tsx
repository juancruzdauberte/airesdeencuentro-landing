import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa El Encuentro | Alquiler Temporario Exclusivo",
  description:
    "Residencia boutique exclusiva para tu refugio de calma, luz y naturaleza. Espacios luminosos, jardín privado y diseño cálido. Alquiler temporario en zona residencial.",
  viewport: "width=device-width, initial-scale=1.0",
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
