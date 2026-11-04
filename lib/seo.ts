import type { Metadata } from 'next';

const siteUrl = 'https://airesdeencuentrobaradero.net';
const title = 'Casa de descanso en Baradero | Aires de Encuentro';
const description =
  'Disfruta de Aires de Encuentro, casa de alquiler temporal en Baradero, Buenos Aires, con piscina, jardín y galería cubierta. Consulta disponibilidad para tu estadía.';
const image = '/images/gallery/house-12.webp';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Aires de Encuentro Baradero',
    type: 'website',
    locale: 'es_AR',
    images: [{ url: image, alt: 'Aires de Encuentro con piscina, jardín y galería cubierta en Baradero' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },
};

export const lodgingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Aires de Encuentro',
  url: `${siteUrl}/`,
  description,
  image: `${siteUrl}${image}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Che Guevara 711',
    addressLocality: 'Baradero',
    addressRegion: 'Buenos Aires',
    postalCode: '2942',
    addressCountry: 'AR',
  },
};
