import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, Star, CheckCircle2 } from 'lucide-react'

const testimonials = [
  {
    name: 'Deepak Yadav',
    role: 'Manager — IQ PPT Division',
    company: 'Honda Motorcycle & Scooter India Pvt. Ltd.',
    image: '/review1.jpeg',
    badge: 'IQ PPT Division',
    quote:
      'PyForge engineered a robust automation suite that streamlined our inspection data processing across the IQ PPT division. The automatic CMM report parsing and instant status notifications drastically cut down our response times and manual intervention.',
    color: '#8B5CF6',
  },
  {
    name: 'Kulveer Rana',
    role: 'Section Head — MA2',
    company: 'Honda Motorcycle & Scooter India Pvt. Ltd.',
    image: '/review2.jpeg',
    badge: 'MA2 Section',
    quote:
      'The software systems developed for our section made day-to-day inspection workflows seamless. Pinpointing Out-of-Tolerance trends and tracking dimensions automatically gave our line engineers complete operational clarity on the plant floor.',
    color: '#F472B6',
  },
  {
    name: 'Gulshan Malhotra',
    role: 'Department Head',
    company: 'Honda Motorcycle & Scooter India Pvt. Ltd.',
    image: '/review3.jpeg',
    badge: 'Quality Department',
    objectPos: 'object-top',
    quote:
      'The Cp/Cpk Master Report Generator and automated quality pipelines brought unmatched accuracy and speed to our quality audits. Having software specifically customized to our CMM parameters has been an invaluable asset to our department.',
    color: '#34D399',
  },
]

const Testimonials: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#FFFDF5] relative overflow-hidden">
      {/* Background dot grid pattern */}
      <div className="absolute inset-0 bg-dot-grid-subtle opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="badge-candy bg-[#34D399] text-[#1E293B]">
              <CheckCircle2 size={13} strokeWidth={2.5} />
              Feedback From Plant Leadership
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight mb-4"
          >
            Endorsed by Automotive <br />
            <span className="text-[#8B5CF6]">Quality & Plant Leadership.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#1E293B]/80 font-medium leading-relaxed"
          >
            Direct feedback from managers and department heads at Honda Motorcycle and Scooter India Pvt. Ltd. (HMSI) running our custom automated quality inspection tools.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="card-sticker p-8 bg-white border-2 border-[#1E293B] shadow-pop-lg flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Photo + Badge + Stars */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="relative">
                      <img
                        src={t.image}
                        alt={t.name}
                        className={`w-16 h-16 rounded-2xl object-cover ${t.objectPos || 'object-center'} border-2 border-[#1E293B] shadow-pop-sm group-hover:scale-105 transition-transform shrink-0`}
                      />
                      <span
                        className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#1E293B]"
                        style={{ backgroundColor: t.color }}
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-lg text-[#1E293B] leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs font-bold text-[#8B5CF6]">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <span className="badge-candy bg-[#FFFDF5] text-[#1E293B] text-[10px] font-black shrink-0">
                    {t.badge}
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={15} strokeWidth={2.5} className="text-[#FBBF24] fill-[#FBBF24]" />
                  ))}
                </div>

                <Quote size={28} strokeWidth={2.5} className="text-[#1E293B]/20 mb-2" />

                <p className="text-xs sm:text-sm text-[#1E293B]/85 font-semibold leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t-2 border-[#1E293B]/10 flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#64748B]">
                  {t.company}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#34D399]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
