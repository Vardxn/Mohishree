import { Metadata } from 'next';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import businessConfig from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Us - Mohishree Facility Services',
  description: `Get in touch with Mohishree Facility Services in ${businessConfig.primaryCity}. Professional facility management services with 24/7 support.`,
  keywords: `contact mohishree, facility services ${businessConfig.primaryCity}, ${businessConfig.serviceAreas.join(', ')}`,
};

export default function ContactPage() {
  const configuredNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappNumber = configuredNumber && /^\d{10,15}$/.test(configuredNumber)
    ? configuredNumber
    : '919423679285';
  const whatsappMessage = encodeURIComponent('Hi! I would like to inquire about your facility management services.');
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
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
        '24/7 Service Available',
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
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center hover:shadow-lg transition-shadow min-h-[200px] flex flex-col justify-center"
              >
                <div className="flex justify-center mb-4 text-primary">
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-text-primary">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-text-secondary mb-2 text-sm sm:text-base">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-text-primary">
              Quick Contact Methods
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* WhatsApp Option */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 sm:p-8 text-center border-2 border-green-300 hover:shadow-lg transition-shadow">
                <MessageCircle className="w-12 h-12 sm:w-14 sm:h-14 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-2">
                  Chat on WhatsApp
                </h3>
                <p className="text-green-800 mb-6 text-sm sm:text-base">
                  Get instant responses. Available 24/7 for quick inquiries.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary hover:bg-[#267347] active:bg-[#1F5B38] text-white font-semibold py-4 px-8 rounded-lg transition-colors min-h-[48px] flex items-center justify-center w-full"
                >
                  💬 Open WhatsApp
                </a>
              </div>

              {/* Email Option */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 sm:p-8 text-center border-2 border-blue-300 hover:shadow-lg transition-shadow">
                <Mail className="w-12 h-12 sm:w-14 sm:h-14 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  Send Email
                </h3>
                <p className="text-blue-800 mb-6 text-sm sm:text-base">
                  Email us your requirements. We'll respond within 24 hours.
                </p>
                <a
                  href={emailLink}
                  className="inline-block bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors min-h-[48px] flex items-center justify-center w-full"
                >
                  ✉️ Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 font-heading text-center">
              Our Service Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {businessConfig.serviceAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary"
                >
                  <p className="text-text-primary font-semibold">{area}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-lg p-8 shadow-card">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Visit Us</h3>
              <p className="text-text-secondary mb-2">
                <span className="font-semibold">Address:</span> {businessConfig.address.fullAddress}
              </p>
              <p className="text-text-secondary">
                <span className="font-semibold">Hours:</span> {businessConfig.businessHours.display}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
