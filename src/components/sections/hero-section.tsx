'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { heroSection } from '@/data/content'
import { scrollToSection } from '@/lib/utils'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  // Reduced parallax effect for content
  const contentY = useTransform(scrollY, [0, 400], [0, -100])
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0.7])
  
  // Separate parallax effects for title and description - reduced
  const titleY = useTransform(scrollY, [0, 500], [0, -150])
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0.5])
  
  const descriptionY = useTransform(scrollY, [0, 600], [0, -80])
  const descriptionOpacity = useTransform(scrollY, [0, 500], [1, 0.8])

  const handleCTAClick = () => {
    scrollToSection(heroSection.ctaHref.replace('#', ''))
  }

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Image - Static with rounded corners - smaller */}
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div
          className="w-full h-full max-w-6xl rounded-3xl bg-cover bg-center bg-no-repeat shadow-2xl"
          style={{
            backgroundImage: `url(${heroSection.backgroundImage})`,
          }}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="w-full h-full max-w-6xl rounded-3xl bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      
      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ y: contentY, opacity: contentOpacity }}
            className="text-center text-white"
          >
            
            {/* Main Title with enhanced parallax */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ y: titleY, opacity: titleOpacity }}
              className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-6"
            >
              {heroSection.title}
            </motion.h1>
            
            {/* Description with enhanced parallax */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ y: descriptionY, opacity: descriptionOpacity }}
              className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              {heroSection.description}
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={handleCTAClick}
                className="btn-primary text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                {heroSection.ctaText}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </section>
  )
} 