import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  ShoppingBag,
  Users,
  CheckCircle2, 
  Clock, 
  Shield,
  Leaf,
  Sparkles,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shopping Mall Cleaning Services in Aurangabad | Mohishree',
  description: 'Professional cleaning services for shopping malls in Aurangabad. High-traffic area maintenance, food court cleaning, 24/7 service. Customer experience focused.',
  keywords: 'shopping mall cleaning, retail cleaning Aurangabad, mall housekeeping, food court cleaning, commercial retail cleaning',
};

export default function ShoppingMallsPage() {
  const challenges = [
    {
      challenge: 'High Visitor Traffic',
      solution: 'Continuous cleaning teams working in rotating shifts throughout operational hours',
      icon: Users,
    },
    {
      challenge: 'Food Court Hygiene',
      solution: 'Specialized food service cleaning with rapid spill response and sanitization protocols',
      icon: Sparkles,
    },
    {
      challenge: 'Minimal Disruption',
      solution: 'Strategic scheduling around peak hours, discreet staff uniforms, quiet equipment',
      icon: Clock,
    },
    {
      challenge: 'Multi-Tenant Coordination',
      solution: 'Centralized management coordinating with individual retail stores and restaurants',
      icon: Shield,
    },
    {
      challenge: 'Image & Reputation',
      solution: 'Mystery shopper-ready cleanliness standards ensuring premium visitor experience',
      icon: TrendingUp,
    },
    {
      challenge: 'Waste Volume',
      solution: 'Efficient waste collection, segregation, and disposal with recycling programs',
      icon: Leaf,
    },
  ];

  const services = [
    {
      area: 'Common Areas & Atriums',
      tasks: ['Lobby and corridor cleaning', 'Escalator and elevator maintenance', 'Seating area upkeep', 'Decorative element dusting'],
    },
    {
      area: 'Washrooms',
      tasks: ['High-frequency sanitization', 'Constant supply restocking', 'Odor control systems', 'Deep cleaning protocols'],
    },
    {
      area: 'Food Courts',
      tasks: ['Table cleaning after each use', 'Floor mopping and sanitization', 'Trash bin management', 'Kitchen exhaust areas'],
    },
    {
      area: 'Parking Areas',
      tasks: ['Sweeping and debris removal', 'Pressure washing', 'Stairwell cleaning', 'Signage maintenance'],
    },
    {
      area: 'Retail Storefronts',
      tasks: ['Window and glass cleaning', 'Entrance area maintenance', 'Display surface dusting', 'Coordination with tenants'],
    },
    {
      area: 'Back-of-House',
      tasks: ['Staff areas cleaning', 'Loading dock maintenance', 'Storage area organization', 'Service corridor upkeep'],
    },
  ];

  const benefits = [
    {
      title: 'Enhanced Customer Experience',
      description: 'Clean, pleasant environment encourages longer visits and repeat customers.',
      icon: Users,
    },
    {
      title: 'Tenant Satisfaction',
      description: 'Well-maintained common areas attract and retain quality retail tenants.',
      icon: ShoppingBag,
    },
    {
      title: 'Health Compliance',
      description: 'Meet stringent food safety and public health standards without worry.',
      icon: Shield,
    },
    {
      title: 'Brand Reputation',
      description: 'Spotless facilities enhance your mall image and competitive positioning.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <ShoppingBag className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Shopping Mall Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100">
              Premium Facility Services for Exceptional Customer Experiences
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-pink-50">
                Request Mall Services Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Call: +91 94236 79285
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-pink-600">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Where Cleanliness Drives Customer Experience
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Shopping malls face unique cleaning challenges - thousands of daily visitors, food service 
                  areas requiring constant attention, multiple tenants with varying standards, and the need 
                  to maintain premium appearance throughout operational hours.
                </p>
                <p className="text-lg text-gray-600">
                  Mohishree specializes in high-traffic retail facility management. Our continuous cleaning 
                  approach ensures your mall always looks its best, from opening to closing. We understand 
                  that cleanliness directly impacts customer dwell time, tenant satisfaction, and your 
                  competitive position in the market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Understanding Your Unique Challenges
              </h2>
              <p className="text-xl text-gray-600">
                Tailored solutions for complex retail environments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-6 w-6 text-pink-600" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.challenge}
                        </h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold text-pink-600 mb-2">Our Solution:</p>
                      <p className="text-gray-600">{item.solution}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services by Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Comprehensive Mall Facility Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="bg-pink-50">
                    <h3 className="text-xl font-semibold text-center text-gray-800">
                      {service.area}
                    </h3>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      {service.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Benefits for Mall Management
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-pink-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Model */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Mall Cleaning Service Model
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="bg-gradient-to-r from-pink-600 to-rose-600 text-white">
                  <h3 className="text-2xl font-semibold text-center">During Operating Hours</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Continuous cleaning teams in rotation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Rapid spill and incident response (under 5 minutes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>High-frequency washroom checks (every 30 minutes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Food court table turnover cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Waste bin monitoring and emptying</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Discreet, professional staff presence</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
                  <h3 className="text-2xl font-semibold text-center">Post-Closing Deep Clean</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Intensive floor scrubbing and polishing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Complete washroom sanitization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Glass and window cleaning throughout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Food court deep degreasing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Escalator and elevator detailing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Fresh and ready for next business day</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-pink-600 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-rose-600 text-white">
                <h3 className="text-2xl font-semibold text-center">Success Story</h3>
              </CardHeader>
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  Premium Shopping Mall - Aurangabad
                </h4>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-pink-600 mb-2">The Challenge:</p>
                    <p className="text-gray-600">
                      10,000+ daily visitors, 100+ retail tenants, demanding food court standards
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pink-600 mb-2">Our Solution:</p>
                    <p className="text-gray-600">
                      15-member continuous cleaning team + night deep clean crew with rapid response protocols
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pink-600 mb-2">Results:</p>
                    <p className="text-gray-600">
                      25% improvement in mystery shopper cleanliness scores within 3 months
                    </p>
                  </div>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-gray-700 italic">
                    "Mohishree transformed our facility management. Tenants consistently praise the cleanliness, 
                    and we have seen measurable increases in customer dwell time. The team is invisible during the 
                    day but the results are very visible."
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    - Facility Manager, Leading Shopping Mall
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Highlight */}
      <section className="py-12 bg-green-50 border-y-2 border-green-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-6">
            <Leaf className="h-16 w-16 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Eco-Friendly Mall Cleaning
              </h3>
              <p className="text-lg text-gray-600">
                Green cleaning products safe for high-traffic public spaces. Biodegradable solutions that 
                protect customers, staff, and the environment while delivering premium results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Elevate Your Mall Customer Experience
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              Partner with Mohishree for premium retail facility services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-pink-50">
                Schedule Site Assessment
              </Button>
              <a href="https://api.whatsapp.com/send?phone=919423679285&text=Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white/10 px-6 py-3">
                WhatsApp: +91 94236 79285
              </a>
            </div>
            <p className="mt-6 text-pink-100">
              ⭐ 4.4 Rating | 🏬 Retail Specialists | 🌿 Eco-Friendly Solutions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
