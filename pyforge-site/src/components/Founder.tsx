import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GitBranch, Mail, Link2 } from 'lucide-react'

const Founder: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="founder" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-2 mb-12"
        >
          <div className="h-px w-8 bg-[#0066FF]" />
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">Meet the Founder</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl border-2 border-[#0066FF]/10 overflow-hidden relative shadow-2xl shadow-blue-500/10">
              <img
                src="/founder.jpeg"
                alt="Dhairya Saigal â€” Founder & CEO of PyForge"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
              {/* Name badge on photo */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-black text-xl">Dhairya Saigal</p>
                <p className="text-[#00C8FF] text-sm font-semibold">Founder & CEO</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-[#0066FF]/20 blur-xl" />
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 max-w-xs"
            >
              <p className="text-sm text-[#0A1628]/70 italic leading-relaxed">
                "You don't need to know how to build it. Just tell us what you need."
              </p>
              <p className="text-xs text-[#0066FF] font-semibold mt-2">â€” Dhairya Saigal</p>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0A1628] mb-1">Dhairya Saigal</h2>
              <p className="text-lg font-semibold text-[#0066FF]">Co-Founder & CEO, PyForge</p>
            </div>

            <p className="text-base text-[#0A1628]/65 leading-relaxed">
              Dhairya Saigal is the founder and CEO of PyForge, building the company around the idea that real-world problems can be transformed into practical software through engineering, automation and AI.
            </p>

            <p className="text-sm text-[#0A1628]/50 leading-relaxed italic border-l-2 border-[#0066FF]/30 pl-4">
              "Building PyForge around a simple belief: software should adapt to the problem, not force people to adapt to the software."
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/dhairya-saigal-3a9702280"
                target="_blank"
                rel="noopener noreferrer"
                id="founder-linkedin"
                className="flex items-center gap-2 bg-[#0A1628] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0066FF] transition-colors duration-200"
              >
                <Link2 size={15} />
                LinkedIn
              </a>
              <a
                href="https://github.com/dhairyasaigal"
                target="_blank"
                rel="noopener noreferrer"
                id="founder-github"
                className="flex items-center gap-2 bg-gray-100 text-[#0A1628] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                <GitBranch size={15} />
                GitHub
              </a>
              <a
                href="mailto:contactpyforge@gmail.com"
                id="founder-email"
                className="flex items-center gap-2 bg-gray-100 text-[#0A1628] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                <Mail size={15} />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Founder

