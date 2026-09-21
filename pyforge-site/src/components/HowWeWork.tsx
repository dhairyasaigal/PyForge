import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Cpu, FileCode, CheckCircle2, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'You Explain the Bottleneck',
    description: 'Tell us about your CMM reporting delay, telemetry logging gap, or manual Excel calculation. No software buzzwords required.',
    color: '#8B5CF6',
    bg: '#F3E8FF',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'We Inspect The Data & Rig',
    description: 'We analyze your machine outputs, CAN logs, CMM formats, CAD files, or PLC protocols to map the exact data pipeline.',
    color: '#FBBF24',
    bg: '#FEF3C7',
  },
  {
    number: '03',
    icon: FileCode,
    title: 'We Forge The Architecture',
    description: 'We design intuitive shop-floor interfaces, robust Python backend algorithms, and deterministic data validators.',
    color: '#34D399',
    bg: '#D1FAE5',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'We Build & Bench-Test',
    description: 'We develop the application, test against real edge-case telemetry or tolerance limits, and stress-test the pipeline.',
    color: '#F472B6',
    bg: '#FCE7F3',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Shop-Floor Deployment',
    description: 'You receive standalone executables or local networked dashboards ready for your engineers and operators to use.',
    color: '#8B5CF6',
    bg: '#F3E8FF',
  },
]

const HowWeWork: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-we-work" className="py-24 lg:py-32 bg-[#FFFDF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div ref={ref} className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="badge-candy bg-[#FBBF24] text-[#1E293B]">
              Engineered Step-by-Step
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight mb-4"
          >
            From Shop-Floor Problem to <br />
            <span className="text-[#8B5CF6]">Working Engineering Software.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#1E293B]/70 font-medium leading-relaxed"
          >
            You don't need a computer science degree to get custom software. You bring the mechanical domain expertise; we forge the code.
          </motion.p>
        </div>

        {/* Playful Steps Grid */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-1 bg-[#1E293B] border-dashed border-b-2 border-[#1E293B] -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="card-sticker p-6 flex flex-col justify-between bg-white relative group"
                >
                  {/* Step number badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl border-2 border-[#1E293B] flex items-center justify-center shadow-pop-sm group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: step.bg }}
                    >
                      <Icon size={22} strokeWidth={2.5} style={{ color: step.color }} />
                    </div>
                    <span
                      className="w-8 h-8 rounded-full border-2 border-[#1E293B] font-heading font-black text-xs flex items-center justify-center shadow-pop-sm"
                      style={{ backgroundColor: step.color, color: '#FFFFFF' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-base font-black text-[#1E293B] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1E293B]/70 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t-2 border-[#1E293B]/10 text-[11px] font-extrabold uppercase tracking-wider text-[#64748B]">
                    Phase 0{i + 1}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
