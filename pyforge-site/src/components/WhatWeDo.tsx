import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Code2, Brain, Zap, LayoutDashboard, BarChart3, Globe, Eye, Building2 } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Python Applications',
    description: 'Web applications, desktop tools and specialized software built around your workflow.',
    color: '#0066FF',
  },
  {
    icon: Brain,
    title: 'AI & Generative AI',
    description: 'AI assistants, RAG systems, LLM applications, AI agents and intelligent automation.',
    color: '#8B5CF6',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Automate repetitive processes, reporting, file processing, emails and operational workflows.',
    color: '#00C8FF',
  },
  {
    icon: LayoutDashboard,
    title: 'Internal Business Tools',
    description: 'Dashboards, admin systems, reporting tools and employee applications.',
    color: '#0066FF',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Data processing, analytics systems, dashboards and automated reporting.',
    color: '#8B5CF6',
  },
  {
    icon: Globe,
    title: 'APIs & Backend Systems',
    description: 'Reliable APIs, backend applications, integrations and data services.',
    color: '#00C8FF',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Image processing, inspection systems, detection pipelines and visual applications.',
    color: '#0066FF',
  },
  {
    icon: Building2,
    title: 'Custom Enterprise Software',
    description: 'Specialized applications designed around complex organizational requirements.',
    color: '#8B5CF6',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const WhatWeDo: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="what-we-do" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-[#0066FF]" />
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">What We Do</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-[#0A1628] leading-tight mb-4"
          >
            If you can describe it,<br />
            <span className="text-[#0066FF]">we can build it.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#0A1628]/60 leading-relaxed"
          >
            PyForge builds custom software around your requirements instead of asking you to change your workflow to fit existing software.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,102,255,0.1)' }}
                className="bg-[#F8FAFF] border border-gray-100 rounded-2xl p-6 cursor-default transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon size={20} style={{ color: service.color }} />
                </div>
                <h3 className="text-base font-bold text-[#0A1628] mb-2 leading-tight">{service.title}</h3>
                <p className="text-sm text-[#0A1628]/55 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-bold text-[#0A1628] mb-2">Don't see what you need?</p>
          <p className="text-[#0A1628]/50 mb-6">Tell us anyway.</p>
          <motion.button
            id="whatwedo-cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#0047CC] transition-colors shadow-lg shadow-blue-500/25"
          >
            Describe Your Idea
            <ArrowRight size={15} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeDo
