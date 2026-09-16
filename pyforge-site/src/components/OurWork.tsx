import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail, TrendingUp, BarChart2, ExternalLink } from 'lucide-react'

const apps = [
  {
    number: '01',
    icon: Mail,
    title: 'Email File Sender V2',
    description:
      'A Python application that monitors inspection report files, reads report information, identifies inspection status and routes reports to the appropriate department automatically.',
    pipeline: ['PDF', 'Detection', 'Email'],
    color: '#0066FF',
  },
  {
    number: '02',
    icon: TrendingUp,
    title: 'Monthly OOT Trend Analyzer',
    description:
      'A Python-based reporting system that processes monthly inspection reports, extracts measurement information, identifies recurring out-of-tolerance characteristics and generates trend insights.',
    pipeline: ['Data', 'Analysis', 'Trend Chart', 'Report'],
    color: '#8B5CF6',
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'Cp/Cpk Master Report Generator',
    description:
      'A reporting automation application that processes measurement data, calculates process capability metrics and populates the required reporting template.',
    pipeline: ['Measurements', 'Statistics', 'Cp/Cpk', 'Report'],
    color: '#00C8FF',
  },
]

const placeholderProjects = [
  { title: 'AI Document Assistant', tag: 'AI / RAG' },
  { title: 'Workflow Automation System', tag: 'Python / Automation' },
  { title: 'Analytics Dashboard', tag: 'Data / Analytics' },
]

const OurWork: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="our-work" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-2 mb-4"
        >
          <div className="h-px w-8 bg-[#0066FF]" />
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">Our Work</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black text-[#0A1628] leading-tight mb-3"
        >
          Real problems.<br />
          <span className="text-[#0066FF]">Real software.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#0A1628]/60 mb-16"
        >
          Here's a look at what we've built.
        </motion.p>

        {/* Honda Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="rounded-3xl bg-gradient-to-br from-[#F0F5FF] to-[#EEF2FF] border border-[#0066FF]/10 p-8 lg:p-12 mb-8"
        >
          {/* Honda badge */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0066FF]/10 text-[#0066FF] text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                Featured Case Study · Portfolio Project
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-[#0A1628] mb-2">
                Automating Quality Inspection at Honda
              </h3>
              <p className="text-[#0A1628]/60 text-base max-w-2xl">
                Three connected Python applications built to reduce manual effort in CMM inspection reporting.
              </p>
              <p className="text-xs text-[#0A1628]/40 mt-2 italic">
                Note: These applications were developed during the founder's work at Honda and are presented here as a portfolio case study. This does not represent a commercial relationship between Honda and PyForge.
              </p>
            </div>
          </div>

          {/* Pipeline visual */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {['Inspection Report', 'Email File Sender', 'OOT Trend Analyzer', 'Cp/Cpk Report Generator'].map((stage, i) => (
              <div key={stage} className="flex items-center gap-2">
                <div className="bg-white border border-[#0066FF]/20 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0A1628]">
                  {stage}
                </div>
                {i < 3 && <ArrowRight size={14} className="text-[#0066FF]/40" />}
              </div>
            ))}
          </div>

          {/* App cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {apps.map((app, i) => {
              const Icon = app.icon
              return (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${app.color}15` }}
                    >
                      <Icon size={18} style={{ color: app.color }} />
                    </div>
                    <span className="text-xs font-bold text-[#0A1628]/30">App {app.number}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#0A1628] mb-3">{app.title}</h4>
                  <p className="text-sm text-[#0A1628]/55 leading-relaxed mb-4">{app.description}</p>
                  {/* Mini pipeline */}
                  <div className="flex flex-wrap items-center gap-1">
                    {app.pipeline.map((step, j) => (
                      <div key={step} className="flex items-center gap-1">
                        <span className="text-xs bg-gray-50 border border-gray-100 text-[#0A1628]/60 px-2 py-1 rounded-md font-medium">
                          {step}
                        </span>
                        {j < app.pipeline.length - 1 && (
                          <ArrowRight size={10} className="text-[#0A1628]/25" />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Placeholder project cards */}
        <div>
          <p className="text-sm font-semibold text-[#0A1628]/40 mb-5 uppercase tracking-widest">More Projects</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {placeholderProjects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-[#F8FAFF] border border-dashed border-gray-200 rounded-2xl p-6 group hover:border-[#0066FF]/30 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 mb-4 flex items-center justify-center group-hover:bg-[#0066FF]/10 transition-colors">
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-[#0066FF] transition-colors" />
                </div>
                <div className="text-xs font-semibold text-[#0066FF]/60 mb-2">{proj.tag}</div>
                <h4 className="text-base font-bold text-[#0A1628] mb-2">{proj.title}</h4>
                <p className="text-xs text-[#0A1628]/40 font-medium italic">Case study coming soon</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWork
