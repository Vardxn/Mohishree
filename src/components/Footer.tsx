import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

/**
 * Footer component with company information, links, and social media
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Get a Quote', href: '/get-a-quote' },
  ];

  const services = [
    { label: 'Residential Services', href: '/services/residential' },
    { label: 'Commercial Services', href: '/services/commercial' },
    { label: 'Industrial Services', href: '/services/industrial' },
    { label: 'Environmental Services', href: '/services/environmental' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Mohishree Facility Services</h3>
            <p className="text-sm mb-4">
              Professional facility management and cleaning services in Chhatrapati Sambhajinagar.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Harishchandra Residency, Bajajnagar, Chh. Sambhajinagar, 431133
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:9423679285"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  +91 94236 79285
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:mohishreejcmk2025@gmail.com"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  mohishreejcmk2025@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {currentYear} Mohishree Facility Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
