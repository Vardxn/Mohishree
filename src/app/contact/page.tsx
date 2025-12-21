import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
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
        businessConfig.phoneNumbers.primary,
        businessConfig.phoneNumbers.secondary,
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: [
        businessConfig.email.primary,
        businessConfig.email.support,
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: [
        businessConfig.businessHours.display,
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

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-text-secondary mb-2">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Contact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WhatsApp Option */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center border-2 border-green-300">
                <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">Chat on WhatsApp</h3>
                <p className="text-green-800 mb-6">
                  Instant messaging available. Message us anytime!
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>

              {/* Email Option */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center border-2 border-blue-300">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Send Email</h3>
                <p className="text-blue-800 mb-6">
                  Send us an email and we'll respond within 24 hours
                </p>
                <a
                  href={emailLink}
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
    description: businessConfig.description,
    url: businessConfig.siteUrl,
    telephone: businessConfig.phoneNumbers.primary,
    email: businessConfig.email.primary,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.postalCode,
      addressCountry: businessConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessConfig.coordinates.latitude,
      longitude: businessConfig.coordinates.longitude,
    },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '$$',
    areaServed: businessConfig.serviceAreas.map(area => ({
      '@type': 'City',
      name: area,
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
                Contact Us
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Get in touch with us for all your facility management needs
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-border hover:shadow-card-hover transition-shadow text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-text-secondary text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-6 font-heading">
                  Send us a Message
                </h2>
                <p className="text-text-secondary mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>

              {/* Map */}
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-6 font-heading">
                  Our Location
                </h2>
                <div className="bg-gray-200 rounded-lg overflow-hidden h-[500px]">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.5487239847387!2d${businessConfig.coordinates.longitude}!3d${businessConfig.coordinates.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUyJzM0LjMiTiA3NcKwMjAnMzUuOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mohishree Facility Services Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-6 font-heading">
                Service Areas
              </h2>
              <p className="text-text-secondary mb-8">
                We provide facility management services across the following locations:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {businessConfig.serviceAreas.map((area, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-text-primary border border-border"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
