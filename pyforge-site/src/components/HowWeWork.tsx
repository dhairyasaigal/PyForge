import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Search, Pencil, Hammer, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'You Ask',
    description: 'Tell us what you need in your own words. No technical knowledge required.',
    color: '#0066FF',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Understand',
    description: 'We understand your workflow, problem and desired outcome.',
    color: '#3385FF',
  },
  {
    number: '03',
    icon: Pencil,
    title: 'We Design',
    description: 'We design the user experience, architecture and technical solution.',
    color: '#00C8FF',
  },
  {
    number: '04',
    icon: Hammer,
    title: 'We Build',
    description: 'We develop, test and refine the application.',
    color: '#8B5CF6',
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'We Deliver',
    description: 'You receive a working solution ready to use and evolve.',
    color: '#0066FF',
  },
]

const HowWeWork: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-we-work" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-[#0066FF]" />
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">How We Do It</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-[#0A1628] leading-tight mb-16"
          >
            From an idea to a <span className="text-[#0066FF]">working solution.</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF]/20 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="flex flex-col items-start lg:items-center text-left lg:text-center group"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300"
                      style={{ backgroundColor: `${step.color}12`, border: `2px solid ${step.color}25` }}
                    >
                      <Icon size={28} style={{ color: step.color }} />
                    </motion.div>
                    <div
                      className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white shadow-md"
                      style={{ backgroundColor: step.color }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0A1628] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#0A1628]/55 leading-relaxed">{step.description}</p>

                  {/* Arrow between steps (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute" style={{ left: `${((i + 1) / steps.length) * 100 - 10}%`, top: '32px' }}>
                      <div className="text-[#0066FF]/30 text-xl font-light">→</div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Animated progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 hidden lg:block"
        >
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={inView ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-[#0066FF] to-[#00C8FF] rounded-full"
            />
          </div>
          <div className="flex justify-between mt-2">
            {steps.map((s) => (
              <span key={s.number} className="text-xs text-[#0A1628]/30 font-medium">{s.title}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowWeWork
