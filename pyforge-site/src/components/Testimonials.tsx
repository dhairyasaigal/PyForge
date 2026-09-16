import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Client testimonial will appear here.',
    name: '[Client Name]',
    role: '[Role]',
    company: '[Company]',
  },
  {
    quote: 'Client testimonial will appear here.',
    name: '[Client Name]',
    role: '[Role]',
    company: '[Company]',
  },
  {
    quote: 'Client testimonial will appear here.',
    name: '[Client Name]',
    role: '[Role]',
    company: '[Company]',
  },
]

const Testimonials: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-2 mb-4"
        >
          <div className="h-px w-8 bg-[#0066FF]" />
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">What People Say</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black text-[#0A1628] leading-tight mb-16"
        >
          Built around <span className="text-[#0066FF]">trust.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="bg-[#F8FAFF] border border-dashed border-gray-200 rounded-2xl p-8 flex flex-col gap-6 relative"
            >
              {/* Placeholder badge */}
              <div className="absolute top-4 right-4 text-xs bg-amber-50 border border-amber-200 text-amber-600 px-2 py-1 rounded-full font-medium">
                Placeholder
              </div>

              <Quote size={24} className="text-[#0066FF]/20" />

              <p className="text-base text-[#0A1628]/40 italic leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Stars placeholder */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={14} className="text-gray-200 fill-gray-200" />
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="text-sm font-bold text-[#0A1628]/40">{t.name}</div>
                <div className="text-xs text-[#0A1628]/30">{t.role} · {t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-[#0A1628]/30 mt-8"
        >
          Customer reviews will be added here when available.
        </motion.p>
      </div>
    </section>
  )
}

export default Testimonials
