import type { Metadata } from 'next';
import { Lato, Poppins } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Mohishree Facility Services - Professional Facility Management',
  description: 'Leading provider of comprehensive facility management services including housekeeping, security, maintenance, and more. Trusted by businesses across India.',
  keywords: 'facility management, housekeeping services, security services, pest control, landscaping, pantry services, waste management',
  authors: [{ name: 'Mohishree Facility Services' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: 'Mohishree Facility Services',
    description: 'Professional Facility Management Solutions',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${poppins.variable}`}>
      <body className={lato.className}>
        {/* Translucent Logo Watermark Background */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/mohishree-logo.jpg)',
            backgroundRepeat: 'repeat',
            backgroundSize: '400px 400px',
            backgroundPosition: 'center',
            opacity: 0.03,
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Main Content - positioned above watermark */}
        <div className="relative z-10">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          {/* Vercel Speed Insights */}
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
