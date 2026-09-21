import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cog, CheckCircle2 } from 'lucide-react'

const About: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FFFDF5] border-t-2 border-b-2 border-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Thesis */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="badge-candy bg-[#FBBF24] text-[#1E293B]">
                Our Core Mission
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight mb-6"
            >
              Why We Build Python Tools for <br />
              <span className="text-[#8B5CF6]">Mechanical & Automobile Systems.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-base sm:text-lg text-[#1E293B]/80 font-medium leading-relaxed"
            >
              <p>
                The tech world is congested with thousands of generic software agencies building another social app or generic web page.
              </p>
              <p>
                Meanwhile, the backbone of physical industry — <strong className="text-[#1E293B] font-black">automotive manufacturing, CMM inspection labs, CNC machine shops, and powertrain test cells</strong> — is running on fragile Excel workarounds, broken VBA macros, and manual clipboard audits.
              </p>
              <p>
                PyForge was founded to close that gap. We specialize strictly in <strong>Python</strong> — using pandas for metrology data, python-can for telemetry, OpenCV for vision QA, and PyQt for robust desktop interfaces. We compile our tools into standalone, offline `.exe` applications that run directly on shop-floor PCs with zero cloud dependencies.
              </p>
            </motion.div>
          </div>

          {/* Right: Graphic Sticker Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <div className="card-sticker p-7 bg-white border-2 border-[#1E293B]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#FBBF24] border-2 border-[#1E293B] flex items-center justify-center shadow-pop-sm">
                  <Cog size={20} strokeWidth={2.5} className="text-[#1E293B]" />
                </div>
                <span className="font-heading font-black text-lg text-[#1E293B]">
                  No One-Size-Fits-All Bloat
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#1E293B]/70 font-medium leading-relaxed">
                We don't sell rigid off-the-shelf software packages. Every tool we build is tailored around your machines, sensors, and team.
              </p>
            </div>

            <div className="card-sticker p-7 bg-[#8B5CF6] text-white border-2 border-[#1E293B] shadow-pop-lg">
              <span className="badge-candy bg-[#34D399] text-[#1E293B] text-[10px] mb-3 inline-flex">
                PHYSICAL FIRST
              </span>
              <h3 className="font-heading font-black text-2xl mb-2 text-white leading-tight">
                Software built for the engineers on the plant floor.
              </h3>
              <p className="text-xs sm:text-sm text-white/85 font-medium leading-relaxed">
                Clean, deterministic, and rock-solid code that runs offline or on-premises without dependency on cloud subscriptions.
              </p>
            </div>

            {/* Three Micro Badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { title: 'Explain The Problem', color: 'bg-[#F472B6]/20' },
                { title: 'We Forge The Code', color: 'bg-[#FBBF24]/20' },
                { title: 'Your Machine Wins', color: 'bg-[#34D399]/20' },
              ].map((pill) => (
                <div
                  key={pill.title}
                  className={`p-3 rounded-2xl border-2 border-[#1E293B] text-center shadow-pop-sm bg-white flex flex-col items-center justify-center`}
                >
                  <CheckCircle2 size={16} strokeWidth={2.5} className="text-[#8B5CF6] mb-1" />
                  <span className="font-heading font-black text-[11px] leading-tight text-[#1E293B]">
                    {pill.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
