import { Metadata } from 'next';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import businessConfig from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Us - Mohishree Facility Services',
  description: `Get in touch with Mohishree Facility Services in ${businessConfig.primaryCity}. Professional facility management services with 24/7 support.`,
  keywords: `contact mohishree, facility services ${businessConfig.primaryCity}, ${businessConfig.serviceAreas.join(', ')}`,
};

export default function ContactPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919423679385';
  const whatsappMessage = encodeURIComponent('Hi! I would like to inquire about your facility management services.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const emailLink = `mailto:${businessConfig.email.primary}?subject=Facility%20Services%20Inquiry`;

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: [
        businessConfig.phoneNumbers.displayPrimary,
        businessConfig.phoneNumbers.displaySecondary,
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: [
        businessConfig.email.primary,
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: [
        'Monday - Sunday',
        '9:00 AM - 6:00 PM',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">
              Get in Touch
            </h1>
            <p className="text-xl opacity-90">
              We're ready to help with your facility management needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4 text-primary">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-primary">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-text-secondary mb-2 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
              Quick Contact Methods
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WhatsApp Option */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center border-2 border-green-300 hover:shadow-lg transition-shadow">
                <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Chat on WhatsApp
                </h3>
                <p className="text-green-800 mb-6 text-sm">
                  Get instant responses. Available 24/7 for quick inquiries.
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
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  Send Email
                </h3>
                <p className="text-blue-800 mb-6 text-sm">
                  Email us your requirements. We'll respond within 24 hours.
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

      {/* Service Area Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6 font-heading">
              Service Coverage
            </h2>
            <p className="text-text-secondary mb-8">
              We serve customers across Chhatrapati Sambhajinagar and nearby areas for all facility management needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
