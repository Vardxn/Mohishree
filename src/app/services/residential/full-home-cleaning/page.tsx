import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  Home, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Shield,
  Leaf,
  Users,
  Calendar
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Full Home Cleaning Services in Aurangabad | Mohishree Facility Services',
  description: 'Professional full home cleaning services in Aurangabad. Deep cleaning of all rooms, kitchen, bathrooms, and more. Eco-friendly products, trained staff.',
  keywords: 'full home cleaning, house cleaning Aurangabad, deep cleaning services, professional home cleaning, residential cleaning',
};

export default function FullHomeCleaningPage() {
  const cleaningProcess = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Walk-through of your home to understand specific requirements and areas needing special attention.',
      icon: Home,
    },
    {
      step: 2,
      title: 'Room-by-Room Cleaning',
      description: 'Systematic cleaning of all rooms including dusting, vacuuming, mopping, and organizing.',
      icon: Sparkles,
    },
    {
      step: 3,
      title: 'Kitchen Deep Clean',
      description: 'Thorough cleaning of countertops, appliances, cabinets, sink, and floor. Degreasing and sanitization.',
      icon: CheckCircle2,
    },
    {
      step: 4,
      title: 'Bathroom Sanitization',
      description: 'Complete cleaning and disinfection of toilets, sinks, showers, tiles, and fixtures.',
      icon: Shield,
    },
    {
      step: 5,
      title: 'Windows & Fixtures',
      description: 'Cleaning of windows, door frames, light fixtures, fans, and other hard-to-reach areas.',
      icon: Sparkles,
    },
    {
      step: 6,
      title: 'Final Inspection',
      description: 'Quality check of all areas and touch-ups as needed to ensure your complete satisfaction.',
      icon: CheckCircle2,
    },
  ];

  const benefits = [
    {
      title: 'Comprehensive Coverage',
      description: 'Every room, every corner - nothing is missed in our thorough cleaning process.',
      icon: Home,
    },
    {
      title: 'Time-Saving Convenience',
      description: 'Get your entire home professionally cleaned in hours, not days of DIY effort.',
      icon: Clock,
    },
    {
      title: 'Healthier Living Space',
      description: 'Eliminate dust, allergens, and bacteria for a cleaner, healthier home environment.',
      icon: Shield,
    },
    {
      title: 'Trained Professionals',
      description: 'Experienced, background-verified cleaning staff with proper training and equipment.',
      icon: Users,
    },
  ];

  const areasWeClean = [
    'Living Room & Bedrooms',
    'Kitchen & Dining Area',
    'Bathrooms & Toilets',
    'Balconies & Windows',
    'Storage Areas',
    'Entrance & Corridors',
    'Ceiling Fans & Light Fixtures',
    'Door Frames & Windows',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Home className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Full Home Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform Your Entire Home with Professional Deep Cleaning
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
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
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Complete Home Cleaning Solution
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  A clean home is a happy home. Our Full Home Cleaning service provides comprehensive, 
                  room-by-room deep cleaning that covers every area of your residence. From living spaces 
                  to kitchens, bathrooms to balconies - we handle it all.
                </p>
                <p className="text-lg text-gray-600">
                  Whether you're preparing for a special occasion, moving in/out, or simply want to enjoy 
                  a spotless home, our trained professionals deliver thorough cleaning using eco-friendly 
                  products and modern equipment.
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
                Our 6-Step Full Home Cleaning Process
              </h2>
              <p className="text-xl text-gray-600">
                Systematic approach ensuring no area is overlooked
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cleaningProcess.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.step} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <span className="text-2xl font-bold text-blue-600">{item.step}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <Icon className="h-5 w-5 text-blue-600" />
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Complete Coverage - All Areas Included
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {areasWeClean.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{area}</span>
                </div>
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
              Why Choose Our Full Home Cleaning?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-blue-600" />
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
                100% Eco-Friendly Cleaning Products
              </h3>
              <p className="text-lg text-gray-600">
                Safe for your family, pets, and the environment. We use non-toxic, biodegradable 
                cleaning solutions that are tough on dirt but gentle on surfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Perfect For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Pre/Post Events</h3>
                  <p className="text-gray-600">
                    Prepare your home for guests or clean up after celebrations
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Home className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Moving In/Out</h3>
                  <p className="text-gray-600">
                    Fresh start in new home or leave property spotless
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Seasonal Deep Clean</h3>
                  <p className="text-gray-600">
                    Refresh your home quarterly or bi-annually
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for a Spotless Home?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Book your Full Home Cleaning service today and experience the Mohishree difference
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Schedule Free Consultation
              </Button>
              <a href="https://api.whatsapp.com/send?phone=919423679285&text=Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white/10 px-6 py-3">
                WhatsApp: +91 94236 79285
              </a>
            </div>
            <p className="mt-6 text-blue-100">
              ⭐ 4.4 Rating | 🕐 3-4 Hour Response Time | 🌿 Eco-Friendly Products
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
