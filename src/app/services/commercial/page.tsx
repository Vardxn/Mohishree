import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Building2, Shield, Coffee, Droplet, Car } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Commercial Services - Mohishree Facility Services',
  description: 'Professional facility management for offices, retail spaces, hotels, and commercial establishments.',
};

export default function CommercialServicesPage() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Office Cleaning',
      description: 'Comprehensive cleaning services for corporate offices and business centers.',
      features: ['Workstation cleaning', 'Meeting room sanitization', 'Washroom maintenance', 'Floor care'],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Management',
      description: 'Professional security services for commercial properties.',
      features: ['Access control', 'CCTV surveillance', 'Security patrols', 'Emergency response'],
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Pantry Services',
      description: 'Complete pantry management with quality refreshments.',
      features: ['Tea & coffee service', 'Snacks management', 'Pantry cleaning', 'Equipment maintenance'],
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Façade Cleaning',
      description: 'Professional exterior cleaning for building facades and glass panels.',
      features: ['Glass cleaning', 'Pressure washing', 'Rope access services', 'Regular maintenance'],
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Parking Management',
      description: 'Efficient parking facility management and security.',
      features: ['Valet services', 'Parking security', 'Traffic management', 'Vehicle tracking'],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Commercial Facility Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Professional solutions for offices, retail spaces, and commercial establishments
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
              Our Commercial Services
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Comprehensive facility management for businesses of all sizes
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

      <section className="py-20 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">
            Enhance Your Business Environment
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a customized facility management plan for your commercial property
          </p>
          <Link href="/get-a-quote">
            <Button variant="accent" size="lg">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
