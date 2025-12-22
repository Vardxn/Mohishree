import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  Bath,
  Droplet,
  CheckCircle2, 
  ShowerHead, 
  Shield,
  Leaf,
  Sparkles,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bathroom & Toilet Cleaning Services in Aurangabad | Mohishree',
  description: 'Professional bathroom and toilet deep cleaning in Aurangabad. Tile scrubbing, sanitization, descaling, odor removal. Hygienic and spotless results.',
  keywords: 'bathroom cleaning, toilet cleaning Aurangabad, bathroom sanitization, tile cleaning, bathroom deep clean',
};

export default function BathroomCleaningPage() {
  const cleaningProcess = [
    {
      step: 1,
      title: 'Pre-Treatment',
      description: 'Apply specialized cleaners to toilet bowls, tiles, grout, and fixtures to break down stains and buildup.',
      icon: Droplet,
    },
    {
      step: 2,
      title: 'Intensive Scrubbing',
      description: 'Manual scrubbing of tiles, grout lines, toilet bowls, and all surfaces to remove stubborn stains.',
      icon: Sparkles,
    },
    {
      step: 3,
      title: 'Descaling & Stain Removal',
      description: 'Remove hard water stains, limescale, and mineral deposits from faucets, showerheads, and glass.',
      icon: ShowerHead,
    },
    {
      step: 4,
      title: 'Sanitization',
      description: 'Apply hospital-grade disinfectants to kill 99.9% of germs, bacteria, and viruses.',
      icon: Shield,
    },
    {
      step: 5,
      title: 'Odor Elimination',
      description: 'Treat drains and corners to eliminate bad odors and prevent future buildup.',
      icon: Leaf,
    },
    {
      step: 6,
      title: 'Final Polish',
      description: 'Polish mirrors, faucets, and fixtures to a sparkling shine. Final quality inspection.',
      icon: CheckCircle2,
    },
  ];

  const areasWeClean = [
    {
      area: 'Toilet Bowl & Seat',
      description: 'Deep cleaning inside and outside, including under the rim and base',
    },
    {
      area: 'Tiles & Grout',
      description: 'Scrubbing of wall and floor tiles, grout whitening and restoration',
    },
    {
      area: 'Sink & Countertop',
      description: 'Descaling, stain removal, and polishing of basin and surfaces',
    },
    {
      area: 'Shower & Bathtub',
      description: 'Cleaning of shower enclosure, tub, glass doors, and showerheads',
    },
    {
      area: 'Mirrors & Glass',
      description: 'Streak-free cleaning and polishing of mirrors and glass surfaces',
    },
    {
      area: 'Fixtures & Fittings',
      description: 'Descaling and polishing of taps, towel rails, and accessories',
    },
    {
      area: 'Exhaust Fan & Ventilation',
      description: 'Cleaning of exhaust fans, vents, and air circulation systems',
    },
    {
      area: 'Drains & Pipes',
      description: 'Cleaning and deodorizing of drains to prevent clogs and odors',
    },
  ];

  const benefits = [
    {
      title: 'Hygienic & Safe',
      description: 'Eliminate harmful bacteria, viruses, and mold for a healthier bathroom.',
      icon: Shield,
    },
    {
      title: 'Sparkling Clean',
      description: 'Restore tiles, fixtures, and glass to their original shine and brightness.',
      icon: Sparkles,
    },
    {
      title: 'Odor-Free',
      description: 'Complete odor elimination through deep cleaning and drain treatment.',
      icon: Leaf,
    },
    {
      title: 'Long-Lasting Results',
      description: 'Professional cleaning prevents buildup and extends the life of fixtures.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Bath className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bathroom & Toilet Deep Cleaning
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Professional Sanitization for a Spotless, Hygienic Bathroom
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-cyan-50">
                Book Bathroom Cleaning
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
            <Card className="border-l-4 border-l-cyan-600">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  The Most Important Room to Keep Clean
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Your bathroom is the most frequently used space in your home and also the most prone 
                  to bacteria, mold, and grime buildup. Regular cleaning often misses hidden areas where 
                  germs thrive - under toilet rims, in grout lines, and inside drains.
                </p>
                <p className="text-lg text-gray-600">
                  Our professional bathroom cleaning service goes beyond surface-level wiping. We use 
                  specialized equipment and hospital-grade disinfectants to ensure your bathroom is not 
                  just clean-looking, but truly hygienic and safe for your family.
                </p>
              </CardContent>
            </Card>

            {/* Warning Box */}
            <Card className="mt-6 bg-yellow-50 border-l-4 border-l-yellow-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Health Risks of Unclean Bathrooms
                    </h3>
                    <p className="text-gray-700">
                      Bathrooms can harbor E. coli, salmonella, staph bacteria, and mold. Regular deep 
                      cleaning is essential to prevent infections, respiratory issues, and allergies - 
                      especially important for children and elderly family members.
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
                Our 6-Step Bathroom Sanitization Process
              </h2>
              <p className="text-xl text-gray-600">
                Thorough cleaning for maximum hygiene
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cleaningProcess.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.step} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-100 p-3 rounded-full">
                          <span className="text-2xl font-bold text-cyan-600">{item.step}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <Icon className="h-5 w-5 text-cyan-600" />
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

      {/* Areas We Clean */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Complete Bathroom Coverage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {areasWeClean.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">
                          {item.area}
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
      <section className="py-16 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Benefits of Professional Bathroom Cleaning
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-cyan-600" />
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

      {/* Eco-Friendly Highlight */}
      <section className="py-12 bg-green-50 border-y-2 border-green-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-6">
            <Leaf className="h-16 w-16 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Non-Toxic, Family-Safe Products
              </h3>
              <p className="text-lg text-gray-600">
                We use eco-friendly, non-toxic cleaning agents that are tough on germs but safe for 
                your family. No harsh chemical fumes - just a clean, fresh-smelling bathroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequency Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How Often Should You Deep Clean?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">Weekly</div>
                  <h3 className="text-lg font-semibold mb-2">Basic Maintenance</h3>
                  <p className="text-gray-600">
                    Surface cleaning, toilet sanitization
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-cyan-600 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">Monthly</div>
                  <h3 className="text-lg font-semibold mb-2">Deep Clean</h3>
                  <p className="text-gray-600">
                    Tile scrubbing, grout cleaning, descaling
                  </p>
                  <div className="mt-3 text-sm font-semibold text-cyan-600">
                    ✓ Recommended
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">Quarterly</div>
                  <h3 className="text-lg font-semibold mb-2">Intensive Clean</h3>
                  <p className="text-gray-600">
                    Full restoration, exhaust cleaning
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get a Hygienic, Sparkling Bathroom Today
            </h2>
            <p className="text-xl mb-8 text-cyan-100">
              Professional bathroom cleaning for a healthier home
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-cyan-50">
                Schedule Bathroom Cleaning
              </Button>
              <a href="https://api.whatsapp.com/send?phone=919423679285&text=Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white/10 px-6 py-3">
                WhatsApp: +91 94236 79285
              </a>
            </div>
            <p className="mt-6 text-cyan-100">
              ⭐ 4.4 Rating | 🛡️ Hospital-Grade Sanitization | 🌿 Non-Toxic Products
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
