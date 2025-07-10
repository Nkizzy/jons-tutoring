import { Header } from '@/components/layout/header'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ServicesSection } from '@/components/sections/services-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/layout/footer'

export default function HomePage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col pt-20">
        <Header />
        
        <main className="flex-1">
          <section id="home">
            <HeroSection />
          </section>
          
          <section id="about" className="scroll-mt-16">
            <AboutSection />
          </section>
          
          <section id="services" className="scroll-mt-16">
            <ServicesSection />
          </section>
          
          <section id="testimonials" className="scroll-mt-16">
            <TestimonialsSection />
          </section>
          
          <section id="contact" className="scroll-mt-16">
            <ContactSection />
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  )
} 