import { Metadata } from 'next';
import { MessageCircle, Mail } from 'lucide-react';
import businessConfig from '@/lib/config';

export const metadata: Metadata = {
  title: 'Get a Free Quote - Mohishree Facility Services',
  description: 'Contact us for a free quote. Chat on WhatsApp or send an email with your requirements.',
};

export default function GetQuotePage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919423679385';
  const whatsappMessage = encodeURIComponent('Hi! I would like to get a free quote for your facility management services.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const emailLink = `mailto:${businessConfig.email.primary}?subject=Quote%20Request`;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Get a Free Quote
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Tell us about your requirements and we'll provide a customized solution
            </p>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-20 bg-background">
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
                  Share details directly and get instant feedback from our team
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
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
                  Email your requirements and receive a detailed quote within 24 hours
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

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
              Our Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-text-primary">
                    Contact Us
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Share your facility requirements via WhatsApp or email
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-text-primary">
                    Site Assessment
                  </h3>
                  <p className="text-text-secondary text-sm">
                    We understand your needs through discussion or site visit
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-text-primary">
                    Custom Quote
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Receive a detailed, customized quote for your needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
