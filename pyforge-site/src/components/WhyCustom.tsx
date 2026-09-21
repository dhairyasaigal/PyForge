import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { X, Check, FileSpreadsheet, ShieldAlert, Cpu, Award } from 'lucide-react'

const genericPains = [
  'Fragile Excel sheets with broken macros during shift handovers',
  'Generic SaaS tools that have zero concept of CAN bus, CMM, or CNC G-codes',
  'Exorbitant ERP consulting fees with months of painful onboarding',
  'Manual copy-pasting of inspection measurements across PDFs and emails',
  'Disconnected test rigs trapped in proprietary data silos',
]

const pyforgeGains = [
  'Direct parsers for your exact CMM coordinate & telemetry file formats',
  'Intuitive, fast interfaces tailored for shop-floor operators and QA leads',
  'Stand-alone deployment: run offline on testbench laptops or local plant networks',
  'Zero recurring bloat: built specifically for your machine parameters',
  'Complete ownership of your Python source code and proprietary math',
]

const WhyCustom: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-custom" className="py-24 lg:py-32 bg-[#FFFDF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="badge-candy bg-[#8B5CF6] text-white">
              Why Custom Engineering Software?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight mb-4"
          >
            Your Machines Aren't Generic.<br />
            <span className="text-[#8B5CF6]">Your Software Shouldn't Be Either.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#1E293B]/70 font-medium leading-relaxed"
          >
            Automotive and mechanical engineers have suffered through clunky spreadsheets and mismatched SaaS for decades.
            PyForge replaces manual band-aids with purpose-built Python tools.
          </motion.p>
        </div>

        {/* Two Column Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Generic Software / Excel Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-sticker p-8 bg-white border-2 border-[#1E293B] shadow-pop flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#1E293B]/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 border-2 border-[#1E293B] flex items-center justify-center shadow-pop-sm shrink-0">
                    <FileSpreadsheet size={22} strokeWidth={2.5} className="text-red-600" />
                  </div>
                  <div>
                    <span className="badge-candy bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-wider py-0.5 px-2">
                      STATUS QUO
                    </span>
                    <h3 className="font-heading font-black text-xl lg:text-2xl text-[#1E293B] mt-1.5 leading-tight">
                      Fragile Sheets & Generic SaaS
                    </h3>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-red-100 border-2 border-[#1E293B] flex items-center justify-center shrink-0">
                  <ShieldAlert size={18} strokeWidth={2.5} className="text-red-600" />
                </div>
              </div>

              <ul className="flex flex-col gap-3.5">
                {genericPains.map((pain) => (
                  <li key={pain} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-[#1E293B]/80 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-red-100 border-2 border-[#1E293B] flex items-center justify-center shrink-0 mt-0.5">
                      <X size={12} strokeWidth={3} className="text-red-600" />
                    </div>
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-[#1E293B]/10 text-xs font-bold text-[#1E293B] flex flex-wrap items-center gap-2">
              <span className="badge-candy bg-red-100 text-red-700 text-[10px] font-black py-0.5 px-2">
                RESULT
              </span>
              <span className="font-bold text-red-600">
                High operator error, lost inspection records, and delayed production.
              </span>
            </div>
          </motion.div>

          {/* PyForge Custom Engineering Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-sticker p-8 bg-white border-2 border-[#1E293B] shadow-pop-xl flex flex-col justify-between relative overflow-hidden ring-2 ring-[#8B5CF6]/30"
          >
            {/* Background subtle dot pattern */}
            <div className="absolute inset-0 bg-dot-grid-subtle opacity-30 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#1E293B]/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6] text-white border-2 border-[#1E293B] flex items-center justify-center shadow-pop-sm shrink-0">
                    <Cpu size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="badge-candy bg-[#8B5CF6] text-white text-[10px] font-black uppercase tracking-wider py-0.5 px-2">
                      THE PYFORGE WAY · STANDALONE PYTHON .EXE
                    </span>
                    <h3 className="font-heading font-black text-xl lg:text-2xl text-[#1E293B] mt-1.5 leading-tight">
                      Custom Python Engineering Applications
                    </h3>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#34D399] border-2 border-[#1E293B] flex items-center justify-center text-[#1E293B] shrink-0 shadow-pop-sm">
                  <Award size={18} strokeWidth={2.5} />
                </div>
              </div>

              <ul className="flex flex-col gap-3.5">
                {pyforgeGains.map((gain) => (
                  <li key={gain} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-[#1E293B] leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-[#34D399] border-2 border-[#1E293B] flex items-center justify-center shrink-0 mt-0.5 text-[#1E293B] shadow-pop-sm">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{gain}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-[#1E293B]/10 text-xs font-bold text-[#1E293B] flex flex-wrap items-center gap-2 relative z-10">
              <span className="badge-candy bg-[#34D399] text-[#1E293B] text-[10px] font-black py-0.5 px-2">
                RESULT
              </span>
              <span className="font-extrabold text-[#1E293B]">
                Zero inspection reporting lag, automated tolerance alerts, and shop-floor confidence.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default WhyCustom
