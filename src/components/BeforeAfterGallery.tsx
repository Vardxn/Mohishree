'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface BeforeAfterImage {
  id: number;
  service: string;
  before: string;
  after: string;
  description: string;
}

const beforeAfterData: BeforeAfterImage[] = [
  {
    id: 1,
    service: 'Deep Cleaning',
    before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
    description: '3BHK Apartment - Complete transformation in 4 hours',
  },
  {
    id: 2,
    service: 'Sofa Cleaning',
    before: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=400&fit=crop',
    description: 'L-shaped sofa restored to showroom condition',
  },
  {
    id: 3,
    service: 'Bathroom Cleaning',
    before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop',
    description: 'Master bathroom - Stubborn stains and limescale removed',
  },
  {
    id: 4,
    service: 'Kitchen Cleaning',
    before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    description: 'Modular kitchen - Grease and grime completely eliminated',
  },
  {
    id: 5,
    service: 'Window Cleaning',
    before: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop',
    description: 'Floor-to-ceiling windows - Crystal clear streak-free finish',
  },
  {
    id: 6,
    service: 'Office Cleaning',
    before: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop',
    description: 'Corporate office - 5000 sq.ft workspace transformation',
  },
];

export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const current = beforeAfterData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
    setSliderPosition(50);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);
    setSliderPosition(50);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Our Results Speak for Themselves
        </h2>
        <p className="text-text-secondary">
          Drag the slider to see the transformation
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {/* Before/After Slider */}
          <div
            className="relative w-full aspect-[4/3] select-none overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After Image (Full) */}
            <img
              src={current.after}
              alt={`${current.service} - After`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={current.before}
                alt={`${current.service} - Before`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <ChevronLeft className="w-5 h-5 text-gray-600 absolute left-1" />
                <ChevronRight className="w-5 h-5 text-gray-600 absolute right-1" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
              BEFORE
            </div>
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AFTER
            </div>
          </div>

          {/* Description */}
          <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {current.service}
                </h3>
                <p className="text-gray-400">
                  {current.description}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handlePrev}
                  variant="outline"
                  size="sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={handleNext}
                  variant="outline"
                  size="sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {beforeAfterData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-primary ring-2 ring-primary/30'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <img
                    src={item.after}
                    alt={item.service}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-sm text-gray-400">
              {currentIndex + 1} / {beforeAfterData.length}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
