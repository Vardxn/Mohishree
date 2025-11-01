import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Sparkles, Shield, Leaf, Bug, Trash2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Residential Services - Mohishree Facility Services',
  description: 'Professional facility management for residential complexes, apartments, and gated communities. Housekeeping, security, landscaping, and more.',
};

export default function ResidentialServicesPage() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Housekeeping Services',
      description: 'Daily cleaning, deep cleaning, and maintenance of common areas, corridors, and individual units.',
      features: ['Daily cleaning schedules', 'Deep cleaning services', 'Sanitization', 'Floor care'],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Services',
      description: '24/7 trained security personnel for access control, surveillance, and resident safety.',
      features: ['Access control', 'CCTV monitoring', 'Patrol services', 'Visitor management'],
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Landscaping & Gardening',
      description: 'Professional garden maintenance, lawn care, and landscape design services.',
      features: ['Lawn maintenance', 'Plant care', 'Irrigation management', 'Seasonal planting'],
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: 'Pest Control',
      description: 'Comprehensive pest management with safe, eco-friendly treatments.',
      features: ['Termite treatment', 'Rodent control', 'Mosquito control', 'Preventive measures'],
    },
    {
      icon: <Trash2 className="w-8 h-8" />,
      title: 'Waste Management',
      description: 'Efficient waste collection, segregation, and disposal with recycling programs.',
      features: ['Daily collection', 'Waste segregation', 'Recycling programs', 'Composting'],
    },
  ];

  const benefits = [
    'Professional and trained staff',
    'Customized service packages',
    'Regular quality inspections',
    'Eco-friendly products',
    '24/7 customer support',
    'Transparent pricing',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Residential Facility Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Creating clean, safe, and beautiful living spaces for residential communities
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
              Our Residential Services
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Comprehensive solutions for apartments, societies, and gated communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-shadow">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-12 font-heading text-center">
              Why Choose Our Residential Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-background p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-text-primary font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">
            Ready to Enhance Your Residential Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a customized service package tailored to your residential complex
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote">
              <Button variant="accent" size="lg">
                Get a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-white/10 border-white hover:bg-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
