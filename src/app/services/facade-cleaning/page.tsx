import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { 
  Building2,
  CheckCircle2, 
  MessageCircle,
  Mail
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Professional Facade Cleaning in Aurangabad | Mohishree',
  description: 'Expert facade and exterior building cleaning services in Aurangabad.',
  keywords: 'facade cleaning, building cleaning, exterior cleaning, Aurangabad',
};

export default function FacadeCleaningPage() {
  const benefits = [
    {
      title: 'Enhanced Look',
      description: 'Restore your building\'s original beauty.',
      icon: CheckCircle2,
    },
    {
      title: 'Material Protection',
      description: 'Extends the life of building surfaces.',
      icon: Building2,
    },
    {
      title: 'Professional Image',
      description: 'Clean buildings make great impressions.',
      icon: Building2,
    },
    {
      title: 'Eco-Friendly',
      description: 'Safe for nature and materials.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Facade Cleaning
            </h1>
            <p className="text-xl text-blue-100">
              Professional exterior building cleaning
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact - TOP */}
      <section className="py-12 bg-blue-50 border-b-2 border-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Get Your Free Quote</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="https://api.whatsapp.com/send?phone=919423679285&text=Hi%20Mohishree,%20I%20am%20interested%20in%20Facade%20Cleaning.%20Can%20you%20help?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-bold transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              
              <a 
                href="mailto:info@mohishree.com?subject=Facade%20Cleaning%20Inquiry"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-bold transition-all"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>
            </div>

            <a href="tel:+919423679285" className="block mt-4 text-lg font-bold text-blue-600 hover:text-blue-700">
              📞 +91 94236 79285
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Mohishree */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Mohishree?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-lg">{benefit.title}</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="space-y-4">
              {[
                { num: '1', title: 'Assessment', desc: 'Evaluate your building' },
                { num: '2', title: 'Planning', desc: 'Design the cleaning approach' },
                { num: '3', title: 'Preparation', desc: 'Setup equipment & safety' },
                { num: '4', title: 'Cleaning', desc: 'Professional facade wash' },
                { num: '5', title: 'Protection', desc: 'Apply protective coating' },
                { num: '6', title: 'Final Check', desc: 'Quality inspection' },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 items-start p-3 bg-white rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* We Clean */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">We Clean</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Corporate buildings',
                'Shopping malls',
                'Hotels & resorts',
                'Apartment complexes',
                'Industrial facilities',
                'Government buildings',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Building?</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <a 
                href="https://api.whatsapp.com/send?phone=919423679285&text=Hi%20Mohishree,%20I%20am%20interested%20in%20Facade%20Cleaning.%20Can%20you%20help?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Chat WhatsApp
              </a>
              
              <a 
                href="mailto:info@mohishree.com?subject=Facade%20Cleaning%20Inquiry"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-all"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>

            <a href="tel:+919423679285" className="text-2xl font-bold hover:text-blue-100 transition">
              📞 +91 94236 79285
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}