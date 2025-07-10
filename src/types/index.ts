export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  image?: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  subjects: string[]
  gradeLevels: string[]
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  gradeLevel: string
}

export interface HeroSection {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaHref: string
  backgroundImage: string
}

export interface AboutSection {
  title: string
  description: string
  credentials: string[]
  philosophy: string
  image: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  availability: string
} 