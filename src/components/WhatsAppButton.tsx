'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '919423679285';
  const message = 'Hi! I would like to inquire about Mohishree Facility Services.';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group touch-manipulation"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div className="relative">
        {/* Main Button - Larger on mobile for better touch target */}
        <div className="flex items-center justify-center w-16 h-16 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95">
          <MessageCircle className="w-8 h-8 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
        </div>
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" aria-hidden="true" />
      </div>
      
      {/* Tooltip - Hidden on mobile, shown on desktop */}
      <div className="hidden sm:block absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Chat on WhatsApp
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
        </div>
      </div>
    </a>
  );
}
