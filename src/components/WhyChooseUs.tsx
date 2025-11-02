import { Award, Users, Clock, Shield, TrendingUp, UserCheck } from 'lucide-react';

/**
 * Why Choose Us section component
 * Highlights company strengths and benefits
 */
export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Award className="w-10 h-10" />,
      title: 'ISO Certified',
      description: 'Quality management systems certified to international standards',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Trained Staff',
      description: 'Professionally trained and background-verified personnel',
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and emergency response',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Reliable & Secure',
      description: 'Comprehensive insurance coverage and safety protocols',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Cost Effective',
      description: 'Competitive pricing with transparent billing and no hidden costs',
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: 'Trusted Partner',
      description: 'Long-term partnerships with 500+ satisfied clients',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
            Why Choose Mohishree?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for comprehensive facility management solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
