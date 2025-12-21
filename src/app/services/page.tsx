import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Building2, Droplets, Sofa, Bath, Wind, Sparkles, Factory, GraduationCap, ShoppingBag, Briefcase, DoorClosed } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import businessConfig from '@/lib/config';

export const metadata: Metadata = {
  title: 'Our Services - Mohishree Facility Services',
  description: 'Comprehensive residential and commercial facility management services in Aurangabad. From home deep cleaning to corporate housekeeping - your complete solution provider.',
  keywords: 'residential cleaning, commercial housekeeping, water tank cleaning, sofa cleaning, corporate facility management, Aurangabad',
};

export default function ServicesPage() {
  const residentialServices = [
    {
      slug: 'full-home-cleaning',
      title: 'Full Home Cleaning',
      description: 'Complete home cleaning from kitchen to bedroom, leaving every corner spotless',
      icon: <Home className="w-8 h-8" />,
    },
    {
      slug: 'deep-cleaning',
      title: 'Residential Deep Cleaning',
      description: 'Intensive cleaning that eliminates deep-seated grime and prepares your home for special occasions',
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      slug: 'sofa-upholstery-cleaning',
      title: 'Sofa & Upholstery Cleaning',
      description: 'Professional fabric care that restores freshness and extends furniture life',
      icon: <Sofa className="w-8 h-8" />,
    },
    {
      slug: 'bathroom-cleaning',
      title: 'Bathroom & Toilet Cleaning',
      description: 'Hygienic sanitization with eco-friendly products for a sparkling clean bathroom',
      icon: <Bath className="w-8 h-8" />,
    },
    {
      slug: 'water-tank-cleaning',
      title: 'Water Tank Cleaning',
      description: 'Essential health service removing harmful sediment and contaminants from your water supply',
      icon: <Droplets className="w-8 h-8" />,
    },
    {
      slug: 'chimney-cleaning',
      title: 'Chimney Cleaning',
      description: 'Professional degreasing and maintenance for safer, more efficient kitchen chimneys',
      icon: <Wind className="w-8 h-8" />,
    },
  ];

  const commercialServices = [
    {
      slug: 'corporate-housekeeping',
      title: 'Corporate Housekeeping Services',
      description: 'Comprehensive daily maintenance for professional business environments',
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      slug: 'office-cleaning',
      title: 'Office Cleaning Services',
      description: 'Creating clean, productive workspaces with flexible scheduling',
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      slug: 'facility-management',
      title: 'Comprehensive Facility Management',
      description: 'End-to-end facility solutions including maintenance, security, and operations',
      icon: <Factory className="w-8 h-8" />,
    },
  ];

  const industrySolutions = [
    {
      slug: 'shopping-malls',
      title: 'Shopping Mall Cleaning',
      description: 'High-traffic retail space maintenance with after-hours scheduling',
      icon: <ShoppingBag className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=400&fit=crop',
    },
    {
      slug: 'educational-institutions',
      title: 'Educational Institutions',
      description: 'Safe, non-toxic cleaning for colleges and schools with flexible timing',
      icon: <GraduationCap className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
    },
    {
      slug: 'corporate-offices',
      title: 'Corporate Office Solutions',
      description: 'Professional workspace hygiene with confidentiality and efficiency',
      icon: <Building2 className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    },
    {
      slug: 'factories',
      title: 'Factory & Industrial',
      description: 'Specialized technical cleaning for manufacturing and production facilities',
      icon: <Factory className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
    },
    {
      slug: 'atm-cleaning',
      title: 'ATM Cleaning Services',
      description: 'Secure, professional cleaning for banking kiosks and ATM installations',
      icon: <DoorClosed className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">
              Complete Facility Solutions
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              From Residential Homes to Corporate Offices - Your One-Stop Service Partner
            </p>
            <p className="text-lg mt-4 opacity-85">
              Consolidating excellence across all cleaning and facility management needs
            </p>
          </div>
        </div>
      </section>

      {/* Residential Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
              🏠 Residential Services
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Comprehensive cleaning solutions for homeowners, tenants, and residential societies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {residentialServices.map((service) => (
              <Link key={service.slug} href={`/services/residential/${service.slug}`}>
                <Card className="h-full hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-primary font-semibold">
                      Learn More →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
              🏢 Commercial & Corporate Services
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Professional facility management for business environments - reliability, efficiency, and professional image
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {commercialServices.map((service) => (
              <Link key={service.slug} href={`/services/commercial/${service.slug}`}>
                <Card className="h-full hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-primary font-semibold">
                      Learn More →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
              Solutions for Your Industry
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Tailored facility services addressing the unique challenges of your specific sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industrySolutions.map((solution) => (
              <Link key={solution.slug} href={`/services/industries/${solution.slug}`}>
                <Card className="overflow-hidden hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      {solution.icon}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {solution.title}
                    </CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-primary font-semibold">
                      Explore Solutions →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-700 text-white">
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
