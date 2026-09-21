import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, ShieldCheck, FileCheck, Activity } from 'lucide-react'

const metrics = [
  {
    icon: Zap,
    stat: '0 min',
    label: 'CMM Reporting Lag',
    description: 'Coordinate data extracted and delivered to line supervisors the second an inspection finishes.',
    color: '#8B5CF6',
    bg: '#F3E8FF',
  },
  {
    icon: ShieldCheck,
    stat: '±0.001mm',
    label: 'Defect Drift Precision',
    description: 'Pinpoints out-of-tolerance dimensions instantly before bad batches leave the press or machine cell.',
    color: '#F472B6',
    bg: '#FCE7F3',
  },
  {
    icon: FileCheck,
    stat: '100%',
    label: 'Audit-Proof Cp/Cpk',
    description: 'Full statistical capability calculations generated in seconds for customer PPAP and automotive audits.',
    color: '#FBBF24',
    bg: '#FEF3C7',
  },
  {
    icon: Activity,
    stat: '100 Hz',
    label: 'Live Telemetry Rate',
    description: 'High-frequency CAN-bus and PLC logging without packet drops during grueling engine dyno runs.',
    color: '#34D399',
    bg: '#D1FAE5',
  },
]

const Impact: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="impact" className="py-24 lg:py-32 bg-[#FFFDF5] border-t-2 border-b-2 border-[#1E293B] relative overflow-hidden">
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
              Proven Shop-Floor Metrics
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight mb-4"
          >
            Software Built to Protect <br />
            <span className="text-[#8B5CF6]">Tolerances, Takt Times & Margins.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#1E293B]/70 font-medium leading-relaxed"
          >
            In mechanical manufacturing, a single delayed inspection report can scrap an entire production shift. Here is the operational impact our software delivers.
          </motion.p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="card-sticker p-7 bg-white border-2 border-[#1E293B] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl border-2 border-[#1E293B] flex items-center justify-center shadow-pop-sm group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: metric.bg }}
                    >
                      <Icon size={22} strokeWidth={2.5} style={{ color: metric.color }} />
                    </div>
                    <span className="font-heading font-black text-2xl text-[#1E293B]">
                      {metric.stat}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-black text-[#1E293B] mb-2 leading-tight">
                    {metric.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1E293B]/70 font-medium leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t-2 border-[#1E293B]/10 text-[11px] font-bold text-[#8B5CF6]">
                  Production Validated
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Impact
