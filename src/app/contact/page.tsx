import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import businessConfig from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Us - Mohishree Facility Services',
  description: `Get in touch with Mohishree Facility Services in ${businessConfig.primaryCity}. Professional facility management services with 24/7 support.`,
  keywords: `contact mohishree, facility services ${businessConfig.primaryCity}, ${businessConfig.serviceAreas.join(', ')}`,
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: [
        businessConfig.address.fullAddress,
      ],
    },
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

  // LocalBusiness JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessConfig.companyName,
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
