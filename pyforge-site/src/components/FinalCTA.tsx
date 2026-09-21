import { motion } from 'framer-motion'
import { ArrowRight, Wrench, CheckCircle2 } from 'lucide-react'

const FinalCTA: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="final-cta" className="py-24 lg:py-32 bg-[#FBBF24] border-t-2 border-b-2 border-[#1E293B] relative overflow-hidden">
      {/* Background dot grid pattern */}
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

      {/* Playful Memphis Background Floating Shapes */}
      <div className="absolute top-10 left-10 hidden sm:block pointer-events-none">
        <div className="w-12 h-12 rounded-full border-2 border-[#1E293B] bg-[#F472B6] shadow-pop-sm rotate-12" />
      </div>
      <div className="absolute bottom-12 right-12 hidden sm:block pointer-events-none">
        <div className="w-14 h-14 border-2 border-[#1E293B] bg-[#34D399] shadow-pop-sm -rotate-12" />
      </div>
      <div className="absolute top-1/2 right-8 hidden lg:block pointer-events-none">
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" className="text-[#8B5CF6]">
          <path d="M2 15C8 5 14 5 20 15C26 25 32 25 38 15C44 5 50 5 56 15" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 badge-candy bg-white text-[#1E293B] mb-6 shadow-pop-sm"
        >
          <Wrench size={14} strokeWidth={2.5} className="text-[#8B5CF6]" />
          <span>Automobile & Mechanical Engineering Software</span>
        </motion.div>

        {/* Master Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black text-[#1E293B] leading-[1.02] tracking-tight mb-6"
        >
          You Ask It. <br />
          <span className="text-[#8B5CF6] underline decoration-[#1E293B] decoration-wavy decoration-4">
            We'll Make It
          </span>{' '}
          For You.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl text-[#1E293B]/85 font-bold mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Stop losing hours to manual CMM logging, rigid spreadsheets, or generic SaaS that doesn't understand your machines. 
          Hit us with your requirements and let's forge software that fits.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            id="finalcta-primary"
            onClick={() => scrollTo('#contact')}
            className="btn-candy bg-[#8B5CF6] text-white hover:bg-[#1E293B] px-8 py-4 text-base"
          >
            <span>Hit Us With Your Query</span>
            <span className="w-7 h-7 rounded-full bg-white text-[#1E293B] flex items-center justify-center">
              <ArrowRight size={16} strokeWidth={3} />
            </span>
          </button>

          <button
            id="finalcta-secondary"
            onClick={() => scrollTo('#our-work')}
            className="btn-candy-secondary px-8 py-4 text-base bg-white"
          >
            <span>Review Live Deployments</span>
          </button>
        </motion.div>

        {/* Trust points */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-[#1E293B]"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} strokeWidth={2.5} className="text-[#1E293B]" />
            Direct Founder Engineering
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} strokeWidth={2.5} className="text-[#1E293B]" />
            Fixed Upfront Quotes in 24h
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} strokeWidth={2.5} className="text-[#1E293B]" />
            100% Code Ownership
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default FinalCTA
