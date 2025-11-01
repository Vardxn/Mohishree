import { Metadata } from 'next';
import QuoteRequestForm from '@/components/QuoteRequestForm';

export const metadata: Metadata = {
  title: 'Get a Free Quote - Mohishree Facility Services',
  description: 'Request a free site assessment and customized quote for cleaning and facility management services in Chhatrapati Sambhajinagar.',
};

export default function GetQuotePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Get a Free Site Assessment
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Tell us about your requirements and we'll provide a customized solution
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <QuoteRequestForm />
        </div>
      </section>
    </div>
  );
}
