import Link from 'next/link';
import { Home, Building2, Droplets, Sofa, Bath, Wind, Sparkles, Factory, GraduationCap, ShoppingBag, Briefcase, DoorClosed, Star, Quote, CheckCircle2, Leaf, Users, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

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
      quote: 'Mohishree Facility Services gives excellent help! Their team is friendly and fast. They fix problems well and make my home nice. I called them for a leaky sink, and they came quickly. The work was great, and the price was fair. I feel safe with their service. I will call them again for any repairs. Highly recommend Mohishree!',
      name: 'A. Kumar',
      company: 'Verified Justdial Reviewer',
      rating: 5,
      verified: true,
      featured: true,
    },
    {
      quote: 'Mohishree transformed our office space. Their attention to detail and professionalism is outstanding!',
      name: 'Rajesh Patil',
      company: 'Corporate Manager, Pune',
      rating: 5,
    },
    {
      quote: 'We rely on Mohishree for all our pharmaceutical facility cleaning. They understand our strict compliance needs.',
      name: 'Dr. Sneha Deshmukh',
      company: 'Factory Manager, Aurangabad',
      rating: 5,
    },
    {
      quote: 'Best home deep cleaning service! My house has never looked better. Highly recommended!',
      name: 'Priya Sharma',
      company: 'Homeowner, Sambhajinagar',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-16 sm:py-24 md:py-32 lg:py-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 87, 184, 0.8), rgba(0, 87, 184, 0.9)), url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 font-heading leading-tight">
              Eco-Friendly, Reliable, Professional Facility Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 opacity-90">
              Established 2019 • 6 Years of Excellence • 4.4★ Rated
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-85 px-4">
              From home deep cleaning to industrial solutions—your trusted partner for clean, safe, healthy environments in Sambhajinagar
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
              <Link href="/get-a-quote" className="w-full sm:w-auto">
                <Button variant="accent" size="lg" className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6">
                  Get a Free Assessment
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-white/10 border-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl font-bold text-accent">🌿</div>
                <div className="text-xs sm:text-sm font-semibold mt-2">Eco-Friendly Products</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl font-bold text-accent">⚡</div>
                <div className="text-xs sm:text-sm font-semibold mt-2">3-4 Hour Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl font-bold text-accent">🏆</div>
                <div className="text-xs sm:text-sm font-semibold mt-2">Trusted by 100+ Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4 font-heading">
              Our Comprehensive Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto px-4">
              Professional cleaning and facility management solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
                  <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                      <div className="w-10 h-10 sm:w-12 sm:h-12">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* USP Highlight Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4 font-heading">
              The Mohishree Difference
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto px-4">
              Why thousands of satisfied clients choose us for their facility service needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12">
            {/* Primary USP - Eco-Friendly */}
            <div className="bg-white p-6 sm:p-7 md:p-8 rounded-xl shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <span className="text-3xl sm:text-4xl md:text-5xl mr-3 sm:mr-4">🌿</span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800">
                  Eco-Friendly & Safe
                </h3>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4">
                We use <strong>eco-friendly cleaning products</strong> to ensure the safety and well-being of your family, employees, and the environment. Our non-toxic, sustainable solutions are perfect for health-conscious homes, businesses, schools, and institutions.
              </p>
              <p className="text-xs sm:text-sm text-green-700 font-semibold">
                ✓ Safe for children & pets • ✓ Environmentally responsible • ✓ No harsh chemicals
              </p>
            </div>

            {/* Secondary USP - Reliability & Responsiveness */}
            <div className="bg-white p-6 sm:p-7 md:p-8 rounded-xl shadow-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <span className="text-3xl sm:text-4xl md:text-5xl mr-3 sm:mr-4">⭐</span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800">
                  Proven Reliability
                </h3>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4">
                With a strong <strong className="text-primary">4.4-star rating</strong> and a commitment to responding within <strong className="text-primary">3-4 hours</strong>, we deliver high-quality, trusted service every time. We respect your time and exceed your expectations.
              </p>
              <p className="text-xs sm:text-sm text-blue-700 font-semibold">
                ✓ 4.4★ Customer Rating • ✓ 3-4 Hour Response • ✓ 6 Years Experience
              </p>
            </div>
          </div>

          {/* Additional Trust Factors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center shadow">
              <div className="text-2xl sm:text-3xl mb-2">🏆</div>
              <div className="text-xl sm:text-2xl font-bold text-primary">6</div>
              <div className="text-xs sm:text-sm text-text-secondary">Years in Business</div>
            </div>
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center shadow">
              <div className="text-2xl sm:text-3xl mb-2">👥</div>
              <div className="text-xl sm:text-2xl font-bold text-primary">100+</div>
              <div className="text-xs sm:text-sm text-text-secondary">Happy Clients</div>
            </div>
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center shadow">
              <div className="text-2xl sm:text-3xl mb-2">🔧</div>
              <div className="text-xl sm:text-2xl font-bold text-primary">24/7</div>
              <div className="text-xs sm:text-sm text-text-secondary">Service Available</div>
            </div>
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center shadow">
              <div className="text-2xl sm:text-3xl mb-2">✨</div>
              <div className="text-xl sm:text-2xl font-bold text-primary">100%</div>
              <div className="text-xs sm:text-sm text-text-secondary">Satisfaction Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4 font-heading px-4">
              Comprehensive Solutions for Every Need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center px-4">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 text-primary rounded-full mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-3 sm:mb-4 font-heading">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-heading">
              Serving Across Maharashtra
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Professional facility services available in multiple locations
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
              {[
                'Chhatrapati Sambhajinagar',
                'Aurangabad District',
                'Jalna',
                'Parbhani',
                'Beed',
                'Ahmednagar',
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-lg p-4 sm:p-6 text-center group"
                >
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📍</div>
                  <p className="text-sm sm:text-base md:text-lg font-semibold group-hover:scale-105 transition-transform">
                    {area}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 sm:mt-12 text-center">
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
                Ready to get started in your area?
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  variant="accent"
                  className="text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6"
                  asChild
                >
                  <a href="tel:+919423679285">
                    📞 Call: +91 94236 79285
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6"
                  asChild
                >
                  <Link href="/get-a-quote">
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4 font-heading">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 sm:w-6 sm:h-6 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-yellow-400 opacity-50'}`} />
              ))}
              <span className="text-lg sm:text-xl font-bold text-primary ml-2">4.4</span>
            </div>
            <p className="text-sm sm:text-base text-text-secondary">Based on verified customer reviews</p>
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-primary shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary opacity-20" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-text-primary leading-relaxed italic mb-4 sm:mb-6">
                  "{testimonials.find(t => t.featured)?.quote}"
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t pt-4 gap-3">
                  <div>
                    <p className="font-bold text-text-primary text-sm sm:text-base">{testimonials.find(t => t.featured)?.name}</p>
                    <p className="text-xs sm:text-sm text-text-secondary">{testimonials.find(t => t.featured)?.company}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-semibold">Verified Review</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {testimonials.filter(t => !t.featured).map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-shadow">
                <CardContent className="pt-5 sm:pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-primary/20" />
                    <div className="flex">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 italic line-clamp-4">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-text-primary text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-text-secondary">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Testimonials Link */}
          <div className="text-center mt-8 sm:mt-10">
            <Link href="/testimonials">
              <Button variant="outline" size="lg" className="text-sm sm:text-base">
                View All Customer Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-heading px-4">
            Ready to Experience Professional Cleaning?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-4">
            Get a free site assessment and customized quote for your facility
          </p>
          <Link href="/get-a-quote" className="inline-block w-full sm:w-auto px-4">
            <Button variant="accent" size="lg" className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6">
              Request a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
