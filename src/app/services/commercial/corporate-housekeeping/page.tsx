import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  Building2,
  Users,
  CheckCircle2, 
  Clock, 
  Shield,
  Leaf,
  Sparkles,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Housekeeping Services in Aurangabad | Mohishree',
  description: 'Professional corporate housekeeping services in Aurangabad. Complete office cleaning, pantry maintenance, washroom upkeep for businesses. Trained staff.',
  keywords: 'corporate housekeeping, office housekeeping Aurangabad, corporate cleaning services, facility management, commercial cleaning',
};

export default function CorporateHousekeepingPage() {
  const services = [
    {
      title: 'Daily Office Cleaning',
      description: 'Workstations, conference rooms, reception areas, floors, and common spaces',
      icon: Building2,
    },
    {
      step: 2,
      title: 'Washroom Maintenance',
      description: 'Regular sanitization, restocking supplies, odor control, and deep cleaning',
      icon: Sparkles,
    },
    {
      step: 3,
      title: 'Pantry & Kitchen Upkeep',
      description: 'Cleaning of pantry areas, kitchen equipment, refrigerators, and dining spaces',
      icon: CheckCircle2,
    },
    {
      step: 4,
      title: 'Floor Care',
      description: 'Sweeping, mopping, vacuuming, carpet cleaning, and floor polishing',
      icon: Sparkles,
    },
    {
      step: 5,
      title: 'Waste Management',
      description: 'Segregated waste collection, disposal, and recycling coordination',
      icon: Leaf,
    },
    {
      step: 6,
      title: 'Glass & Surface Maintenance',
      description: 'Window cleaning, glass partitions, mirrors, and high-touch surface sanitization',
      icon: Shield,
    },
  ];

  const benefits = [
    {
      title: 'Productive Workplace',
      description: 'Clean, organized environment boosts employee morale and productivity.',
      icon: Users,
    },
    {
      title: 'Professional Image',
      description: 'Impress clients and visitors with a spotless, well-maintained office.',
      icon: Award,
    },
    {
      title: 'Health & Safety',
      description: 'Regular sanitization reduces sick days and promotes a healthier workforce.',
      icon: Shield,
    },
    {
      title: 'Cost-Effective',
      description: 'Eliminate overhead of hiring, training, and managing in-house staff.',
      icon: CheckCircle2,
    },
  ];

  const whyMohishree = [
    {
      point: 'Trained & Verified Staff',
      description: 'Background-checked, uniformed housekeeping personnel with professional training',
    },
    {
      point: 'Flexible Scheduling',
      description: 'Day shift, night shift, or 24/7 coverage based on your business hours',
    },
    {
      point: 'Dedicated Supervisor',
      description: 'On-site supervisor for quality control and immediate issue resolution',
    },
    {
      point: 'Eco-Friendly Products',
      description: 'Non-toxic, biodegradable cleaning agents safe for office environments',
    },
    {
      point: 'Customizable Scope',
      description: 'Tailored cleaning plans matching your specific requirements and budget',
    },
    {
      point: 'Performance Tracking',
      description: 'Regular audits, checklists, and reporting for accountability',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Building2 className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Corporate Housekeeping Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional Facility Management for Modern Businesses
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
                Request Custom Quote
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
            <Card className="border-l-4 border-l-blue-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Your Office, Our Responsibility
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  A clean workplace is not just about aesthetics - it directly impacts employee health, 
                  productivity, and your company image. Managing in-house housekeeping staff comes with 
                  recruitment hassles, training costs, and ongoing supervision burden.
                </p>
                <p className="text-lg text-gray-600">
                  Mohishree Corporate Housekeeping Services provides end-to-end facility management 
                  solutions. We deploy trained, verified staff, manage all cleaning operations, and 
                  ensure your office remains spotless and professional - while you focus on your core business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Housekeeping Services
              </h2>
              <p className="text-xl text-gray-600">
                Complete office maintenance under one roof
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Icon className="h-6 w-6 text-blue-700" />
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

      {/* Why Mohishree */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Mohishree for Corporate Housekeeping?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whyMohishree.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">
                          {item.point}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Business Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-blue-700" />
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

      {/* Service Models */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Flexible Service Models
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <div className="text-center">
                    <Clock className="h-10 w-10 mx-auto mb-2" />
                    <h3 className="text-xl font-semibold">Day Shift</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                      <span>9 AM - 6 PM coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                      <span>Real-time cleaning and maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                      <span>Immediate spill cleanup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                      <span>Pantry and washroom upkeep</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                  <div className="text-center">
                    <Clock className="h-10 w-10 mx-auto mb-2" />
                    <h3 className="text-xl font-semibold">Night Shift</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                      <span>Post-work deep cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                      <span>No disruption to operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                      <span>Fresh office every morning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                      <span>Floor polishing and carpet care</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-700 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                  <div className="text-center">
                    <Clock className="h-10 w-10 mx-auto mb-2" />
                    <h3 className="text-xl font-semibold">24/7 Support</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                      <span>Round-the-clock coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                      <span>Ideal for BPO, call centers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                      <span>Multiple shift teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                      <span>Continuous cleanliness</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-center text-sm font-semibold text-blue-700">
                    ✓ Premium Option
                  </div>
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
                Green Cleaning for Corporate Spaces
              </h3>
              <p className="text-lg text-gray-600">
                Our eco-friendly cleaning products align with corporate sustainability goals. Non-toxic, 
                biodegradable solutions that are safe for employees while maintaining professional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Industries We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'IT Companies & Tech Parks',
                'Banks & Financial Institutions',
                'Educational Institutions',
                'Healthcare Facilities',
                'Manufacturing Units',
                'Retail & Showrooms',
                'BPO & Call Centers',
                'Hotels & Hospitality',
                'Government Offices',
              ].map((industry, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-700 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Elevate Your Workplace Environment
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Partner with Mohishree for professional corporate housekeeping
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
                Schedule Site Visit
              </Button>
              <a href="https://api.whatsapp.com/send?phone=919423679285&text=Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white/10 px-6 py-3">
                WhatsApp: +91 94236 79285
              </a>
            </div>
            <p className="mt-6 text-blue-100">
              ⭐ 4.4 Rating | 🏢 100+ Corporate Clients | 🌿 Eco-Friendly Solutions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
