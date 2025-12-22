import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  Building,
  Wrench,
  CheckCircle2, 
  ClipboardCheck, 
  Shield,
  Leaf,
  Users,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comprehensive Facility Management Services in Aurangabad | Mohishree',
  description: 'Complete facility management solutions in Aurangabad. Integrated housekeeping, maintenance, security coordination. Single-point contact for all facility needs.',
  keywords: 'facility management, integrated facility services Aurangabad, building management, property maintenance, facility operations',
};

export default function FacilityManagementPage() {
  const services = [
    {
      title: 'Housekeeping & Janitorial',
      description: 'Complete cleaning and sanitation services across all facility areas',
      icon: Building,
    },
    {
      title: 'Preventive Maintenance',
      description: 'Scheduled maintenance of equipment, fixtures, and building systems',
      icon: Wrench,
    },
    {
      title: 'Soft Services Management',
      description: 'Pantry, reception, mailroom, and other support services coordination',
      icon: Users,
    },
    {
      title: 'Vendor Coordination',
      description: 'Managing multiple service providers for seamless facility operations',
      icon: ClipboardCheck,
    },
    {
      title: 'Compliance & Safety',
      description: 'Ensuring adherence to health, safety, and regulatory requirements',
      icon: Shield,
    },
    {
      title: 'Energy & Sustainability',
      description: 'Optimizing resource usage and implementing eco-friendly practices',
      icon: Leaf,
    },
  ];

  const coreServices = [
    {
      category: 'Housekeeping Services',
      items: [
        'Daily cleaning and sanitization',
        'Washroom maintenance and restocking',
        'Floor care and polishing',
        'Waste management and recycling',
        'Glass and facade cleaning',
        'Pest control coordination',
      ],
    },
    {
      category: 'Hard Services',
      items: [
        'HVAC maintenance and repair',
        'Electrical systems upkeep',
        'Plumbing and water systems',
        'Fire safety equipment checks',
        'Lift and escalator maintenance',
        'Building automation systems',
      ],
    },
    {
      category: 'Soft Services',
      items: [
        'Reception and concierge',
        'Pantry and cafeteria management',
        'Mail and courier handling',
        'Landscaping and gardening',
        'Event setup and support',
        'Help desk and ticketing',
      ],
    },
  ];

  const benefits = [
    {
      title: 'Single Point of Contact',
      description: 'One partner managing all facility services - simplified communication and accountability.',
      icon: ClipboardCheck,
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce overhead through efficient resource allocation and consolidated vendor management.',
      icon: TrendingUp,
    },
    {
      title: 'Compliance Assurance',
      description: 'Stay compliant with safety, health, and regulatory standards without hassle.',
      icon: Shield,
    },
    {
      title: 'Focus on Core Business',
      description: 'Let us manage facilities while you focus on what you do best - growing your business.',
      icon: Building,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Building className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Facility Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Integrated Solutions for Complete Facility Operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-emerald-50">
                Get Facility Management Proposal
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
            <Card className="border-l-4 border-l-emerald-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Beyond Cleaning - Complete Facility Excellence
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Managing a modern facility requires coordinating multiple services - housekeeping, 
                  maintenance, security, landscaping, and more. Juggling different vendors leads to 
                  communication gaps, accountability issues, and operational inefficiencies.
                </p>
                <p className="text-lg text-gray-600">
                  Mohishree Comprehensive Facility Management provides an integrated solution. We become 
                  your single point of contact for all facility operations - from daily cleaning to 
                  preventive maintenance, vendor coordination to compliance management. Experience seamless 
                  facility operations that let you focus on your core business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Integrated Facility Services
              </h2>
              <p className="text-xl text-gray-600">
                Everything your facility needs, managed by one expert team
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-emerald-100 p-3 rounded-full">
                          <Icon className="h-6 w-6 text-emerald-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Breakdown */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Comprehensive Service Coverage
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {coreServices.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="bg-emerald-50">
                    <h3 className="text-xl font-semibold text-center text-gray-800">
                      {category.category}
                    </h3>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
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
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Integrated Facility Management?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-emerald-700" />
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

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our 4-Phase Implementation Process
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Phase 1</div>
                    <h3 className="text-xl font-semibold">Assessment & Planning</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Comprehensive facility audit</li>
                    <li>• Current state gap analysis</li>
                    <li>• Customized service design</li>
                    <li>• Resource planning and budgeting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Phase 2</div>
                    <h3 className="text-xl font-semibold">Mobilization</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Staff recruitment and training</li>
                    <li>• Equipment and supply setup</li>
                    <li>• Workflow and SOP establishment</li>
                    <li>• Technology integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Phase 3</div>
                    <h3 className="text-xl font-semibold">Operations</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Daily operations management</li>
                    <li>• Quality control and audits</li>
                    <li>• Real-time issue resolution</li>
                    <li>• Regular reporting and reviews</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-gradient-to-r from-teal-700 to-emerald-600 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Phase 4</div>
                    <h3 className="text-xl font-semibold">Continuous Improvement</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Performance analytics</li>
                    <li>• Cost optimization initiatives</li>
                    <li>• Process refinements</li>
                    <li>• Innovation implementation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
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
                Sustainability-Focused Facility Management
              </h3>
              <p className="text-lg text-gray-600">
                We integrate eco-friendly practices across all services - from green cleaning products 
                to energy-efficient operations, waste reduction to water conservation. Help achieve 
                your corporate sustainability goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Ideal For Large-Scale Facilities
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Corporate Campuses',
                'IT Parks & Tech Hubs',
                'Shopping Malls',
                'Hospitals & Healthcare',
                'Educational Institutions',
                'Manufacturing Plants',
                'Hotels & Resorts',
                'Government Buildings',
                'Mixed-Use Developments',
              ].map((type, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-emerald-700 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Facility Operations
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              Partner with Mohishree for integrated facility management excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-emerald-50">
                Schedule Facility Assessment
              </Button>
              <a href="https://api.whatsapp.com/send?phone=919423679285&text=Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white/10 px-6 py-3">
                WhatsApp: +91 94236 79285
              </a>
            </div>
            <p className="mt-6 text-emerald-100">
              ⭐ 4.4 Rating | 🏢 Enterprise Solutions | 🌿 Sustainability Focused
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
