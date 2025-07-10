'use client'

import { motion } from 'framer-motion'
import { CheckCircle, GraduationCap, Award, Users } from 'lucide-react'
import { aboutSection } from '@/data/content'

export function AboutSection() {
  const credentials = [
    { icon: GraduationCap, text: "Master's Degree in Mathematics Education" },
    { icon: Award, text: "Certified Math Teacher (Grades 6-12)" },
    { icon: Users, text: "10+ Years of Tutoring Experience" },
    { icon: CheckCircle, text: "Specialized in Advanced Placement Courses" }
  ]

  return (
    <section className="section-padding bg-[#f8f9fa] relative z-10">
      <div className="container-custom">
        {/* Meet the tutor header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet the tutor
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                {aboutSection.title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                {aboutSection.description}
              </motion.p>
            </div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Credentials</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: false }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-[#e8f4fd] rounded-full flex items-center justify-center">
                      <credential.icon className="w-4 h-4 text-[#0c7ff2]" />
                    </div>
                    <span className="text-gray-700 font-medium">{credential.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: false }}
              className="mt-8 p-6 bg-white rounded-xl shadow-soft border-l-4 border-[#0c7ff2]"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Teaching Philosophy</h4>
              <p className="text-gray-600 leading-relaxed italic">
                "{aboutSection.philosophy}"
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <div className="aspect-[4/5] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${aboutSection.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 