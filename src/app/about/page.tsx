import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import businessConfig from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Us - Mohishree Facility Services',
  description: `Learn about ${businessConfig.companyName}, your trusted partner for facility management and cleaning services in ${businessConfig.primaryCity}.`,
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              About Mohishree Facility Services
            </h1>
            <p className="text-2xl mb-4 font-semibold">
              {businessConfig.tagline}
            </p>
            <p className="text-xl opacity-90">
              {businessConfig.taglineEnglish}
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-6">
                <strong className="text-text-primary">Mohishree Facility Services</strong> is your comprehensive partner for all cleaning and facility management needs in {businessConfig.primaryCity} and surrounding areas. From residential home deep cleaning to complex industrial solutions, we bring professionalism, reliability, and excellence to every project.
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Founded with a vision to provide world-class facility services, we have grown to become one of the most trusted names in the industry. Our team of trained professionals uses cutting-edge equipment and eco-friendly cleaning solutions to deliver superior results across diverse sectors.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Whether you need complete home deep cleaning, commercial facility management, industrial technical cleaning, or environmental services, we have the expertise and equipment to handle it all. Our commitment to quality, safety, and customer satisfaction sets us apart in the industry.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                We serve clients across {businessConfig.serviceAreas.join(', ')}, and our 24/7 service availability ensures that we're always there when you need us. Trust Mohishree for a pristine environment – because cleanliness is not just our business, it's our promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-8 font-heading text-center">
              Our Mission
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <p className="text-lg text-text-secondary leading-relaxed text-center">
                To provide reliable, professional, and comprehensive facility services that create clean, safe, and healthy environments for our clients. We strive to exceed expectations through continuous innovation, skilled personnel, and unwavering commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-8 font-heading">
              Meet the Team
            </h2>
            <div className="bg-background p-12 rounded-lg">
              <p className="text-text-secondary mb-6">
                Our dedicated team of professionals is committed to delivering excellence in every service we provide.
              </p>
              <p className="text-sm text-text-secondary italic">
                Team profiles and details coming soon...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the Mohishree difference – professional, reliable, and comprehensive facility services
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
