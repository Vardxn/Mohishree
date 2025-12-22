import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  Landmark,
  CreditCard,
  CheckCircle2, 
  Shield, 
  Clock,
  Leaf,
  Sparkles,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ATM Cleaning & Maintenance Services in Aurangabad | Mohishree',
  description: 'Professional ATM cleaning services in Aurangabad. Sanitization of kiosks, cash machines, card readers. Bank and financial institution ATM maintenance.',
  keywords: 'ATM cleaning, ATM sanitization Aurangabad, cash machine cleaning, ATM kiosk maintenance, bank ATM cleaning',
};

export default function ATMCleaningPage() {
  const cleaningProcess = [
    {
      step: 1,
      title: 'Exterior Cleaning',
      description: 'Cleaning of ATM booth exterior, signage, glass panels, and surrounding area.',
      icon: Sparkles,
    },
    {
      step: 2,
      title: 'Screen & Keypad Sanitization',
      description: 'Thorough cleaning and disinfection of touchscreen, keyboard, and card reader slots.',
      icon: Shield,
    },
    {
      step: 3,
      title: 'Interior Booth Cleaning',
      description: 'Floor mopping, wall wiping, ventilation cleaning, and lighting fixture maintenance.',
      icon: Landmark,
    },
    {
      step: 4,
      title: 'Cash Dispensing Area',
      description: 'Careful cleaning around cash dispenser without interfering with machine operations.',
      icon: CreditCard,
    },
    {
      step: 5,
      title: 'Security Camera & Sensors',
      description: 'Gentle cleaning of security cameras, sensors, and alarm systems without damage.',
      icon: Shield,
    },
    {
      step: 6,
      title: 'Final Inspection',
      description: 'Quality check ensuring ATM is clean, sanitized, and fully operational.',
      icon: CheckCircle2,
    },
  ];

  const benefits = [
    {
      title: 'Customer Confidence',
      description: 'Clean ATMs enhance customer trust and encourage usage, reducing branch traffic.',
      icon: Users,
    },
    {
      title: 'Health & Safety',
      description: 'Regular sanitization protects customers from germs on high-touch surfaces.',
      icon: Shield,
    },
    {
      title: 'Brand Image',
      description: 'Well-maintained ATMs reflect positively on your financial institution brand.',
      icon: Landmark,
    },
    {
      title: 'Equipment Longevity',
      description: 'Regular cleaning prevents dust buildup that can cause machine malfunctions.',
      icon: Clock,
    },
  ];

  const whatWeClean = [
    'ATM machine exterior and fascia',
    'Touchscreen display (non-invasive)',
    'Keyboard and card reader slot',
    'Cash dispensing area',
    'Receipt printer area',
    'Security cameras and sensors',
    'ATM booth floor and walls',
    'Glass panels and doors',
    'Ventilation grills',
    'Signage and branding elements',
    'Exterior surrounding area',
    'Waste bin emptying',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Landmark className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ATM Cleaning & Maintenance Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Professional Sanitization for Banking Infrastructure
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-green-50">
                Request ATM Service Quote
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
            <Card className="border-l-4 border-l-green-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  First Impressions Matter in Banking
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Your ATMs are often the first - and sometimes only - physical touchpoint customers have 
                  with your bank. A dirty, poorly maintained ATM creates negative brand perception and can 
                  even drive customers to competitors. Beyond appearance, hygiene is critical as ATMs are 
                  high-touch surfaces used by hundreds of people daily.
                </p>
                <p className="text-lg text-gray-600">
                  Mohishree provides specialized ATM cleaning services for banks, credit unions, and financial 
                  institutions across Aurangabad. Our trained staff understand the sensitive nature of banking 
                  equipment, following strict protocols to clean thoroughly without disrupting operations or 
                  compromising security.
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
                Our 6-Step ATM Cleaning Process
              </h2>
              <p className="text-xl text-gray-600">
                Thorough yet non-invasive cleaning protocols
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cleaningProcess.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.step} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-full">
                          <span className="text-2xl font-bold text-green-700">{item.step}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <Icon className="h-5 w-5 text-green-700" />
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

      {/* What We Clean */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Comprehensive ATM Cleaning Coverage
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {whatWeClean.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-green-700 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Professional ATM Cleaning Matters
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-green-700" />
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
              Flexible Service Frequencies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-green-700 mb-2">Daily</div>
                  <h3 className="text-xl font-semibold mb-4">High-Traffic ATMs</h3>
                  <p className="text-gray-600">
                    Ideal for ATMs in malls, transportation hubs, and busy commercial areas
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-700 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-green-700 mb-2">3x Weekly</div>
                  <h3 className="text-xl font-semibold mb-4">Standard Locations</h3>
                  <p className="text-gray-600">
                    Most popular option for branch ATMs and moderate traffic locations
                  </p>
                  <div className="mt-4 text-sm font-semibold text-green-700">
                    ✓ Recommended
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-green-700 mb-2">Weekly</div>
                  <h3 className="text-xl font-semibold mb-4">Low-Traffic Sites</h3>
                  <p className="text-gray-600">
                    Cost-effective option for residential areas and limited-use ATMs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Banks Choose Mohishree
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-8 w-8 text-green-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Background-Verified Staff</h3>
                      <p className="text-gray-600">
                        All cleaning personnel undergo thorough background checks and police verification 
                        before deployment to banking locations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-8 w-8 text-green-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                      <p className="text-gray-600">
                        Early morning, late evening, or during low-traffic hours - we work around your 
                        ATM usage patterns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-8 w-8 text-green-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Non-Invasive Techniques</h3>
                      <p className="text-gray-600">
                        Trained to clean around sensitive equipment without opening panels or touching 
                        internal components - purely external cleaning.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-8 w-8 text-green-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Quality Reporting</h3>
                      <p className="text-gray-600">
                        Regular reports with before/after photos, service completion logs, and any 
                        maintenance issues observed.
                      </p>
                    </div>
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
                Safe, Non-Toxic Cleaning Agents
              </h3>
              <p className="text-lg text-gray-600">
                We use gentle yet effective, non-toxic cleaning solutions that will not damage sensitive 
                electronic equipment or leave harmful residues on customer touchpoints.
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
              Serving All Banking Institutions
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Nationalized Banks',
                'Private Banks',
                'Cooperative Banks',
                'Credit Unions',
                'Payment Banks',
                'White-Label ATMs',
              ].map((type, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <Landmark className="h-6 w-6 text-green-700 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Keep Your ATM Network Spotless
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Professional ATM cleaning services for financial institutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-green-50">
                Request Multi-Location Quote
              </Button>
              <a href="https://api.whatsapp.com/send?phone=919423679285&text=Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white/10 px-6 py-3">
                WhatsApp: +91 94236 79285
              </a>
            </div>
            <p className="mt-6 text-green-100">
              ⭐ 4.4 Rating | 🏦 Bank-Trusted | 🛡️ Verified Staff
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
