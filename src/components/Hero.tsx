'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

/**
 * Hero component for the homepage
 * Features call-to-action and key benefits
 */
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fadeInUp">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
              Professional Facility Management Solutions
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Transform your workplace with our comprehensive facility services. 
              Trusted by over 500+ businesses across India.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
                <span className="text-lg">15+ Years of Industry Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
                <span className="text-lg">2000+ Trained & Verified Staff</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
                <span className="text-lg">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
                <span className="text-lg">ISO Certified Services</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors font-semibold text-lg"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden lg:block animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Professional Facility Management"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-primary-600 mb-1">500+</div>
                <div className="text-sm font-semibold">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
