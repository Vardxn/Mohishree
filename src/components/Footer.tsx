import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, CreditCard } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

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
    { label: 'Contact', href: '/contact' },
  ];

  const services = [
    { label: 'Residential Services', href: '/services/residential' },
    { label: 'Commercial Services', href: '/services/commercial' },
    { label: 'Industrial Services', href: '/services/industrial' },
    { label: 'Environmental Services', href: '/services/environmental' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info with Logo */}
          <div className="text-center sm:text-left">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 justify-center sm:justify-start">
              <Image 
                src="/images/mohishree-logo.jpg" 
                alt="Mohishree Logo" 
                width={40} 
                height={40}
                className="object-contain w-10 h-10 sm:w-12 sm:h-12"
              />
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg leading-tight">Mohishree</h3>
                <p className="text-blue-300 text-xs sm:text-sm font-semibold leading-tight">Facility Services</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm mb-4">
              {CONTACT.serviceAreaHeadline}
            </p>
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              <a
                href={CONTACT.links.facebook}
                target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href={CONTACT.links.instagram}
                target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href={CONTACT.links.justdial}
                target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
                aria-label="JustDial"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin className="text-primary w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-left">
                  {CONTACT.address}
                </span>
              </li>
              <li className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="text-primary w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <div className="flex flex-col text-left">
                  <a href={`tel:${CONTACT.phone.primaryRaw}`} className="text-xs sm:text-sm hover:text-primary transition-colors">
                    {CONTACT.phone.primaryDisplay}
                  </a>
                  <a href={`tel:${CONTACT.phone.secondaryRaw}`} className="text-xs sm:text-sm hover:text-primary transition-colors">
                    {CONTACT.phone.secondaryDisplay}
                  </a>
                  <a href={CONTACT.links.whatsappPrimary} target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-xs text-secondary hover:text-primary">
                    WhatsApp: {CONTACT.phone.primaryDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="text-primary w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-xs sm:text-sm hover:text-primary transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start space-x-3 justify-center sm:justify-start">
                <CreditCard className="text-primary w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span className="text-[10px] sm:text-xs text-left leading-relaxed">
                  <strong>Bank (IFSC):</strong> {CONTACT.bank.ifsc}<br />
                  <strong>A/c No.:</strong> {CONTACT.bank.accountNumber}<br />
                  <em className="opacity-70">{CONTACT.bank.note}</em>
                </span>
              </li>
              <li className="flex items-start space-x-3 justify-center sm:justify-start">
                <span className="text-[10px] sm:text-xs text-left">
                  <strong>Areas:</strong> {CONTACT.serviceLocations.slice(0,8).join(', ')}<span className="hidden md:inline">, {CONTACT.serviceLocations.slice(8).join(', ')}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm">
            &copy; {currentYear} Mohishree Facility Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
