import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { X, Check } from 'lucide-react'

const offShelf = [
  'Fixed workflows',
  'Limited customization',
  'Unnecessary features',
  'Adapt your process to the tool',
  'Multiple disconnected systems',
]

const pyforge = [
  'Your workflow',
  'Your requirements',
  'Your interface',
  'Your automation',
  'Your integrations',
  'Your software',
]

const WhyCustom: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-custom" className="py-24 lg:py-32 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="h-px w-8 bg-[#0066FF]" />
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">Why Custom Software?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black text-[#0A1628] leading-tight mb-16 max-w-2xl"
        >
          Your problem isn't generic.<br />
          <span className="text-[#0066FF]">Your software shouldn't be either.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Off the shelf */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                <X size={16} className="text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1628]/50">Off-the-Shelf Software</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {offShelf.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 text-[#0A1628]/50"
                >
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <X size={10} className="text-red-400" />
                  </div>
                  <span className="text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* PyForge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gradient-to-br from-[#0066FF] to-[#0047CC] rounded-2xl p-8 shadow-xl shadow-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <img src="/logo.png" alt="PyForge" className="w-5 h-5 rounded-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-white">PyForge</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {pyforge.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-3 text-white"
                >
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-white" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyCustom
