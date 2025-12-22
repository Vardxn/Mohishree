'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-gradient-to-r from-white via-blue-50/30 to-orange-50/20 shadow-md sticky top-0 z-50 border-b border-primary/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 sm:py-3">
          {/* Logo with Image - Responsive */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 blur-xl rounded-full"></div>
            <Image 
              src="/images/mohishree-logo.jpg" 
              alt="Mohishree Facility Services Logo" 
              width={180} 
              height={80}
              className="object-contain w-36 sm:w-40 md:w-48 h-auto relative z-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-all text-sm xl:text-base py-2 px-3 rounded-lg ${
                  isActive(item.href) 
                    ? 'text-white bg-gradient-to-r from-primary to-primary/90 shadow-md shadow-primary/20' 
                    : 'text-gray-700 hover:text-primary hover:bg-primary/5 hover:shadow-sm'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a href="tel:+919423679285" className="hidden xl:flex items-center space-x-2 text-gray-700 hover:text-primary hover:bg-primary/5 py-2 px-3 rounded-lg transition-all">
              <Phone className="w-4 h-4 flex-shrink-0 text-secondary" />
              <span className="font-medium text-sm whitespace-nowrap">+91 94236 79285</span>
            </a>
            <Link href="/booking" className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white px-4 xl:px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition-all min-h-[44px] flex items-center shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/30">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden p-3 hover:bg-primary/10 rounded-lg transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center border border-primary/20" 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary/10 bg-gradient-to-b from-blue-50/50 to-white animate-fadeInUp">
            {/* Navigation Links */}
            <div className="space-y-1 mb-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-all min-h-[48px] flex items-center ${
                    isActive(item.href) 
                      ? 'bg-gradient-to-r from-primary to-primary/90 text-white font-semibold shadow-md' 
                      : 'text-gray-700 hover:bg-primary/5 hover:text-primary active:bg-primary/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-primary/10 space-y-2">
              <a 
                href="tel:+919423679285" 
                className="flex items-center space-x-3 py-4 px-4 text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg active:bg-primary/10 min-h-[48px] transition-all"
              >
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-medium">+91 94236 79285</span>
              </a>

              <Link 
                href="/booking" 
                onClick={() => setIsMenuOpen(false)}
                className="block bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white text-center px-4 py-4 rounded-lg font-semibold min-h-[48px] flex items-center justify-center shadow-md shadow-secondary/20"
              >
                📞 Book Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
