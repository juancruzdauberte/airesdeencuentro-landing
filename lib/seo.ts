import type { Metadata } from 'next';

const siteUrl = 'https://airesdeencuentrobaradero.net';
const title = 'Casa de descanso en Baradero | Aires de Encuentro';
const description =
  'Consultá disponibilidad y reservas en Baradero: Aires de Encuentro, casa de alquiler temporal con piscina, jardín y galería para disfrutar al aire libre.';
const image = '/images/gallery/house-12.webp';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'reservas',
    'reservas en baradero',
    'casas en baradero',
    'casa al aire libre',
    'alquiler temporal en Baradero',
    'casa con piscina en Baradero',
    'Aires de Encuentro',
  ],
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
