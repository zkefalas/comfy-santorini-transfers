import './globals.css';
import { Montserrat, Poppins, Cinzel } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ClientSideHelpers from '@/components/ClientSideHelpers';
import { Metadata } from 'next';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins', display: 'swap' });
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel', display: 'swap' });

// 1. SEO & AI METADATA (Server Side)
export const metadata: Metadata = {
  title: 'Comfy Santorini Transfers | Luxury VIP Private Car Service',
  description: 'Premium private transfers in Santorini. Reliable luxury taxi and VIP car services from Santorini Airport (JTR) and Athinios Port. Book your 24/7 private driver.',
  keywords: ['Santorini transfers', 'VIP taxi Santorini', 'Santorini airport pickup', 'Athinios port transfer', 'luxury car rental Santorini with driver'],
  openGraph: {
    title: 'Comfy Santorini Transfers | 24/7 VIP Service',
    description: 'Luxury private transportation in Santorini. Airport & Port VIP pickups.',
    url: 'https://www.comfysantorinitransfers.com',
    siteName: 'Comfy Santorini Transfers',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      className={`${montserrat.variable} ${poppins.variable} ${cinzel.variable} scroll-smooth`}
      suppressHydrationWarning // Απαραίτητο για την αποφυγή mismatch από extensions
    >
      <head>
        {/* 2. STRUCTURED DATA (JSON-LD) ΓΙΑ AI & GOOGLE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              "name": "Comfy Santorini Transfers",
              "description": "Premium luxury private transfers and VIP car services in Santorini.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Comfy Santorini Transfers",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Santorini",
                  "addressCountry": "GR"
                },
                "telephone": "+306934566077", // Ενημέρωσε το τηλέφωνό σου εδώ
                "url": "https://www.comfysantorinitransfers.com"
              },
              "areaServed": "Santorini, Greece",
              "serviceType": ["Airport Transfer", "Port Transfer", "VIP Tours"]
            })
          }}
        />
      </head>
      <body 
        className="antialiased font-poppins text-white bg-black min-h-screen flex flex-col"
        style={{ backgroundColor: '#000000', margin: 0 }}
        suppressHydrationWarning // Διπλή ασφάλεια για το hydration mismatch
      >
        {/* Client-side logic (AOS init κλπ) */}
        <ClientSideHelpers />
        
        <Navbar />
        
        {/* Το κύριο περιεχόμενο της σελίδας */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer & Cookie Consent */}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}