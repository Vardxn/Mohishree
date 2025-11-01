'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Label from '@/components/ui/Label';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Contact form component with validation
 */
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
        <Label htmlFor="phone">Phone Number</Label>
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
        <Label htmlFor="subject" required>Subject</Label>
        <Input
          {...register('subject')}
          id="subject"
          placeholder="How can we help?"
          error={errors.subject?.message}
        />
      </div>

      <div>
        <Label htmlFor="message" required>Message</Label>
        <Textarea
          {...register('message')}
          id="message"
          rows={6}
          placeholder="Tell us about your requirements..."
          error={errors.message?.message}
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-secondary/10 border border-secondary text-secondary px-4 py-3 rounded-lg">
          Thank you! We'll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          Something went wrong. Please try again.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full"
      >
        Send Message
      </Button>
    </form>
  );
}
