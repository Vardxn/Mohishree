import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Building2, Factory, Leaf } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Services - Mohishree Facility Services',
  description: 'Comprehensive facility management services including residential, commercial, industrial, and environmental solutions. Professional, reliable, and cost-effective.',
  keywords: 'facility services, housekeeping, security, maintenance, pest control, landscaping, waste management',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      slug: 'residential',
      title: 'Residential Services',
      description: 'Comprehensive facility management solutions for residential complexes, apartments, and gated communities.',
      icon: <Sparkles className="w-12 h-12" />,
      services: ['Housekeeping', 'Security Services', 'Landscaping & Gardening', 'Pest Control', 'Waste Management'],
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    },
    {
      slug: 'commercial',
      title: 'Commercial Services',
      description: 'Professional facility management for offices, retail spaces, hotels, and commercial establishments.',
      icon: <Building2 className="w-12 h-12" />,
      services: ['Office Cleaning', 'Security Management', 'Pantry Services', 'Façade Cleaning', 'Parking Management'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    },
    {
      slug: 'industrial',
      title: 'Industrial Services',
      description: 'Specialized facility management for manufacturing units, warehouses, and industrial facilities.',
      icon: <Factory className="w-12 h-12" />,
      services: ['Industrial Cleaning', 'Equipment Maintenance', 'Safety Management', 'Waste Disposal', 'Mechanical Services'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    },
    {
      slug: 'environmental',
      title: 'Environmental Services',
      description: 'Eco-friendly facility management solutions focused on sustainability and environmental compliance.',
      icon: <Leaf className="w-12 h-12" />,
      services: ['Waste Segregation', 'Recycling Programs', 'Green Cleaning', 'Water Conservation', 'Energy Efficiency'],
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Comprehensive facility management solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceCategories.map((category) => (
              <Card key={category.slug} className="overflow-hidden hover:shadow-card-hover transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    {category.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, index) => (
                      <li key={index} className="flex items-center text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${category.slug}`}>
                    <Button variant="primary" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We create tailored facility management packages to meet your specific requirements
          </p>
          <Link href="/get-a-quote">
            <Button variant="accent" size="lg">
              Request a Custom Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
