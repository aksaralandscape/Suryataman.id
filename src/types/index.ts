export interface Project {
  id: string;
  title: string;
  category: string;
  filterCategory: 'Kolam Natural' | 'Rock Art' | 'Saung Gazebo' | 'Taman Minimalis' | 'Vertical Garden' | 'Zen Garden';
  image: string;
  gallery?: string[];
  location: string;
  area: string;
  duration: string;
  description: string;
  plantsUsed: string[];
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  scope: string[];
  startingPrice: string;
  image: string;
  images: string[];
  isVerticalImage?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  details: string;
  iconName: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  rating: number;
  location: string;
  projectType: string;
}
