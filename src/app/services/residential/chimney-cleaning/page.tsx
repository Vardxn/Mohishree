import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  Flame,
  Wind,
  CheckCircle2, 
  Droplet, 
  Shield,
  Leaf,
  Sparkles,
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chimney & Kitchen Exhaust Cleaning in Aurangabad | Mohishree',
  description: 'Professional chimney and kitchen exhaust cleaning services in Aurangabad. Remove grease, oil buildup, improve efficiency. Fire safety and hygiene.',
  keywords: 'chimney cleaning, kitchen exhaust cleaning Aurangabad, chimney degreasing, hood cleaning, kitchen ventilation',
};

export default function ChimneyCleaningPage() {
  const cleaningProcess = [
    {
      step: 1,
      title: 'Inspection & Assessment',
      description: 'Examine chimney condition, grease buildup level, filter status, and motor functionality.',
      icon: AlertCircle,
    },
    {
      step: 2,
      title: 'Disassembly',
      description: 'Carefully remove filters, blower assembly, and other detachable components for thorough cleaning.',
      icon: Shield,
    },
    {
      step: 3,
      title: 'Degreasing Treatment',
      description: 'Apply powerful, food-safe degreasers to dissolve stubborn oil and grease deposits.',
      icon: Droplet,
    },
    {
      step: 4,
      title: 'Scrubbing & Washing',
      description: 'Manual scrubbing of filters, blades, ducts, and interior surfaces to remove all residue.',
      icon: Sparkles,
    },
    {
      step: 5,
      title: 'Motor & Duct Cleaning',
      description: 'Clean motor housing, exhaust ducts, and ventilation pathways for optimal airflow.',
      icon: Wind,
    },
    {
      step: 6,
      title: 'Reassembly & Testing',
      description: 'Reassemble all components, test suction power, and ensure proper functioning.',
      icon: CheckCircle2,
    },
  ];

  const benefits = [
    {
      title: 'Fire Safety',
      description: 'Remove highly flammable grease buildup that poses serious fire hazards.',
      icon: Flame,
    },
    {
      title: 'Better Suction',
      description: 'Restore full suction power and efficiency, eliminating smoke and odors effectively.',
      icon: Wind,
    },
    {
      title: 'Energy Savings',
      description: 'Clean chimneys consume less electricity and operate more efficiently.',
      icon: Leaf,
    },
    {
      title: 'Extended Lifespan',
      description: 'Regular cleaning prevents motor damage and extends your chimney lifespan.',
      icon: Shield,
    },
  ];

  const signsYouNeed = [
    'Grease dripping from chimney filters',
    'Reduced suction power or smoke escaping',
    'Loud or unusual motor noises',
    'Visible oil accumulation on surfaces',
    'Strong odors even with chimney on',
    'Have not cleaned in 6+ months',
    'Kitchen walls getting greasy faster',
    'Chimney struggles to start or stop',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Flame className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chimney & Kitchen Exhaust Cleaning
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Deep Degreasing for Fire Safety and Optimal Performance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                Book Chimney Cleaning
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
            <Card className="border-l-4 border-l-orange-600">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Why Chimney Cleaning Is Critical
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Your kitchen chimney works hard every day, absorbing smoke, oil vapors, and grease. 
                  Over time, this buildup not only reduces suction efficiency but creates a serious fire 
                  hazard. A single spark can ignite accumulated grease, leading to dangerous kitchen fires.
                </p>
                <p className="text-lg text-gray-600">
                  Our professional chimney cleaning service completely removes grease deposits from filters, 
                  blower blades, motor housing, and exhaust ducts. We restore your chimney to peak performance 
                  while eliminating fire risks - keeping your kitchen safe and smoke-free.
                </p>
              </CardContent>
            </Card>

            {/* Warning Box */}
            <Card className="mt-6 bg-red-50 border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Fire Hazard Warning
                    </h3>
                    <p className="text-gray-700">
                      <strong>Grease buildup in chimneys is highly flammable.</strong> Neglected chimneys 
                      are one of the leading causes of residential kitchen fires in India. Professional 
                      cleaning every 6 months is essential for safety.
                    </p>
                  </div>
                </div>
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
                Our Professional 6-Step Chimney Cleaning Process
              </h2>
              <p className="text-xl text-gray-600">
                Complete degreasing and restoration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cleaningProcess.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.step} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-full">
                          <span className="text-2xl font-bold text-orange-600">{item.step}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <Icon className="h-5 w-5 text-orange-600" />
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

      {/* Signs You Need Cleaning */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Signs Your Chimney Needs Professional Cleaning
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {signsYouNeed.map((sign, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Benefits of Regular Chimney Cleaning
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-orange-600" />
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

      {/* Before & After */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What We Clean
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Wind className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Filters & Mesh</h3>
                  <p className="text-gray-600">
                    Remove all grease from baffle filters, mesh filters, and cassette filters
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Flame className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Blower & Motor</h3>
                  <p className="text-gray-600">
                    Clean blower blades, motor housing, and all internal mechanical parts
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Sparkles className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ducts & Body</h3>
                  <p className="text-gray-600">
                    Deep clean exhaust ducts, chimney body, and exterior surfaces
                  </p>
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
                Food-Safe Cleaning Agents
              </h3>
              <p className="text-lg text-gray-600">
                We use powerful yet food-safe degreasers that won't leave harmful residues in your 
                kitchen environment. Effective cleaning without toxic chemicals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequency Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Recommended Cleaning Frequency
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-orange-600 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-orange-600 mb-2">Every 3-6 Months</div>
                    <h3 className="text-xl font-semibold">Heavy Home Cooking</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      Daily Indian cooking with oils and spices
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      Joint families or frequent cooking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      Visible grease accumulation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-orange-600 mb-2">Every 6-12 Months</div>
                    <h3 className="text-xl font-semibold">Moderate Cooking</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      Occasional cooking, smaller families
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      Less oil-intensive cooking methods
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      Regular filter cleaning maintained
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protect Your Kitchen - Book Chimney Cleaning Today
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Eliminate fire risks and restore peak performance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                Schedule Chimney Service
              </Button>
              <a href="https://api.whatsapp.com/send?phone=919423679285&text=Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white/10 px-6 py-3">
                WhatsApp: +91 94236 79285
              </a>
            </div>
            <p className="mt-6 text-orange-100">
              🔥 Fire Safety Priority | ⚡ Restore Full Suction | 🌿 Food-Safe Products
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
