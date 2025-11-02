// Type definitions for Mohishree Facility Services

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  imageUrl?: string;
  createdAt?: Date;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  shortDesc: string;
  longDesc?: string;
  icon: string;
  category?: string;
  imageUrl?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category: string;
  imageUrl?: string;
  author?: string;
  publishedAt?: Date;
  readTime?: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: 'customer' | 'admin' | 'staff';
  createdAt?: Date;
}

export interface Booking {
  id: number;
  userId: number;
  serviceId: number;
  date: Date;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  address: string;
  notes?: string;
  totalAmount?: number;
  createdAt?: Date;
}

export interface Quote {
  id: number;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message?: string;
  status: 'pending' | 'sent' | 'accepted' | 'rejected';
  createdAt?: Date;
}
