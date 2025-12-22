import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  Briefcase,
  Sparkles,
  CheckCircle2, 
  Clock, 
  Shield,
  Leaf,
  Users,
  Coffee
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Office Cleaning Services in Aurangabad | Mohishree Facility Services',
  description: 'Professional office cleaning services in Aurangabad. Daily cleaning, desk sanitization, floor care for corporate offices. Flexible scheduling.',
  keywords: 'office cleaning, office cleaning services Aurangabad, workplace cleaning, desk cleaning, corporate cleaning',
};

export default function OfficeCleaningPage() {
  const cleaningProcess = [
    {
      step: 1,
      title: 'Workstation Cleaning',
      description: 'Dusting and sanitization of desks, keyboards, phones, monitors, and personal workspaces.',
      icon: Briefcase,
    },
    {
      step: 2,
      title: 'Floor & Carpet Care',
      description: 'Vacuuming, mopping, and spot cleaning of all flooring surfaces including carpeted areas.',
      icon: Sparkles,
    },
    {
      step: 3,
      title: 'Washroom Sanitization',
      description: 'Thorough cleaning and disinfection of toilets, sinks, floors, and replenishing supplies.',
      icon: Shield,
    },
    {
      step: 4,
      title: 'Pantry & Break Room',
      description: 'Cleaning of kitchen surfaces, refrigerators, microwaves, coffee machines, and dining areas.',
      icon: Coffee,
    },
    {
      step: 5,
      title: 'Common Areas',
      description: 'Reception, lobbies, corridors, meeting rooms, and shared spaces maintenance.',
      icon: Users,
    },
    {
      step: 6,
      title: 'Waste Disposal',
      description: 'Emptying trash bins, replacing liners, and eco-friendly waste segregation.',
      icon: Leaf,
    },
  ];

  const dailyTasks = [
    'Vacuum and mop all floors',
    'Empty and sanitize trash bins',
    'Clean and disinfect washrooms',
    'Wipe down desks and surfaces',
    'Clean glass doors and partitions',
    'Sanitize high-touch points (handles, switches)',
    'Restock washroom supplies',
    'Organize reception and waiting areas',
  ];

  const weeklyTasks = [
    'Deep clean pantry and appliances',
    'Vacuum and clean under furniture',
    'Polish glass and mirrors',
    'Dust ceiling fans and vents',
    'Clean window sills and blinds',
    'Sanitize phone systems and keyboards',
  ];

  const benefits = [
    {
      title: 'Healthier Workforce',
      description: 'Regular cleaning and sanitization reduce germs, leading to fewer sick days.',
      icon: Shield,
    },
    {
      title: 'Increased Productivity',
      description: 'Clean, organized workspace helps employees focus and work more efficiently.',
      icon: Briefcase,
    },
    {
      title: 'Professional Appearance',
      description: 'Make a great impression on clients, partners, and potential employees.',
      icon: Sparkles,
    },
    {
      title: 'Flexible Scheduling',
      description: 'Before-hours, after-hours, or during the day - we work around your schedule.',
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-700 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Briefcase className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Office Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Professional Cleaning for Productive Workspaces
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-slate-700 hover:bg-slate-50">
                Get Office Cleaning Quote
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
            <Card className="border-l-4 border-l-slate-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  A Clean Office Is a Productive Office
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Your office environment directly impacts employee morale, productivity, and health. 
                  A cluttered, dirty workspace not only looks unprofessional but also harbors germs 
                  that lead to increased sick days and reduced efficiency.
                </p>
                <p className="text-lg text-gray-600">
                  Mohishree Office Cleaning Services provides comprehensive daily, weekly, and monthly 
                  cleaning solutions tailored to your business needs. We handle everything from workstation 
                  sanitization to floor care, ensuring your team works in a clean, healthy, and professional 
                  environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Office Cleaning Coverage
              </h2>
              <p className="text-xl text-gray-600">
                Every area of your office, professionally maintained
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cleaningProcess.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.step} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-slate-100 p-3 rounded-full">
                          <Icon className="h-6 w-6 text-slate-700" />
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

      {/* Daily vs Weekly Tasks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Cleaning Schedule
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-slate-700 shadow-lg">
                <CardHeader className="bg-slate-700 text-white">
                  <h3 className="text-2xl font-semibold text-center">Daily Tasks</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-4 italic">
                    Essential cleaning performed every workday
                  </p>
                  <ul className="space-y-2">
                    {dailyTasks.map((task, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-slate-700 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-gray-100">
                  <h3 className="text-2xl font-semibold text-center">Weekly Tasks</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-4 italic">
                    Deep cleaning tasks performed weekly
                  </p>
                  <ul className="space-y-2">
                    {weeklyTasks.map((task, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-slate-700 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Professional Office Cleaning Matters
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-slate-700" />
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

      {/* Service Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Flexible Cleaning Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-slate-700 mb-2">5 Days/Week</div>
                  <h3 className="text-xl font-semibold mb-4">Standard Plan</h3>
                  <p className="text-gray-600 mb-4">
                    Monday to Friday daily cleaning for regular business hours offices
                  </p>
                  <ul className="text-left space-y-2 text-sm text-gray-600">
                    <li>✓ All daily tasks covered</li>
                    <li>✓ Weekly deep cleaning</li>
                    <li>✓ Supplies included</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-700 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-slate-700 mb-2">6 Days/Week</div>
                  <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
                  <p className="text-gray-600 mb-4">
                    Monday to Saturday coverage for businesses open on weekends
                  </p>
                  <ul className="text-left space-y-2 text-sm text-gray-600">
                    <li>✓ Extended coverage</li>
                    <li>✓ Weekend cleaning</li>
                    <li>✓ Priority support</li>
                  </ul>
                  <div className="mt-4 text-sm font-semibold text-slate-700">
                    ✓ Most Popular
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-slate-700 mb-2">Custom</div>
                  <h3 className="text-xl font-semibold mb-4">Tailored Plan</h3>
                  <p className="text-gray-600 mb-4">
                    Design your own schedule based on specific needs and budget
                  </p>
                  <ul className="text-left space-y-2 text-sm text-gray-600">
                    <li>✓ Flexible frequency</li>
                    <li>✓ Selective areas</li>
                    <li>✓ Budget-friendly</li>
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
                Eco-Friendly Office Cleaning
              </h3>
              <p className="text-lg text-gray-600">
                We use green cleaning products that are safe for your employees and the environment. 
                Non-toxic solutions that deliver professional results without harmful chemicals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Perfect For All Office Types
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Small Offices (5-20 employees)',
                'Medium Offices (20-100 employees)',
                'Large Corporate Offices (100+ employees)',
                'Coworking Spaces',
                'Startups & Tech Companies',
                'Professional Service Firms',
                'Medical & Dental Offices',
                'Legal & Consulting Firms',
                'Real Estate Offices',
              ].map((type, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-slate-700 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-700 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for a Cleaner, More Productive Office?
            </h2>
            <p className="text-xl mb-8 text-slate-200">
              Get a customized cleaning plan for your workspace
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-slate-700 hover:bg-slate-50">
                Request Free Site Assessment
              </Button>
              <a href="https://api.whatsapp.com/send?phone=919423679285&text=Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white/10 px-6 py-3">
                WhatsApp: +91 94236 79285
              </a>
            </div>
            <p className="mt-6 text-slate-200">
              ⭐ 4.4 Rating | 🕐 Flexible Scheduling | 🌿 Eco-Friendly Products
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
