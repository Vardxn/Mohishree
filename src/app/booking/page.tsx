import { Metadata } from 'next';
import { MessageCircle, Mail } from 'lucide-react';
import businessConfig from '@/lib/config';

export const metadata: Metadata = {
  title: 'Book a Service | Mohishree Facility Services',
  description: 'Contact us to book your cleaning service. Chat on WhatsApp or send an email to schedule your service.',
};

export default function BookingPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919423679285';
  const whatsappMessage = encodeURIComponent('Hi! I would like to book a service. Can you help me?');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const emailLink = `mailto:${businessConfig.email.primary}?subject=Service%20Booking%20Request`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">
              Book Your Service
            </h1>
            <p className="text-xl opacity-90">
              Get in touch with us to schedule your service
            </p>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WhatsApp Option */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center border-2 border-green-300 hover:shadow-lg transition-shadow">
                <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Chat on WhatsApp
                </h3>
                <p className="text-green-800 mb-6 text-sm">
                  Message us directly for quick booking and service details
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary hover:bg-[#267347] active:bg-[#1F5B38] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>

              {/* Email Option */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center border-2 border-blue-300 hover:shadow-lg transition-shadow">
                <Mail className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  Send Email
                </h3>
                <p className="text-blue-800 mb-6 text-sm">
                  Email us your booking details and we'll confirm within 24 hours
                </p>
                <a
                  href={emailLink}
                  className="inline-block bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-text-primary">
              Service Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2 text-text-primary">Quick Response</h3>
                <p className="text-sm text-text-secondary">We respond within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="font-semibold mb-2 text-text-primary">Flexible Scheduling</h3>
                <p className="text-sm text-text-secondary">Book at your preferred time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-semibold mb-2 text-text-primary">Professional Service</h3>
                <p className="text-sm text-text-secondary">Quality assured by experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
