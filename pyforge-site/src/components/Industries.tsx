import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const industries = [
  {
    name: 'IT',
    examples: ['Custom developer tools', 'Internal platforms', 'API integrations', 'DevOps dashboards'],
  },
  {
    name: 'Automotive',
    examples: ['Inspection automation', 'Quality reporting', 'Production tracking', 'Data analysis'],
  },
  {
    name: 'Manufacturing',
    examples: ['Inspection automation', 'Production dashboards', 'Quality reporting', 'Predictive analytics'],
  },
  {
    name: 'Mechanical',
    examples: ['Engineering calculation tools', 'Inspection software', 'Data analysis', 'Design utilities'],
  },
  {
    name: 'Electrical',
    examples: ['Monitoring dashboards', 'Data acquisition', 'Automation tools', 'Analysis applications'],
  },
  {
    name: 'Civil',
    examples: ['Project management tools', 'Site reporting', 'Cost estimation', 'Document automation'],
  },
  {
    name: 'Healthcare',
    examples: ['Document processing', 'Workflow automation', 'Data systems', 'AI assistants'],
  },
  {
    name: 'Education',
    examples: ['Learning tools', 'Admin automation', 'Analytics systems', 'Content platforms'],
  },
  {
    name: 'Finance',
    examples: ['Reporting automation', 'Data pipelines', 'Compliance tools', 'Analytics dashboards'],
  },
  {
    name: 'Retail',
    examples: ['Inventory systems', 'Sales analytics', 'Customer data tools', 'Automation pipelines'],
  },
  {
    name: 'Logistics',
    examples: ['Route optimization', 'Tracking dashboards', 'Reporting tools', 'Data integration'],
  },
  {
    name: 'Construction',
    examples: ['Project tracking', 'Site inspection apps', 'Document management', 'Cost reporting'],
  },
  {
    name: 'Research',
    examples: ['Data analysis tools', 'Experiment tracking', 'Visualization apps', 'Automation scripts'],
  },
  {
    name: 'Startups',
    examples: ['MVPs', 'Internal tools', 'AI-powered features', 'Rapid prototyping'],
  },
]

const Industries: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const activeData = industries.find((i) => i.name === activeIndustry)

  return (
    <section id="industries" className="py-24 lg:py-32 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-[#0066FF]" />
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">Built For Every Industry</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-[#0A1628] leading-tight mb-4"
          >
            One engineering team.<br />
            <span className="text-[#0066FF]">Countless possibilities.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#0A1628]/60 mb-12 max-w-xl"
          >
            Software problems don't belong to one industry. Neither do we.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Industry grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {industries.map((industry) => (
              <motion.button
                key={industry.name}
                id={`industry-${industry.name.toLowerCase()}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveIndustry(activeIndustry === industry.name ? null : industry.name)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold text-left transition-all duration-200 border ${
                  activeIndustry === industry.name
                    ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-lg shadow-blue-500/25'
                    : 'bg-white text-[#0A1628]/70 border-gray-200 hover:border-[#0066FF]/40 hover:text-[#0066FF]'
                }`}
              >
                {industry.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-6 min-h-[200px] shadow-sm">
              {activeData ? (
                <motion.div
                  key={activeData.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-3">
                    {activeData.name}
                  </div>
                  <p className="text-sm text-[#0A1628]/50 mb-4">Software PyForge could build for this industry:</p>
                  <ul className="flex flex-col gap-2.5">
                    {activeData.examples.map((example) => (
                      <li key={example} className="flex items-center gap-2 text-sm text-[#0A1628]/80 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-10 h-10 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-3">
                    <div className="w-4 h-4 rounded-full bg-[#0066FF]/40" />
                  </div>
                  <p className="text-sm text-[#0A1628]/40">
                    Select an industry to see what PyForge could build.
                  </p>
                </div>
              )}
            </div>
            <p className="text-xs text-[#0A1628]/30 mt-3 text-center">
              These are examples of capability, not claimed past experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Industries
