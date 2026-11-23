export const metadata = {
  title: {
    default: "Sobha Hennur Township, Aurelia & New Launches in Bangalore",
    template: "%s | Sobha Homes Bangalore",
  },
  description:
    "Your direct gateway to Sobha's newest Bangalore addresses — from the 50+ acre Sobha Hennur Township to Sobha Aurelia, One World, Townpark and Ayana. Browse 1, 2, 3 & 4 BHK layouts, master plans and amenities, and get current pricing and pre-launch offers, all in one place.",
  keywords: [
    // Brand & General
    "Sobha Limited",
    "Sobha Realty Bangalore",
    "Luxury Apartments Bengaluru",
    "New Launch Projects Bangalore",
    "Premium Flats for sale in Bangalore",

    // Sobha Hennur
    "Sobha Hennur",
    "Sobha Hennur Township",
    "Sobha Hennur Main Road",
    "Sobha Hennur Pre-launch",
    "Sobha Aurelia",

    // Sobha Altair
    "Sobha Altair",
    "Sobha Altair Hennur Road",
    "Sobha Altair 3 BHK Price",
    "Sobha Altair Reviews",

    // Sobha Hoskote
    "Sobha Hoskote",
    "Sobha Projects Hoskote",
    "sobha one world",
    "Sobha East Bangalore",
    "Sobha Hoskote Pre-launch",
    "Apartments near STRR Bangalore",

    // Sobha Townpark
    "Sobha Townpark",
    "Sobha Townpark Electronic City",
    "Sobha Townpark Hosur Road",
    "Sobha Townpark Manhattan Towers",
    "Sobha Townpark Queens Towers",

    // Sobha Ayana
    "Sobha Ayana",
    "Sobha Ayana New Launch",
    "Sobha Ayana Bangalore",
    "Sobha Ayana Floor Plans",

    // Location Specific
    "Flats in Hennur Road",
    "Apartments in Hoskote",
    "Real Estate Electronic City",
    "Gated Community Apartments Bangalore",
  ],
  alternates: {
    canonical: "https://www.sobhaltd.com",
  },
  metadataBase: new URL("https://www.sobhaltd.com"),
  category: "Real Estate | Residential | Luxury Apartments | New Launch",

  // Icon configuration
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/sobha-icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: ["/apple-icon.png"],
    shortcut: ["/favicon.ico"],
  },

  // Author & Creator Information
  authors: [
    {
      name: "CDevXGen Technologies",
      url: "https://www.cdevxgen.com",
    },
  ],
  creator: "CDevXGen Technologies",
  publisher: "Sobha Authorized Marketing Partner", // or appropriate entity

  // Open Graph for Social Media (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Sobha Hennur Township & New Bangalore Launches",
    description:
      "From the 50+ acre Sobha Hennur Township to Aurelia, One World, Townpark and Ayana — explore floor plans, pricing and pre-launch offers for Sobha's newest Bangalore homes.",
    url: "https://www.sobhaltd.com",
    siteName: "Sobha Homes Bangalore",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/shobalogo.png", // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Sobha Projects Bengaluru - Altair, Hoskote, Townpark, Ayana",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Sobha Hennur Township & New Bangalore Launches",
    description:
      "Explore Sobha Hennur Township, Aurelia, One World, Townpark & Ayana — floor plans, pricing and pre-launch offers, all in one place.",
    images: ["/shobalogo.png"], // Ensure this image exists
  },

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Optional: Geo-tagging for Local SEO
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946", // Approx Bangalore coordinates
    ICBM: "12.9716, 77.5946",
  },

  language: "en",
  rating: "General",
};
