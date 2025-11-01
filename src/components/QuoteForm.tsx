'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Label from '@/components/ui/Label';
import Select from '@/components/ui/Select';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  serviceType: z.string().min(1, 'Please select a service'),
  serviceDetails: z.string().min(10, 'Please provide more details'),
  location: z.string().min(3, 'Location is required'),
  areaSize: z.string().optional(),
  frequency: z.string().optional(),
  startDate: z.string().optional(),
  budget: z.string().optional(),
  additionalNotes: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

/**
 * Quote request form component with validation
 */
export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    'Residential Services',
    'Commercial Services',
    'Industrial Services',
    'Environmental Services',
    'Housekeeping',
    'Security Services',
    'Facility Management',
    'Pest Control',
    'Landscaping & Gardening',
    'Waste Management',
    'Other',
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" required>
            Full Name
          </Label>
          <Input
            {...register('name')}
            id="name"
            placeholder="John Doe"
            error={errors.name?.message}
          />
        </div>

        <div>
          <Label htmlFor="email" required>
            Email Address
          </Label>
          <Input
            {...register('email')}
            type="email"
            id="email"
            placeholder="john@example.com"
            error={errors.email?.message}
          />
        </div>

        <div>
          <Label htmlFor="phone" required>
            Phone Number
          </Label>
          <Input
            {...register('phone')}
            type="tel"
            id="phone"
            placeholder="+91 9876543210"
            error={errors.phone?.message}
          />
        </div>

        <div>
          <Label htmlFor="company">Company Name</Label>
          <Input
            {...register('company')}
            id="company"
            placeholder="Your Company"
            error={errors.company?.message}
          />
        </div>

        <div>
          <Label htmlFor="serviceType" required>
            Service Type
          </Label>
          <Select
            {...register('serviceType')}
            id="serviceType"
            error={errors.serviceType?.message}
          >
            <option value="">Select a service</option>
            {serviceTypes.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <Label htmlFor="location" required>
            Location
          </Label>
          <Input
            {...register('location')}
            id="location"
            placeholder="City, Area"
            error={errors.location?.message}
          />
        </div>

        <div>
          <Label htmlFor="areaSize">Area Size (sq. ft.)</Label>
          <Input
            {...register('areaSize')}
            id="areaSize"
            placeholder="e.g., 5000 sq. ft."
            error={errors.areaSize?.message}
          />
        </div>

        <div>
          <Label htmlFor="frequency">Service Frequency</Label>
          <Select
            {...register('frequency')}
            id="frequency"
            error={errors.frequency?.message}
          >
            <option value="">Select frequency</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="one-time">One-time</option>
          </Select>
        </div>

        <div>
          <Label htmlFor="startDate">Preferred Start Date</Label>
          <Input
            {...register('startDate')}
            type="date"
            id="startDate"
            error={errors.startDate?.message}
          />
        </div>

        <div>
          <Label htmlFor="budget">Budget Range</Label>
          <Select
            {...register('budget')}
            id="budget"
            error={errors.budget?.message}
          >
            <option value="">Select budget range</option>
            <option value="below-50k">Below ₹50,000</option>
            <option value="50k-1l">₹50,000 - ₹1,00,000</option>
            <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
            <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
            <option value="above-5l">Above ₹5,00,000</option>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="serviceDetails" required>
          Service Details
        </Label>
        <Textarea
          {...register('serviceDetails')}
          id="serviceDetails"
          rows={4}
          placeholder="Please describe your requirements in detail..."
          error={errors.serviceDetails?.message}
        />
      </div>

      <div>
        <Label htmlFor="additionalNotes">Additional Notes</Label>
        <Textarea
          {...register('additionalNotes')}
          id="additionalNotes"
          rows={3}
          placeholder="Any other information you'd like to share..."
          error={errors.additionalNotes?.message}
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-secondary/10 border border-secondary text-secondary px-4 py-3 rounded-lg">
          Quote request submitted successfully! We'll contact you within 24 hours.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        isLoading={isSubmitting}
        className="w-full"
      >
        Request Quote
      </Button>
    </form>
  );
}
