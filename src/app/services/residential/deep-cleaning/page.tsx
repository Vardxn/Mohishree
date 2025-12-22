import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Wind, 
  Shield,
  Leaf,
  Droplet,
  Microscope
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Deep Cleaning Services in Aurangabad | Mohishree Facility Services',
  description: 'Professional deep cleaning services in Aurangabad. Intensive cleaning beyond regular maintenance. Remove stubborn stains, hidden dirt, and sanitize thoroughly.',
  keywords: 'deep cleaning, intensive cleaning Aurangabad, professional deep clean, sanitization services, thorough cleaning',
};

export default function DeepCleaningPage() {
  const cleaningProcess = [
    {
      step: 1,
      title: 'Pre-Clean Preparation',
      description: 'Move furniture, protect delicate items, and prepare the space for intensive cleaning.',
      icon: Shield,
    },
    {
      step: 2,
      title: 'High-Pressure Cleaning',
      description: 'Use specialized equipment to blast away stubborn dirt, grime, and stains from all surfaces.',
      icon: Zap,
    },
    {
      step: 3,
      title: 'Scrubbing & Degreasing',
      description: 'Manual scrubbing of tiles, grout, corners, and hard-to-reach areas with industrial-grade cleaners.',
      icon: Sparkles,
    },
    {
      step: 4,
      title: 'Deep Sanitization',
      description: 'Application of hospital-grade disinfectants to kill 99.9% of germs, bacteria, and viruses.',
      icon: Microscope,
    },
    {
      step: 5,
      title: 'Air & Odor Treatment',
      description: 'Eliminate musty odors, freshen air quality, and treat mold/mildew-prone areas.',
      icon: Wind,
    },
    {
      step: 6,
      title: 'Final Polish & Protection',
      description: 'Polish surfaces, apply protective coatings where needed, and restore everything to position.',
      icon: CheckCircle2,
    },
  ];

  const whatMakesItDeep = [
    {
      title: 'Behind & Beneath',
      description: 'We move furniture and appliances to clean hidden areas regular cleaning misses.',
      icon: Sparkles,
    },
    {
      title: 'Grout & Tile Deep Clean',
      description: 'Intensive scrubbing of bathroom and kitchen tiles, restoring original color.',
      icon: Droplet,
    },
    {
      title: 'Ceiling to Floor',
      description: 'Ceiling fans, light fixtures, wall spots, baseboards - every surface gets attention.',
      icon: Zap,
    },
    {
      title: 'Sanitization Focus',
      description: 'Beyond cleaning - we sanitize and disinfect for a truly hygienic environment.',
      icon: Microscope,
    },
  ];

  const targetAudiences = [
    'Homes not cleaned thoroughly in 6+ months',
    'Pre-festival or pre-event preparation',
    'Post-renovation or construction cleanup',
    'Homes with pet odors or stains',
    'Allergy sufferers needing dust removal',
    'New homeowners or tenants moving in',
    'Preparing property for sale/rent',
    'Seasonal spring or monsoon cleaning',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Deep Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Intensive, Thorough Cleaning That Goes Beyond the Surface
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
                Request Deep Clean Quote
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
            <Card className="border-l-4 border-l-purple-600">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  When Regular Cleaning Isn't Enough
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Deep cleaning goes far beyond your regular cleaning routine. It's an intensive, 
                  comprehensive cleaning process that tackles accumulated dirt, grime, and bacteria 
                  in every corner of your home - including areas that are often overlooked.
                </p>
                <p className="text-lg text-gray-600">
                  Using specialized equipment, professional-grade cleaners, and proven techniques, 
                  we transform even the most neglected spaces into spotless, sanitized environments. 
                  Perfect for seasonal cleaning, post-renovation cleanup, or simply giving your home 
                  the reset it deserves.
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
                Our Intensive 6-Step Deep Cleaning Process
              </h2>
              <p className="text-xl text-gray-600">
                Professional-grade cleaning from top to bottom
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cleaningProcess.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.step} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-3 rounded-full">
                          <span className="text-2xl font-bold text-purple-600">{item.step}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <Icon className="h-5 w-5 text-purple-600" />
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

      {/* What Makes It Deep */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Makes It "Deep" Cleaning?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatMakesItDeep.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Regular vs Deep Cleaning */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Regular Cleaning vs. Deep Cleaning
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-gray-300">
                <CardHeader className="bg-gray-100">
                  <h3 className="text-2xl font-semibold text-center">Regular Cleaning</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span>Surface dusting and wiping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span>Vacuuming and mopping floors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span>Quick bathroom wipe-down</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span>Kitchen counter cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span>Trash removal</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    Frequency: Weekly or bi-weekly
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-600 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <h3 className="text-2xl font-semibold text-center">Deep Cleaning</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Everything in regular clean PLUS:</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Behind/under furniture and appliances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Tile grout scrubbing and restoration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Ceiling fans, light fixtures, baseboards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Inside cabinets, appliances, windows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Complete sanitization and disinfection</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-purple-600 font-semibold italic">
                    Frequency: Quarterly, bi-annually, or as needed
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              When Do You Need Deep Cleaning?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {targetAudiences.map((audience, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{audience}</span>
                </div>
              ))}
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
                Eco-Friendly Deep Cleaning
              </h3>
              <p className="text-lg text-gray-600">
                Even our most intensive cleaning uses biodegradable, non-toxic products. Powerful 
                enough to remove stubborn dirt, gentle enough for families with children and pets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Space with Deep Cleaning
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Experience the difference professional deep cleaning makes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
                Get Custom Deep Clean Quote
              </Button>
              <a href="https://api.whatsapp.com/send?phone=919423679285&text=Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white/10 px-6 py-3">
                WhatsApp: +91 94236 79285
              </a>
            </div>
            <p className="mt-6 text-purple-100">
              ⭐ 4.4 Rating | 🕐 Flexible Scheduling | 🌿 Safe for Families & Pets
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
