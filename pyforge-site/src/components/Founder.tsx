import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GitBranch, Mail, Link2, Wrench, Quote } from 'lucide-react'

const Founder: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="founder" className="py-24 lg:py-32 bg-[#FFFDF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 mb-12"
        >
          <span className="badge-candy bg-[#34D399] text-[#1E293B]">
            Meet the Founder & Lead Engineer
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            {/* Background offset card */}
            <div className="absolute inset-0 bg-[#FBBF24] rounded-3xl border-2 border-[#1E293B] translate-x-3 translate-y-3 -z-10" />

            <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl border-2 border-[#1E293B] overflow-hidden relative shadow-pop-lg bg-white">
              <img
                src="/my_image.png"
                alt="Dhairya Saigal — Founder & CEO of PyForge"
                className="w-full h-full object-cover object-top"
              />
              {/* Bottom gradient and name overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1E293B]/90 via-[#1E293B]/60 to-transparent p-5 flex flex-col justify-end">
                <p className="text-white font-heading font-black text-2xl leading-none">Dhairya Saigal</p>
                <p className="text-[#FBBF24] font-bold text-xs mt-1 uppercase tracking-wider">
                  Founder & CEO, PyForge
                </p>
              </div>

              {/* Floating Mechanical Sticker Badge */}
              <div className="absolute top-4 left-4 badge-candy bg-[#F472B6] text-[#1E293B] text-[11px] shadow-pop-sm">
                <Wrench size={12} strokeWidth={2.5} />
                <span>Automotive Software</span>
              </div>
            </div>

            {/* Floating Quote Sticker Bubble */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-2 sm:-right-6 bg-white border-2 border-[#1E293B] rounded-2xl p-4 shadow-pop-lg max-w-xs z-20"
            >
              <div className="flex items-start gap-2">
                <Quote size={18} strokeWidth={2.5} className="text-[#8B5CF6] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#1E293B] font-bold leading-relaxed italic">
                    "Software must adapt to the physical machine, not force engineers to adapt to the software."
                  </p>
                  <p className="text-[10px] font-extrabold text-[#8B5CF6] uppercase mt-1">
                    — Dhairya Saigal
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Bio Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#8B5CF6]">
                ENGINEERING LEADERSHIP
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-black text-[#1E293B] mt-1 mb-2">
                Dhairya Saigal
              </h2>
              <p className="text-base font-bold text-[#8B5CF6]">
                Co-Founder & CEO, PyForge
              </p>
            </div>

            <div className="space-y-4 text-base text-[#1E293B]/80 font-medium leading-relaxed">
              <p>
                Dhairya is the founder and CEO of PyForge. Having built software and CMM inspection automation tools in demanding automotive production environments like Honda, he founded PyForge with a direct focus on solving real operational mechanical bottlenecks.
              </p>
              <p>
                Seeing the broader software industry saturate itself with generic consumer apps, Dhairya pivoted PyForge to champion the underserved automobile and mechanical engineering ecosystem — engineering custom Python data systems, CAN telemetry loggers, and automated metrology pipelines that run deterministically on the shop floor.
              </p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-[#1E293B] bg-white shadow-pop-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#34D399] border-2 border-[#1E293B] flex items-center justify-center shrink-0">
                <Wrench size={18} strokeWidth={2.5} className="text-[#1E293B]" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#1E293B]">
                Direct founder access on every build: speak directly with the engineer writing your code, not an outsourced account manager.
              </p>
            </div>

            {/* Links with Candy Button Styling */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/916378753622?text=Hi%20Dhairya,%20I'm%20reaching%20out%20via%20PyForge."
                target="_blank"
                rel="noopener noreferrer"
                id="founder-whatsapp"
                className="btn-candy bg-[#25D366] text-[#1E293B] hover:bg-[#128C7E] hover:text-white px-5 py-2.5 text-xs"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.12.17 1.76 2.68 4.25 3.76.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.3" />
                </svg>
                <span>WhatsApp: +91 6378753622</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dhairya-saigal-3a9702280"
                target="_blank"
                rel="noopener noreferrer"
                id="founder-linkedin"
                className="btn-candy-secondary px-5 py-2.5 text-xs"
              >
                <Link2 size={15} strokeWidth={2.5} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/dhairyasaigal"
                target="_blank"
                rel="noopener noreferrer"
                id="founder-github"
                className="btn-candy-secondary px-5 py-2.5 text-xs"
              >
                <GitBranch size={15} strokeWidth={2.5} />
                <span>GitHub</span>
              </a>

              <a
                href="mailto:saigaldhairya1@gmail.com?subject=PyForge%20Founder%20Direct%20Connect"
                id="founder-email"
                className="btn-candy-secondary px-4 py-2.5 text-xs"
                title="Personal Email: saigaldhairya1@gmail.com"
              >
                <Mail size={15} strokeWidth={2.5} />
                <span>Personal Email</span>
              </a>

              <a
                href="mailto:contactpyforge@gmail.com?subject=PyForge%20Company%20Inquiry"
                id="company-email"
                className="btn-candy-secondary px-4 py-2.5 text-xs"
                title="Company Email: contactpyforge@gmail.com"
              >
                <Mail size={15} strokeWidth={2.5} />
                <span>Company Email</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Founder
