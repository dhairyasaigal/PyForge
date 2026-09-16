import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-8 bg-[#0066FF]" />
              <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">About PyForge</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-black text-[#0A1628] leading-tight mb-8"
            >
              We build software <span className="text-[#0066FF]">around problems.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <p className="text-lg text-[#0A1628]/65 leading-relaxed">
                "PyForge was founded around a simple idea: great software doesn't begin with technology. It begins with understanding a problem."
              </p>
              <p className="text-base text-[#0A1628]/60 leading-relaxed">
                Whether someone needs a small automation, a custom business application, an AI-powered workflow or a specialized enterprise system, the approach remains the same — understand the problem, design the right solution and build it.
              </p>
            </motion.div>
          </div>

          {/* Right — emphasis cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            <div className="bg-white rounded-2xl border border-[#0066FF]/10 p-7 shadow-sm">
              <div className="text-3xl font-black text-[#0A1628] mb-2 leading-tight">
                We don't believe in<br />
                <span className="text-[#0066FF]">one-size-fits-all software.</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0066FF] to-[#0047CC] rounded-2xl p-7 shadow-lg shadow-blue-500/20">
              <div className="text-3xl font-black text-white mb-2 leading-tight">
                We believe in software built for the <span className="text-[#00C8FF]">people who actually use it.</span>
              </div>
            </div>

            {/* Brand statements */}
            <div className="grid grid-cols-3 gap-3">
              {['Tell us the problem.', 'We\'ll build the solution.', 'Your software.'].map((stmt) => (
                <div key={stmt} className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                  <p className="text-xs font-semibold text-[#0A1628]/60 leading-snug">{stmt}</p>
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
