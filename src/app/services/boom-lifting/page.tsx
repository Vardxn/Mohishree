import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  ArrowUp,
  Zap, 
  CheckCircle2, 
  Wind, 
  Shield,
  Leaf,
  Droplet,
  Microscope,
  MessageCircle,
  Mail
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Boom Lifting & High-Access Services in Aurangabad | Mohishree',
  description: 'Professional boom lift operations for cleaning, maintenance, and accessibility. Safe and certified high-access services in Aurangabad.',
  keywords: 'boom lifting, high-access cleaning, elevated platform cleaning, cherry picker service, Aurangabad',
};

export default function BoomLiftingPage() {
  const cleaningProcess = [
    {
      step: 1,
      title: 'Site Assessment',
      description: 'Complete evaluation of location, height, access points, and safety requirements.',
      icon: Shield,
    },
    {
      step: 2,
      title: 'Equipment Deployment',
      description: 'Position boom lift safely, set up safety barriers, and ensure stable footing.',
      icon: Zap,
    },
    {
      step: 3,
      title: 'Safety Briefing',
      description: 'Team briefing on safety protocols, emergency procedures, and work standards.',
      icon: CheckCircle2,
    },
    {
      step: 4,
      title: 'High-Access Cleaning',
      description: 'Professional cleaning of high/elevated areas using boom lift platform access.',
      icon: Wind,
    },
    {
      step: 5,
      title: 'Maintenance & Repairs',
      description: 'Perform necessary maintenance or repairs in hard-to-reach elevated locations.',
      icon: Droplet,
    },
    {
      step: 6,
      title: 'Final Inspection',
      description: 'Safety inspection, area clearance, and equipment removal.',
      icon: CheckCircle2,
    },
  ];

  const benefits = [
    {
      title: 'Safe High-Access Work',
      description: 'Certified operators and safety equipment for elevated work above 20+ feet.',
      icon: Shield,
    },
    {
      title: 'Prevents Falls & Injuries',
      description: 'Professional platforms eliminate risk of manual climbing and fall hazards.',
      icon: CheckCircle2,
    },
    {
      title: 'Efficient Operations',
      description: 'Complete jobs faster and safer than traditional scaffolding or ladder methods.',
      icon: Zap,
    },
    {
      title: 'Versatile Applications',
      description: 'Suitable for cleaning, maintenance, repairs, and accessibility work.',
      icon: ArrowUp,
    },
  ];

  const applications = [
    'High-rise building facade cleaning',
    'Window and glass cleaning (upper floors)',
    'HVAC unit maintenance and cleaning',
    'Gutter and downspout cleaning',
    'Exterior wall repairs and maintenance',
    'Signage installation and maintenance',
    'Solar panel cleaning and maintenance',
    'Building exterior inspections',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Boom Lifting & High-Access Services
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              Safe and professional elevated platform operations
            </p>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              Professional boom lift services for cleaning, maintenance, and accessibility work in elevated areas. 
              Certified operators, safety-first approach, efficient results.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Boom Lifting Services?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-orange-100 rounded-lg">
                          <Icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Boom Lifting Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {cleaningProcess.map((process) => {
                const Icon = process.icon;
                return (
                  <div key={process.step} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-600 text-white font-bold">
                        {process.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Ideal For</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Highlight */}
      <section className="py-12 bg-red-50 border-y-2 border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-6">
            <Shield className="h-16 w-16 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Safety-First Operations
              </h3>
              <p className="text-lg text-gray-600">
                All operators are certified and trained. We follow strict safety protocols, use 
                maintained equipment, and comply with all regulations for elevated work operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Boom Lifting Services?
            </h2>
            <p className="text-xl mb-12 text-orange-100">
              Contact us today for a free site assessment and service quote
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* WhatsApp Button */}
              <a 
                href="https://api.whatsapp.com/send?phone=919423679285&text=Hi%20Mohishree,%20I%20am%20interested%20in%20Boom%20Lifting%20services.%20Can%20you%20provide%20more%20details?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                <MessageCircle className="h-6 w-6" />
                Chat on WhatsApp
              </a>
              
              {/* Email Button */}
              <a 
                href="mailto:info@mohishree.com?subject=Boom%20Lifting%20Inquiry&body=Hi%20Mohishree,%20I%20am%20interested%20in%20boom%20lifting%20and%20high-access%20services.%20Can%20you%20provide%20more%20details?"
                className="inline-flex items-center justify-center gap-3 bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                <Mail className="h-6 w-6" />
                Email Us
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg font-semibold mb-3">Direct Contact</p>
              <a href="tel:+919423679285" className="text-2xl font-bold hover:text-orange-100 transition">
                📞 +91 94236 79285
              </a>
              <p className="text-orange-100 mt-3">24/7 Service Available</p>
            </div>

            <p className="mt-8 text-orange-100">
              ⭐ 4.4 Rating | 🕐 Flexible Scheduling | 🔒 Safety Certified | 🏆 Professional Team
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
