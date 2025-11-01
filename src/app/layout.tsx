import type { Metadata } from 'next';
import { Lato, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
