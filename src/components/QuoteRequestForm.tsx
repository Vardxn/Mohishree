'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Home, Building2, Factory, Leaf, ChevronRight, ChevronLeft } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Label from '@/components/ui/Label';

const quoteSchema = z.object({
  serviceCategory: z.enum(['Residential', 'Commercial', 'Industrial', 'Environmental']),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
  serviceAddress: z.string().min(10, 'Please provide complete address'),
  details: z.any(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteRequestForm() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const categories = [
    {
      value: 'Residential',
      title: 'Residential & Home Deep Cleaning',
      icon: <Home className="w-16 h-16" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      value: 'Commercial',
      title: 'Commercial & Institutional',
      icon: <Building2 className="w-16 h-16" />,
      color: 'from-green-500 to-green-600',
    },
    {
      value: 'Industrial',
      title: 'Industrial & Technical',
      icon: <Factory className="w-16 h-16" />,
      color: 'from-orange-500 to-orange-600',
    },
    {
      value: 'Environmental',
      title: 'Environmental & Waste Management',
      icon: <Leaf className="w-16 h-16" />,
      color: 'from-teal-500 to-teal-600',
    },
  ];

  const residentialServices = [
    'Complete Home Deep Cleaning',
    'Sofa & Upholstery Cleaning',
    'Carpet Cleaning',
    'Water Tank Cleaning',
    'Garden Cleaning',
    'Bathroom Deep Cleaning',
    'Kitchen Deep Cleaning',
    'Window Cleaning',
  ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setValue('serviceCategory', category as any);
    setStep(2);
  };

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
        throw new Error('Failed to submit');
      }

      setSubmitStatus('success');
      setStep(5);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= s
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {s}
              </div>
              {s < 4 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    step > s ? 'bg-primary' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-text-secondary">
          <span>Select Service</span>
          <span>Details</span>
          <span>Contact Info</span>
          <span>Review</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-2 font-heading">
                Select Your Service Category
              </h2>
              <p className="text-text-secondary">Choose the type of service you need</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => handleCategorySelect(category.value)}
                  className={`p-8 rounded-xl border-2 border-border hover:border-primary transition-all text-left group hover:shadow-card-hover bg-gradient-to-br ${category.color} text-white`}
                >
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Service Details */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-2 font-heading">
                Service Details
              </h2>
              <p className="text-text-secondary">Tell us about your specific needs</p>
            </div>

            {selectedCategory === 'Residential' && (
              <div>
                <Label>Select Services (Check all that apply)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {residentialServices.map((service) => (
                    <label key={service} className="flex items-center gap-2 p-3 border border-border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        value={service}
                        className="w-4 h-4 text-primary"
                        {...register('details.services')}
                      />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-4">
                  <Label>Special Requests (Optional)</Label>
                  <Textarea
                    {...register('details.specialRequests')}
                    placeholder="Any specific requirements or instructions..."
                    rows={3}
                  />
                </div>
              </div>
            )}

            {selectedCategory === 'Commercial' && (
              <div className="space-y-4">
                <div>
                  <Label required>Type of Establishment</Label>
                  <select
                    {...register('details.establishmentType')}
                    className="w-full px-4 py-3 border border-border rounded-lg"
                  >
                    <option value="">Select type</option>
                    <option value="Office">Office</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Hospital">Hospital</option>
                    <option value="School">School/Educational</option>
                    <option value="Retail">Retail/Shopping</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <Label required>Approximate Area (sq. ft.)</Label>
                  <Input
                    {...register('details.area')}
                    type="number"
                    placeholder="e.g., 5000"
                  />
                </div>
                <div>
                  <Label>Additional Requirements</Label>
                  <Textarea
                    {...register('details.requirements')}
                    placeholder="Describe your facility management needs..."
                    rows={4}
                  />
                </div>
              </div>
            )}

            {selectedCategory === 'Industrial' && (
              <div className="space-y-4">
                <div>
                  <Label required>Type of Industry</Label>
                  <Input
                    {...register('details.industryType')}
                    placeholder="e.g., Pharmaceutical, Dairy, Manufacturing"
                  />
                </div>
                <div>
                  <Label required>Area Size (sq. ft.)</Label>
                  <Input
                    {...register('details.areaSize')}
                    type="number"
                    placeholder="e.g., 10000"
                  />
                </div>
                <div>
                  <Label required>Specific Requirements</Label>
                  <Textarea
                    {...register('details.specificRequirements')}
                    placeholder="e.g., Machine Cleaning, High-Level Structure Cleaning, Chemical Tank Cleaning..."
                    rows={5}
                  />
                </div>
              </div>
            )}

            {selectedCategory === 'Environmental' && (
              <div className="space-y-4">
                <Label>Select Services (Check all that apply)</Label>
                <div className="space-y-3">
                  {['Water System Hygiene (Well, Lake)', 'Waste Treatment', 'Surface Restoration (Pressure Wash)', 'Floor Polishing'].map((service) => (
                    <label key={service} className="flex items-center gap-2 p-3 border border-border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        value={service}
                        className="w-4 h-4 text-primary"
                        {...register('details.environmentalServices')}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <Label>Additional Details</Label>
                  <Textarea
                    {...register('details.additionalDetails')}
                    placeholder="Provide more information about your requirements..."
                    rows={3}
                  />
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
              <Button
                type="button"
                variant="primary"
                onClick={() => setStep(3)}
                className="flex-1 flex items-center justify-center gap-2"
              >
                Continue <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Information */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-2 font-heading">
                Your Contact Information
              </h2>
              <p className="text-text-secondary">How can we reach you?</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name" required>Full Name</Label>
                <Input
                  {...register('name')}
                  id="name"
                  placeholder="John Doe"
                  error={errors.name?.message}
                />
              </div>

              <div>
                <Label htmlFor="phone" required>Phone Number</Label>
                <Input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  placeholder="+91 9876543210"
                  error={errors.phone?.message}
                />
              </div>

              <div>
                <Label htmlFor="email" required>Email Address</Label>
                <Input
                  {...register('email')}
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  error={errors.email?.message}
                />
              </div>

              <div>
                <Label htmlFor="serviceAddress" required>Service Address</Label>
                <Textarea
                  {...register('serviceAddress')}
                  id="serviceAddress"
                  placeholder="Complete address where service is required..."
                  rows={3}
                  error={errors.serviceAddress?.message}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(2)}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
              <Button
                type="button"
                variant="primary"
                onClick={() => setStep(4)}
                className="flex-1 flex items-center justify-center gap-2"
              >
                Continue <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Review and Submit */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-2 font-heading">
                Review Your Request
              </h2>
              <p className="text-text-secondary">Please verify all information before submitting</p>
            </div>

            <div className="bg-background p-6 rounded-lg space-y-4">
              <div>
                <p className="text-sm text-text-secondary">Service Category</p>
                <p className="font-semibold text-lg">{selectedCategory}</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-sm text-text-secondary">Contact Person</p>
                <p className="font-semibold">{watch('name')}</p>
                <p className="text-text-secondary">{watch('email')}</p>
                <p className="text-text-secondary">{watch('phone')}</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-sm text-text-secondary">Service Address</p>
                <p className="text-text-primary">{watch('serviceAddress')}</p>
              </div>
            </div>

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                Failed to submit request. Please try again or contact us directly.
              </div>
            )}

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(3)}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
              <Button
                type="submit"
                variant="accent"
                isLoading={isSubmitting}
                className="flex-1"
              >
                Submit Request
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Success */}
        {step === 5 && submitStatus === 'success' && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-heading">
              Request Submitted Successfully!
            </h2>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              Thank you for contacting Mohishree. We'll get back to you within 24 hours with a detailed quote.
            </p>
            <Button
              type="button"
              variant="primary"
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
