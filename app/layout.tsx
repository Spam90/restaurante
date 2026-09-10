import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { restaurantConfig } from "@/data/restaurant";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MobileReserveBar from "@/components/MobileReserveBar/MobileReserveBar";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(restaurantConfig.siteUrl),
  title: {
    default: `${restaurantConfig.name} — ${restaurantConfig.tagline} | ${restaurantConfig.city}`,
    template: `%s — ${restaurantConfig.name}`,
  },
  description: restaurantConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: restaurantConfig.name,
    title: `${restaurantConfig.name} — ${restaurantConfig.tagline}`,
    description: restaurantConfig.description,
    url: restaurantConfig.siteUrl,
    images: [
      {
        url: restaurantConfig.images.hero.src,
        width: 2200,
        height: 1467,
        alt: restaurantConfig.images.hero.alt,
      },
    ],
    locale: "es_DO",
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurantConfig.name} — ${restaurantConfig.tagline}`,
    description: restaurantConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: restaurantConfig.colors.ink,
  width: "device-width",
  initialScale: 1,
};

/** Datos estructurados del restaurante — alimentados desde la config central. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurantConfig.name,
  slogan: `${restaurantConfig.tagline} — ${restaurantConfig.description}`,
  servesCuisine: restaurantConfig.cuisine,
  priceRange: restaurantConfig.priceRange,
  telephone: restaurantConfig.contact.phone,
  url: restaurantConfig.siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurantConfig.address.street,
    addressLocality: restaurantConfig.address.city,
    addressCountry: "DO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { colors } = restaurantConfig;

  return (
    <html
      lang="es"
      className={`${serif.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--color-base:${colors.base};--color-ink:${colors.ink};--color-muted:${colors.muted};--color-accent:${colors.accent};--color-sage:${colors.accentAlt};}`,
          }}
        />
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileReserveBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
