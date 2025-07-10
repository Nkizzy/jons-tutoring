'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '@/data/content'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#0c7ff2] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Jon's Tutoring</span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Transforming math anxiety into confidence through personalized, 
              student-centered instruction that builds lasting understanding.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-[#e8f4fd] rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#0c7ff2]" />
              </div>
              <div className="w-10 h-10 bg-[#e8f4fd] rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#0c7ff2]" />
              </div>
              <div className="w-10 h-10 bg-[#e8f4fd] rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#0c7ff2]" />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-[#0c7ff2] transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-600 hover:text-[#0c7ff2] transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-gray-600 hover:text-[#0c7ff2] transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-[#0c7ff2] transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#0c7ff2]" />
                <span className="text-gray-600">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#0c7ff2]" />
                <span className="text-gray-600">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#0c7ff2]" />
                <span className="text-gray-600">{contactInfo.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 mt-8 pt-8 text-center"
        >
          <p className="text-gray-600">
            © {currentYear} Jon's Tutoring. All rights reserved. 
            Professional math tutoring services for students of all levels.
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 