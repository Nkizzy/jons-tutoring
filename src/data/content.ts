import { Testimonial, NavigationItem, Service, HeroSection, AboutSection, ContactInfo } from '@/types'

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const heroSection: HeroSection = {
  title: "Transform Your Math Skills",
  subtitle: "Premium Math Tutoring",
  description: "Expert instruction tailored to your learning style. From algebra to calculus, build confidence and achieve your academic goals with personalized math tutoring.",
  ctaText: "Start Your Journey",
  ctaHref: "#contact",
  backgroundImage: "/images/notebook_narrow.jpg"
}

export const aboutSection: AboutSection = {
  title: "About Jon",
  description: "With years of experience teaching math, I dedicate time to helping students not just improve, but to truly understand and master the math. My background includes advanced degrees in mathematics and education, combined with experience working with students across all grade levels.",
  image: "/images/Jon_headshot.jpg",
  philosophy: "I believe every student has the potential to excel in mathematics. My approach focuses on tailoring the learning to each student and communicating with teachers and family to see goals and success brought to life",
  credentials: [
    "Master's Degree in Mathematics Education",
    "Certified Math Teacher (Grades 6-12)",
    "10+ Years of Tutoring Experience",
    "Specialized in Advanced Placement Courses"
  ]
}

export const services: Service[] = [
  {
    id: 'algebra',
    title: 'Algebra Fundamentals',
    description: 'Master the building blocks of algebra with clear explanations and practical examples.',
    icon: 'Calculator',
    subjects: ['Pre-Algebra', 'Algebra I', 'Algebra II'],
    gradeLevels: ['6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade']
  },
  {
    id: 'geometry',
    title: 'Geometry & Spatial Reasoning',
    description: 'Develop spatial thinking skills and master geometric concepts through hands-on learning.',
    icon: 'Square',
    subjects: ['Geometry', 'Trigonometry', 'Analytical Geometry'],
    gradeLevels: ['9th Grade', '10th Grade', '11th Grade']
  },
  {
    id: 'calculus',
    title: 'Calculus & Advanced Math',
    description: 'Navigate the complexities of calculus with step-by-step guidance and real-world applications.',
    icon: 'BarChart3',
    subjects: ['Pre-Calculus', 'Calculus AB', 'Calculus BC', 'Statistics'],
    gradeLevels: ['11th Grade', '12th Grade', 'College']
  },
  {
    id: 'test-prep',
    title: 'Test Preparation',
    description: 'Strategic preparation for standardized tests with proven techniques and practice strategies.',
    icon: 'Target',
    subjects: ['SAT Math', 'ACT Math', 'AP Calculus', 'AP Statistics'],
    gradeLevels: ['11th Grade', '12th Grade', 'College']
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Parent of 10th Grade Student',
    content: "Jon's tutoring completely transformed my daughter's confidence in math. She went from struggling with algebra to excelling in her AP Calculus class. His patience and clear explanations made all the difference.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'High School Math Teacher',
    content: "As a fellow educator, I've seen the impact of Jon's tutoring approach. His students consistently show improved problem-solving skills and mathematical reasoning. He has a gift for making complex concepts accessible.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'College Student',
    content: "Jon helped me prepare for my SAT Math section and I improved my score by 150 points! His strategies were practical and his explanations were crystal clear. I'm now confident in my math abilities.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Parent of 8th Grade Student',
    content: "My son was struggling with pre-algebra concepts, but after just a few sessions with Jon, everything clicked. His approach of building from the fundamentals really works. Highly recommend!",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }
]

export const contactInfo: ContactInfo = {
  email: 'jon@jonstutoring.com',
  phone: '(555) 123-4567',
  location: 'The greater Rochester area',
  availability: 'Monday - Friday: 3:00 PM - 8:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Available for online sessions'
} 