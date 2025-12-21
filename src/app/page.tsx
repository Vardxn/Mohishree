import Link from 'next/link';
import { Home, Building2, Droplets, Sofa, Bath, Wind, Sparkles, Factory, GraduationCap, ShoppingBag, Briefcase, DoorClosed, Star, Quote, CheckCircle2, Leaf, Users, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import businessConfig from '@/lib/config';

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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Logo Background (20% opacity) */}
        <div className="absolute inset-0 bg-white bg-center bg-no-repeat" aria-hidden="true">
          <div className="w-full h-full bg-[url('/images/mohishree-logo.jpg')] bg-center bg-contain bg-no-repeat opacity-20" />
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 font-heading leading-tight">
              Eco-Friendly, Reliable, Professional Facility Services
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3">
              Established 2019 • 6 Years of Excellence • 4.4★ Rated
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 px-2 sm:px-4">
              From home deep cleaning to industrial solutions—your trusted partner for clean, safe, healthy environments in Aurangabad
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-2 sm:px-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="accent" size="lg" className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 min-h-[52px]">
                  🔍 Get a Free Assessment
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 min-h-[52px] bg-white/10 border-white hover:bg-white hover:text-primary">
                  📖 Learn More
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
              <div className="bg-white/70 border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-accent">🌿</div>
                <div className="text-xs sm:text-sm font-semibold mt-2 text-gray-700">Eco-Friendly Products</div>
              </div>
              <div className="bg-white/70 border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-accent">⚡</div>
                <div className="text-xs sm:text-sm font-semibold mt-2 text-gray-700">3-4 Hour Response Time</div>
              </div>
              <div className="bg-white/70 border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-accent">🏆</div>
                <div className="text-xs sm:text-sm font-semibold mt-2 text-gray-700">Trusted by 100+ Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4 font-heading">
              Our Comprehensive Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto px-2 sm:px-4">
              Professional cleaning and facility management solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-card-hover transition-all duration-300 cursor-pointer group overflow-hidden">
                  <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-sm sm:text-base md:text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{service.description}</CardDescription>
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
              {businessConfig.serviceAreas.slice(0, 6).map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-lg p-4 sm:p-6 text-center group"
                >
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📍</div>
                  <p className="text-sm sm:text-base md:text-lg font-semibold group-hover:scale-105 transition-transform">
                    {area.split('(')[0].trim()}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 sm:mt-12 text-center">
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
                Ready to get started in your area?
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+919423679285"
                  className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#FFD700] text-gray-900 hover:bg-[#E6C200] focus:ring-[#FFD700] text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6"
                >
                  📞 Call: +91 94236 79285
                </a>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-[#0057B8] hover:bg-gray-100 focus:ring-[#2E8B57] text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
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
          <Link href="/contact" className="inline-block w-full sm:w-auto px-4">
            <Button variant="accent" size="lg" className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6">
              Request a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
