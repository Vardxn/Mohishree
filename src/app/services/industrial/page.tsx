import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Factory, Shield, Droplet, Settings } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Industrial & Technical Cleaning Solutions - Mohishree Facility Services',
  description: 'Specialized cleaning services for pharmaceutical, dairy, and industrial facilities. High-pressure washing, equipment cleaning, and compliance-focused solutions.',
};

export default function IndustrialServicesPage() {
  const services = [
    {
      title: 'High-Level & Structure Cleaning',
      icon: <Factory className="w-8 h-8" />,
      items: [
        'Overhead Structures & Beams',
        'High-Level Dusting',
        'Ceiling & Roof Cleaning',
        'Industrial Wall Cleaning',
        'Ventilation Systems',
      ],
    },
    {
      title: 'Equipment & Utility Cleaning',
      icon: <Settings className="w-8 h-8" />,
      items: [
        'Machine Deep Cleaning',
        'Production Equipment Sanitization',
        'Conveyor Belt Cleaning',
        'Industrial Oven Cleaning',
        'Packaging Equipment Care',
      ],
    },
    {
      title: 'Deep System Cleaning',
      icon: <Droplet className="w-8 h-8" />,
      items: [
        'Water Tank & Reservoir Cleaning',
        'Chemical Tank Cleaning',
        'Pipeline Cleaning & Flushing',
        'Storage Tank Sanitization',
        'Drainage System Cleaning',
      ],
    },
    {
      title: 'Specialized Industry Focus',
      icon: <Shield className="w-8 h-8" />,
      items: [
        'Pharmaceutical Manufacturing Facilities',
        'Dairy Processing Plants',
        'Food & Beverage Industries',
        'Chemical Manufacturing Units',
        'Warehouses & Distribution Centers',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Industrial & Technical Cleaning Solutions
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Specialized cleaning services for pharmaceutical, dairy, and industrial facilities
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
              Comprehensive Industrial Cleaning
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Professional cleaning solutions designed for heavy industry and technical environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-shadow">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-8 font-heading text-center">
              Our Specialized Equipment
            </h2>
            <div className="bg-background p-8 rounded-lg">
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                We utilize state-of-the-art Industrial High-Pressure Washers and specialized cleaning chemicals to handle even the toughest industrial environments. Our equipment is specifically designed for:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'High-pressure water jets for deep cleaning',
                  'Industrial-grade vacuum systems',
                  'Specialized chemical applicators',
                  'HEPA filtration systems',
                  'Steam cleaning equipment',
                  'Automated cleaning systems',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Compliance Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-8 font-heading text-center">
              Our Safety & Compliance Protocols
            </h2>
            <div className="bg-white p-8 rounded-lg">
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                We understand that industrial and pharmaceutical facilities require the highest standards of safety and cleanliness. Our team follows strict protocols to ensure:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'GMP Compliance',
                    description: 'Our cleaning procedures comply with Good Manufacturing Practice standards for pharmaceutical and food industries.',
                  },
                  {
                    title: 'Safety First',
                    description: 'All personnel are trained in industrial safety protocols, including lockout/tagout procedures and hazardous material handling.',
                  },
                  {
                    title: 'Documentation',
                    description: 'Complete documentation and cleaning validation reports for regulatory compliance and quality audits.',
                  },
                  {
                    title: 'Contamination Control',
                    description: 'Specialized procedures to prevent cross-contamination in sensitive environments.',
                  },
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">
            Need Industrial Cleaning Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a customized cleaning plan for your industrial facility
          </p>
          <Link href="/get-a-quote">
            <Button variant="accent" size="lg">
              Request a Site Assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
