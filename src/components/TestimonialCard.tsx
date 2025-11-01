import { FaStar } from 'react-icons/fa';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

/**
 * Testimonial card component for displaying client reviews
 * @param {TestimonialCardProps} props - Component props
 */
export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-xl" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-6 italic leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 border-t pt-6">
        <img
          src={testimonial.imageUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.position}</div>
          <div className="text-sm text-primary-600">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}
