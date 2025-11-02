import Link from 'next/link';
import { Sparkles, Shield, Building2, Coffee, Leaf, Bug, Wrench, Recycle, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: {
    slug: string;
    title: string;
    shortDesc: string;
    icon: string;
  };
}

/**
 * Service card component for displaying service information
 * @param {ServiceCardProps} props - Component props
 */
export default function ServiceCard({ service }: ServiceCardProps) {
  const iconMap: { [key: string]: JSX.Element } = {
    FaBroom: <Sparkles className="w-10 h-10" />,
    FaShieldAlt: <Shield className="w-10 h-10" />,
    FaBuilding: <Building2 className="w-10 h-10" />,
    FaCoffee: <Coffee className="w-10 h-10" />,
    FaLeaf: <Leaf className="w-10 h-10" />,
    FaBug: <Bug className="w-10 h-10" />,
    FaTools: <Wrench className="w-10 h-10" />,
    FaRecycle: <Recycle className="w-10 h-10" />,
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="p-8">
        {/* Icon */}
        <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
          {iconMap[service.icon] || <Building2 className="w-10 h-10" />}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 line-clamp-3">
          {service.shortDesc}
        </p>

        {/* Link */}
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-primary-600 to-primary-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </div>
  );
}
