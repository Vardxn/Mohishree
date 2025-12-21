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
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-16 sm:py-20">
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

      {/* About Content - Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-8 font-heading">
              Our Story: From 2019 to Today
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-6">
                Established in <strong className="text-primary">{businessConfig.yearEstablished}</strong>, <strong className="text-text-primary">Mohishree Facility Services</strong> has rapidly evolved into a trusted and reliable name in the cleaning and housekeeping industry. In just <strong>{businessConfig.yearsOfService} years of dedicated service</strong>, we have established ourselves as a modern, dynamic company that delivers exceptional results across {businessConfig.primaryCity} and beyond.
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Our journey chronicles a story of rapid growth, proven experience, and unwavering reliability. What began as a passionate commitment to creating clean, healthy, safe, and organized environments has blossomed into a significant presence in the local market. We are not merely a cleaning company—we are a partner dedicated to enhancing the lives and operations of our clients through exceptional service delivery.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                From residential homes to complex commercial and industrial facilities, we bring professionalism, expertise, and a customer-first approach to every project. Our team of trained professionals is equipped with the latest tools and technology, paired with eco-friendly cleaning solutions that ensure both superior results and environmental responsibility.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Our <strong className="text-primary">4.4-star rating</strong> and commitment to responding to inquiries within <strong>3-4 hours</strong> reflect our dedication to quality and responsiveness. We understand that in today's fast-paced world, reliability and prompt service are paramount. This is why we have built our reputation on delivering not just clean spaces, but peace of mind.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                As we continue to grow and evolve, we remain committed to the founding principle that fueled our success: delivering exceptional service that exceeds expectations. We serve clients across {businessConfig.serviceAreas.join(', ')}, with 24/7 availability ensuring we're always there when you need us most. Trust Mohishree—because cleanliness is not just our business, it's our promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-card">
                <h2 className="text-3xl font-bold text-primary mb-6 font-heading">
                  Our Mission
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  To provide exceptional, reliable, and eco-conscious facility services to businesses and residents in Aurangabad, ensuring clean, safe, and productive environments through our dedicated team and customer-first approach.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-card">
                <h2 className="text-3xl font-bold text-primary mb-6 font-heading">
                  Our Vision
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  To be Aurangabad's most trusted and sought-after facility services partner, renowned for our quality, integrity, and commitment to sustainable practices.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white p-10 rounded-lg shadow-card">
              <h2 className="text-3xl font-bold text-text-primary mb-8 font-heading text-center">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      🎯 Customer Satisfaction
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      Customer satisfaction is our top priority. We are committed to understanding and meeting the unique needs of every client, backed by our strong 4.4-star rating and proven track record of delivering results that exceed expectations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      🤝 Reliability & Trust
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      We have built our reputation as a trusted and reliable name in the industry. This value speaks to our consistency, punctuality, and unwavering commitment to delivering on our promises—every single time.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      ✨ Quality & Thoroughness
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      We provide efficient and thorough cleaning services with meticulous attention to detail. High standards are non-negotiable—we ensure that no corner is cut and that every job is done right the first time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      💼 Professionalism
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      Our team of professionals is equipped with the latest tools and equipment. Professionalism encompasses the appearance, conduct, and expertise of our staff, ensuring world-class service delivery at every touchpoint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - USP Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-12 font-heading text-center">
              Why Choose Mohishree?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Primary USP - Eco-Friendly */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-2 border-green-300 shadow-lg">
                <div className="text-5xl mb-4 text-center">🌿</div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">
                  Eco-Friendly Practices
                </h3>
                <p className="text-text-secondary leading-relaxed text-center">
                  We use eco-friendly cleaning products to ensure the safety and well-being of our clients. Our commitment to sustainable, non-toxic solutions appeals to health-conscious families, responsible corporations, and educational institutions.
                </p>
              </div>

              {/* Secondary USP - Reliability */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-2 border-blue-300 shadow-lg">
                <div className="text-5xl mb-4 text-center">⭐</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
                  Proven Reliability
                </h3>
                <p className="text-text-secondary leading-relaxed text-center">
                  With a strong <strong className="text-primary">4.4-star rating</strong> based on verified client reviews, we deliver high-quality, trusted service every time. Our track record speaks for itself.
                </p>
              </div>

              {/* Responsiveness */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border-2 border-orange-300 shadow-lg">
                <div className="text-5xl mb-4 text-center">⚡</div>
                <h3 className="text-2xl font-bold text-orange-800 mb-4 text-center">
                  Rapid Response
                </h3>
                <p className="text-text-secondary leading-relaxed text-center">
                  We respond to inquiries within <strong className="text-primary">3-4 hours</strong>, demonstrating our respect for your time. Fast, dependable communication is at the heart of our customer service.
                </p>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
                The Mohishree Advantage
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-text-secondary"><strong>6 Years of Experience</strong> - Established in 2019, we bring proven expertise to every project</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-text-secondary"><strong>Latest Equipment</strong> - Cutting-edge tools and technology for superior results</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-text-secondary"><strong>Trained Professionals</strong> - Skilled team members committed to excellence</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-text-secondary"><strong>24/7 Availability</strong> - We're here whenever you need us, day or night</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-8 font-heading">
              Meet the Team
            </h2>
            <div className="bg-white p-12 rounded-lg shadow-card">
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
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-primary-700 text-white">
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
