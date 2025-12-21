import { Metadata } from 'next';
import Button from '@/components/ui/Button';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Get a Quote | Mohishree Facility Services',
  description: 'Choose your service and contact us for personalized pricing. We offer customized quotes based on your specific needs.',
};

const services = [
  { name: 'Residential Cleaning', icon: '🏠', slug: 'residential' },
  { name: 'Commercial Cleaning', icon: '🏢', slug: 'commercial' },
  { name: 'Industrial Cleaning', icon: '🏭', slug: 'industrial' },
  { name: 'Deep Cleaning', icon: '✨', slug: 'residential/deep-cleaning' },
  { name: 'Office Cleaning', icon: '💼', slug: 'commercial/office-cleaning' },
  { name: 'Water Tank Cleaning', icon: '💧', slug: 'residential/water-tank-cleaning' },
  { name: 'Bathroom Cleaning', icon: '🚿', slug: 'residential/bathroom-cleaning' },
  { name: 'Window Cleaning', icon: '🪟', slug: 'residential/window-cleaning' },
  { name: 'Facility Management', icon: '🔧', slug: 'commercial/facility-management' },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">
              Get a Custom Quote
            </h1>
            <p className="text-xl opacity-90">
              Choose your service and contact us for personalized pricing based on your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Selection Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-text-primary">
              Select Your Service
            </h2>
            <p className="text-center text-text-secondary mb-12">
              Choose the service you need, and we'll provide you with a customized quote
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-all hover:border-primary group"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-text-secondary">Click to learn more →</p>
                </Link>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-primary to-primary-700 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Your Quote?</h3>
              <p className="text-lg opacity-90 mb-6">
                Contact us now and we'll provide you with personalized pricing for your selected service
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="tel:+919423679285"
                  className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 py-4 text-lg bg-white text-[#0057B8] hover:bg-gray-100 focus:ring-[#2E8B57]"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +91 94236 79285
                </a>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 py-4 text-lg border-2 border-white text-white hover:bg-white/10 focus:ring-white"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
              Why Contact Us for Pricing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Customized Quotes</h3>
                <p className="text-text-secondary">Every project is unique. We provide pricing tailored to your specific requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">No Hidden Charges</h3>
                <p className="text-text-secondary">Transparent pricing with all costs discussed upfront during our call</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Consultation</h3>
                <p className="text-text-secondary">Speak directly with our team to understand the best solution for your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
