import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bell, FileText, Clock, Monitor } from 'lucide-react'

const metrics = [
  {
    icon: Clock,
    label: 'Reduced Repetitive Work',
    description: 'Manual reporting tasks replaced with automated Python workflows.',
    color: '#0066FF',
  },
  {
    icon: Bell,
    label: 'Real-time Alerts',
    description: 'Automated status routing ensures the right team gets notified instantly.',
    color: '#8B5CF6',
  },
  {
    icon: FileText,
    label: 'Automated Reporting',
    description: 'Inspection data automatically compiled into structured reports.',
    color: '#00C8FF',
  },
  {
    icon: Monitor,
    label: 'Centralized Visibility',
    description: 'All quality data accessible in one consolidated reporting system.',
    color: '#0066FF',
  },
]

const Impact: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="impact" className="py-24 lg:py-32 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-2 mb-4"
        >
          <div className="h-px w-8 bg-[#0066FF]" />
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">Impact</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black text-[#0A1628] leading-tight mb-16"
        >
          Software should <span className="text-[#0066FF]">create impact.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${metric.color}12` }}
                >
                  <Icon size={24} style={{ color: metric.color }} />
                </div>
                <h3 className="text-base font-bold text-[#0A1628] mb-2">{metric.label}</h3>
                <p className="text-sm text-[#0A1628]/55 leading-relaxed">{metric.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Impact
