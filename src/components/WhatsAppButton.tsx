'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  // Expose number & default message via env vars (set in Vercel dashboard)
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '91XXXXXXXXXX';
  const defaultMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Hi! I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Decorative pulse */}
        <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-60" aria-hidden="true" />
      </a>
      {/* Tooltip (desktop) */}
      <div className="hidden sm:block absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow">
          Chat on WhatsApp
        </div>
      </div>
    </div>
  );
}
