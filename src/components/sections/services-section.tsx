'use client'

import { motion } from 'framer-motion'
import { Calculator, Square, BarChart3, Target } from 'lucide-react'
import { services } from '@/data/content'

export function ServicesSection() {
  const iconMap = {
    Calculator,
    Square,
    BarChart3,
    Target
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Math Tutoring Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From foundational concepts to advanced topics, I provide personalized instruction 
            tailored to your learning style and academic goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="card hover:shadow-medium transition-shadow duration-300 group bg-white"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-[#e8f4fd] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d1e9fb] transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-[#0c7ff2]" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Subjects */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Subjects Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-3 py-1 bg-[#e8f4fd] text-[#0c7ff2] text-sm rounded-full font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Grade Levels */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Grade Levels
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.gradeLevels.map((level) => (
                        <span
                          key={level}
                          className="px-3 py-1 bg-[#fef3c7] text-[#f59e0b] text-sm rounded-full font-medium"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#e8f4fd] to-[#fef3c7] rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose My Tutoring Approach?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-[#e8f4fd] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-[#0c7ff2]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Personalized Learning</h4>
                <p className="text-gray-600 text-sm">
                  Customized instruction based on your learning style and pace
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#e8f4fd] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calculator className="w-6 h-6 text-[#0c7ff2]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Practical Application</h4>
                <p className="text-gray-600 text-sm">
                  Real-world examples that make math concepts come alive
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#e8f4fd] rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-[#0c7ff2]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-gray-600 text-sm">
                  Track record of improving grades and building confidence
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 