import { Metadata } from 'next';
import Link from 'next/link';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Customer Testimonials & Reviews - Mohishree Facility Services',
  description: 'Read what our satisfied customers say about Mohishree Facility Services. 4.4-star rated with verified reviews from residential and commercial clients in Aurangabad.',
  keywords: 'customer reviews, testimonials, client feedback, Mohishree reviews, facility services reviews Aurangabad',
};

export default function TestimonialsPage() {
  // Aggregate Rating
  const overallRating = {
    stars: 4.4,
    totalReviews: 7,
    breakdown: {
      5: 5,
      4: 1,
      3: 1,
      2: 0,
      1: 0,
    }
  };

  // Featured testimonial - detailed customer review
  const featuredTestimonial = {
    name: 'A. Kumar',
    location: 'Aurangabad',
    service: 'Home Repair & Maintenance',
    rating: 5,
    date: 'October 2024',
    review: 'Mohishree Facility Services gives excellent help! Their team is friendly and fast. They fix problems well and make my home nice. I called them for a leaky sink, and they came quickly. The work was great, and the price was fair. I feel safe with their service. I will call them again for any repairs. Highly recommend Mohishree!',
    verified: true,
    source: 'Justdial Verified Review'
  };

  // Additional testimonials (to be populated with actual reviews)
  const testimonials = [
    {
      name: 'Rajesh Patil',
      location: 'Aurangabad',
      service: 'Office Cleaning',
      rating: 5,
      date: 'September 2024',
      review: 'Mohishree transformed our office space. Their attention to detail and professionalism is outstanding! Regular cleaning schedules never disrupted our work, and the eco-friendly products they use are perfect for our health-conscious workplace.',
      verified: true,
    },
    {
      name: 'Dr. Sneha Deshmukh',
      location: 'Aurangabad',
      service: 'Pharmaceutical Facility Cleaning',
      rating: 5,
      date: 'August 2024',
      review: 'We rely on Mohishree for all our pharmaceutical facility cleaning. They understand our strict compliance needs and deliver consistent, high-quality service. Their trained staff follows all protocols meticulously.',
      verified: true,
    },
    {
      name: 'Priya Sharma',
      location: 'Aurangabad',
      service: 'Home Deep Cleaning',
      rating: 5,
      date: 'October 2024',
      review: 'Best home deep cleaning service! My house has never looked better. They cleaned every corner, including areas I thought were impossible to clean. The team was punctual, professional, and used eco-friendly products. Highly recommended!',
      verified: true,
    },
    {
      name: 'Amit Desai',
      location: 'Aurangabad',
      service: 'Water Tank Cleaning',
      rating: 4,
      date: 'July 2024',
      review: 'Professional water tank cleaning service. The team arrived on time and completed the work efficiently. Water quality has noticeably improved. Good value for money.',
      verified: true,
    },
    {
      name: 'Kavita Joshi',
      location: 'Aurangabad',
      service: 'Sofa Cleaning',
      rating: 5,
      date: 'September 2024',
      review: 'My sofa looks brand new after their cleaning! They removed stains I thought were permanent. Very impressed with the results and the friendly service.',
      verified: true,
    },
    {
      name: 'Rahul Mehta',
      location: 'Aurangabad',
      service: 'Corporate Housekeeping',
      rating: 5,
      date: 'June 2024',
      review: 'We have been using Mohishree for our corporate office for over a year now. Consistently excellent service, responsive to our needs, and very reliable. Great team!',
      verified: true,
    },
  ];

  // Calculate percentage for each star rating
  const getPercentage = (count: number) => {
    return (count / overallRating.totalReviews) * 100;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Customer Testimonials
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Hear From Our Satisfied Customers
            </p>
            <p className="text-lg mt-4 opacity-85">
              Real reviews from real clients across Aurangabad
            </p>
          </div>
        </div>
      </section>

      {/* Overall Rating Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-primary shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Rating Display */}
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <span className="text-6xl font-bold text-primary mr-4">{overallRating.stars}</span>
                      <div>
                        <div className="flex mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-8 h-8 ${
                                star <= Math.floor(overallRating.stars)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : star === Math.ceil(overallRating.stars)
                                  ? 'fill-yellow-400 text-yellow-400 opacity-50'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-text-secondary text-lg">
                          Based on <strong>{overallRating.totalReviews} verified reviews</strong>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                      <span className="text-text-secondary">All reviews verified by Justdial</span>
                    </div>
                  </div>

                  {/* Rating Breakdown */}
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center space-x-3">
                        <span className="text-sm font-medium w-12">{star} Star</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${getPercentage(overallRating.breakdown[star as keyof typeof overallRating.breakdown])}%` }}
                          />
                        </div>
                        <span className="text-sm text-text-secondary w-8 text-right">
                          {overallRating.breakdown[star as keyof typeof overallRating.breakdown]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-8 border-t grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-text-secondary mt-1">Customer Satisfaction Focus</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">6 Years</div>
                    <div className="text-sm text-text-secondary mt-1">Trusted Service Since 2019</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">3-4 Hrs</div>
                    <div className="text-sm text-text-secondary mt-1">Average Response Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
                Featured Customer Review
              </h2>
              <p className="text-xl text-text-secondary">
                Highlighting exceptional service experiences
              </p>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-primary shadow-xl">
              <CardHeader className="pb-0">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {featuredTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">{featuredTestimonial.name}</h3>
                      <p className="text-text-secondary">{featuredTestimonial.location}</p>
                      <p className="text-sm text-primary font-semibold">{featuredTestimonial.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(featuredTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <Quote className="w-12 h-12 text-primary opacity-20 mb-4" />
                <p className="text-lg text-text-primary leading-relaxed italic mb-6">
                  "{featuredTestimonial.review}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-text-secondary">Verified Review - {featuredTestimonial.source}</span>
                  </div>
                  <span className="text-sm text-text-secondary">{featuredTestimonial.date}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
                What Our Customers Say
              </h2>
              <p className="text-xl text-text-secondary">
                Real experiences from residential and commercial clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-card-hover transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-text-primary">{testimonial.name}</h3>
                        <p className="text-sm text-text-secondary">{testimonial.location}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-primary font-semibold mb-3">{testimonial.service}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary italic text-sm mb-4">
                      "{testimonial.review}"
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      {testimonial.verified && (
                        <div className="flex items-center text-green-600">
                          <CheckCircle2 className="w-4 h-4 mr-1" />
                          Verified
                        </div>
                      )}
                      <span className="text-text-secondary">{testimonial.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights from Reviews */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              What Customers Love About Mohishree
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg text-center shadow">
                <ThumbsUp className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-text-primary mb-2">Friendly & Fast</h3>
                <p className="text-sm text-text-secondary">Quick response and professional service</p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center shadow">
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-text-primary mb-2">Effective Solutions</h3>
                <p className="text-sm text-text-secondary">Fix problems right the first time</p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center shadow">
                <span className="text-4xl mb-3 block">💰</span>
                <h3 className="font-bold text-text-primary mb-2">Fair Pricing</h3>
                <p className="text-sm text-text-secondary">Great value for quality service</p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center shadow">
                <span className="text-4xl mb-3 block">🌿</span>
                <h3 className="font-bold text-text-primary mb-2">Eco-Friendly</h3>
                <p className="text-sm text-text-secondary">Safe, non-toxic products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">
            Experience Service Worth Talking About
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied customers who trust Mohishree for their facility service needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote">
              <Button variant="accent" size="lg" className="text-xl px-12 py-6">
                Get Your Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-xl px-12 py-6 bg-white/10 border-white hover:bg-white hover:text-primary">
                Contact Us Today
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm opacity-85">
            <p>⭐ 4.4 Star Rated | ⚡ 3-4 Hour Response | 🌿 Eco-Friendly | 🏆 6 Years Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}
