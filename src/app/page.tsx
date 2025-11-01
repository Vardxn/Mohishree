import Link from 'next/link';
import { Home, Building2, Factory, Leaf, CheckCircle2, Users, Wrench } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

export default function HomePage() {
  const services = [
    {
      slug: 'residential',
      title: 'Residential & Home Deep Cleaning',
      description: 'Complete home cleaning solutions from kitchen to garden',
      icon: <Home className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
    },
    {
      slug: 'commercial',
      title: 'Commercial & Institutional Facility Management',
      description: 'Professional facility services for offices, hotels, hospitals, and institutions',
      icon: <Building2 className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    },
    {
      slug: 'industrial',
      title: 'Industrial & Technical Cleaning Solutions',
      description: 'Specialized cleaning for pharmaceutical, dairy, and industrial facilities',
      icon: <Factory className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
    },
    {
      slug: 'environmental',
      title: 'Environmental & Waste Management',
      description: 'Water system hygiene, waste treatment, and surface restoration',
      icon: <Leaf className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
    },
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle2 className="w-12 h-12" />,
      title: 'Comprehensive',
      description: 'One partner for ALL your cleaning and facility needs, from residential homes to heavy industry.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Experienced Staff',
      description: 'Our trained and reliable personnel ensure the highest quality of service and professional execution every time.',
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Professional Equipment',
      description: 'We utilize specialized, modern tools, including Industrial High-Pressure Washers, to deliver superior results.',
    },
  ];

  const testimonials = [
    {
      quote: 'Mohishree transformed our office space. Their attention to detail and professionalism is outstanding!',
      name: 'Rajesh Patil',
      company: 'Corporate Manager, Pune',
    },
    {
      quote: 'We rely on Mohishree for all our pharmaceutical facility cleaning. They understand our strict compliance needs.',
      name: 'Dr. Sneha Deshmukh',
      company: 'Factory Manager, Aurangabad',
    },
    {
      quote: 'Best home deep cleaning service! My house has never looked better. Highly recommended!',
      name: 'Priya Sharma',
      company: 'Homeowner, Sambhajinagar',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 lg:py-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 87, 184, 0.8), rgba(0, 87, 184, 0.9)), url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Reliable & Professional Facility Services in Sambhajinagar
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              From home deep cleaning to industrial solutions, we are your comprehensive partner for a pristine environment.
            </p>
            <Link href="/get-a-quote">
              <Button variant="accent" size="lg" className="text-xl px-12 py-6">
                Get a Free Site Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Professional cleaning and facility management solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      {service.icon}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
              Why Choose Mohishree?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 font-heading">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <svg className="w-10 h-10 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-text-secondary mb-6 italic">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-text-primary">{testimonial.name}</p>
                    <p className="text-sm text-text-secondary">{testimonial.company}</p>
                  </div>
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
            Ready to Experience Professional Cleaning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free site assessment and customized quote for your facility
          </p>
          <Link href="/get-a-quote">
            <Button variant="accent" size="lg" className="text-xl px-12 py-6">
              Request a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
