import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  Sparkles,
  Sun,
  CheckCircle2, 
  Droplet, 
  Shield,
  Leaf,
  Building2,
  Home
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Window & Glass Cleaning Services in Aurangabad | Mohishree',
  description: 'Professional window and glass cleaning in Aurangabad. Streak-free shine for residential and commercial properties. High-rise window cleaning available.',
  keywords: 'window cleaning, glass cleaning Aurangabad, high-rise window cleaning, streak-free windows, professional window wash',
};

export default function WindowCleaningPage() {
  const cleaningProcess = [
    {
      step: 1,
      title: 'Pre-Cleaning Inspection',
      description: 'Assess window condition, frame type, accessibility, and identify stubborn stains or damage.',
      icon: Shield,
    },
    {
      step: 2,
      title: 'Dry Dusting & Debris Removal',
      description: 'Remove dry dirt, dust, spider webs, and loose debris from glass, frames, and sills.',
      icon: Sparkles,
    },
    {
      step: 3,
      title: 'Solution Application',
      description: 'Apply professional-grade, streak-free cleaning solution to glass surfaces.',
      icon: Droplet,
    },
    {
      step: 4,
      title: 'Scrubbing & Wiping',
      description: 'Thorough scrubbing to remove water spots, hard stains, and accumulated grime.',
      icon: Sparkles,
    },
    {
      step: 5,
      title: 'Squeegee Technique',
      description: 'Professional squeegee work for a flawless, streak-free finish on all glass.',
      icon: Sun,
    },
    {
      step: 6,
      title: 'Frame & Sill Cleaning',
      description: 'Clean and polish window frames, sills, tracks, and surrounding areas.',
      icon: CheckCircle2,
    },
  ];

  const benefits = [
    {
      title: 'Crystal Clear Views',
      description: 'Enjoy unobstructed views and maximum natural light in your home or office.',
      icon: Sun,
    },
    {
      title: 'Enhanced Curb Appeal',
      description: 'Clean windows dramatically improve the appearance of your property.',
      icon: Building2,
    },
    {
      title: 'Extended Window Life',
      description: 'Regular cleaning prevents permanent staining and glass degradation.',
      icon: Shield,
    },
    {
      title: 'Healthier Indoors',
      description: 'Remove allergens, mold, and pollutants that accumulate on windows.',
      icon: Leaf,
    },
  ];

  const whatWeClean = [
    {
      type: 'Residential Windows',
      items: ['Living room windows', 'Bedroom windows', 'Kitchen windows', 'Balcony glass doors', 'Bathroom windows', 'Skylights'],
    },
    {
      type: 'Commercial Glass',
      items: ['Office windows', 'Storefront glass', 'Building facades', 'Lobby glass panels', 'Conference room glass', 'High-rise windows'],
    },
    {
      type: 'Specialized Glass',
      items: ['Stained glass', 'Tinted windows', 'Frosted glass', 'Glass railings', 'Shower enclosures', 'Glass partitions'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Sun className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Window & Glass Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-sky-100">
              Streak-Free Shine for Sparkling Clean Windows
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-sky-600 hover:bg-sky-50">
                Get Free Quote
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
            <Card className="border-l-4 border-l-sky-600">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Professional Window Cleaning Makes a Difference
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Clean windows do more than just look good - they transform the entire ambiance of your 
                  space by allowing maximum natural light and providing clear views. DIY window cleaning 
                  often leaves streaks, water spots, and missed corners.
                </p>
                <p className="text-lg text-gray-600">
                  Our professional window cleaning service uses commercial-grade solutions, specialized 
                  tools, and proven techniques to deliver a flawless, streak-free finish. We clean both 
                  interior and exterior surfaces, frames, sills, and tracks - ensuring your windows look 
                  perfect from every angle.
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
                Our Professional 6-Step Window Cleaning Process
              </h2>
              <p className="text-xl text-gray-600">
                From dusty to dazzling
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cleaningProcess.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.step} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-sky-100 p-3 rounded-full">
                          <span className="text-2xl font-bold text-sky-600">{item.step}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <Icon className="h-5 w-5 text-sky-600" />
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Comprehensive Window & Glass Cleaning
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whatWeClean.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="bg-sky-50">
                    <h3 className="text-xl font-semibold text-center text-gray-800">
                      {category.type}
                    </h3>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0" />
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
      <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Professional Window Cleaning Matters
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-sky-600" />
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

      {/* Residential vs Commercial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              We Serve Both Residential & Commercial
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="bg-gradient-to-r from-sky-500 to-blue-600 text-white">
                  <div className="flex items-center justify-center gap-3">
                    <Home className="h-8 w-8" />
                    <h3 className="text-2xl font-semibold">Residential</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                      <span>Apartments, villas, and bungalows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                      <span>Interior and exterior window cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                      <span>Balcony glass and sliding doors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                      <span>Skylights and hard-to-reach windows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                      <span>Flexible scheduling around your routine</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <div className="flex items-center justify-center gap-3">
                    <Building2 className="h-8 w-8" />
                    <h3 className="text-2xl font-semibold">Commercial</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                      <span>Office buildings and corporate parks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                      <span>Retail storefronts and showrooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                      <span>High-rise building facade cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                      <span>Certified rope access for tall buildings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                      <span>Scheduled maintenance contracts</span>
                    </li>
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
                Eco-Friendly Window Cleaning
              </h3>
              <p className="text-lg text-gray-600">
                Our biodegradable, ammonia-free cleaning solutions deliver brilliant results without 
                harmful chemicals. Safe for your family, pets, and the environment.
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
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-sky-600 mb-2">Monthly</div>
                  <h3 className="text-lg font-semibold mb-2">Commercial Properties</h3>
                  <p className="text-gray-600">
                    Storefronts, offices, and high-traffic buildings
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-sky-600 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-sky-600 mb-2">Quarterly</div>
                  <h3 className="text-lg font-semibold mb-2">Residential Homes</h3>
                  <p className="text-gray-600">
                    Ideal balance of cleanliness and cost
                  </p>
                  <div className="mt-3 text-sm font-semibold text-sky-600">
                    ✓ Most Popular
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-sky-600 mb-2">Bi-Annually</div>
                  <h3 className="text-lg font-semibold mb-2">Budget-Friendly</h3>
                  <p className="text-gray-600">
                    Minimum maintenance for clear windows
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See the World More Clearly
            </h2>
            <p className="text-xl mb-8 text-sky-100">
              Professional window cleaning for sparkling, streak-free results
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-sky-600 hover:bg-sky-50">
                Book Window Cleaning
              </Button>
              <a href="https://api.whatsapp.com/send?phone=919423679285&text=Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white/10 px-6 py-3">
                WhatsApp: +91 94236 79285
              </a>
            </div>
            <p className="mt-6 text-sky-100">
              ⭐ 4.4 Rating | ✨ Streak-Free Guarantee | 🌿 Eco-Friendly Solutions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
