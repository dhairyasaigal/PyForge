import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ParticleBackground = lazy(() => import('./three/ParticleBackground'))

const FinalCTA: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="final-cta" className="relative py-32 lg:py-40 bg-gradient-to-br from-white via-[#F0F5FF] to-[#EEF2FF] overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 pointer-events-none">
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00C8FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="h-px w-8 bg-[#0066FF]" />
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">Ready to Build?</span>
          <div className="h-px w-8 bg-[#0066FF]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-6xl lg:text-8xl font-black leading-[1.02] tracking-tight mb-6"
        >
          <span className="text-[#0A1628]">You Ask It.</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C8FF]">
            We'll Make It
          </span>
          <span className="text-[#0A1628]"> For You.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-lg text-[#0A1628]/55 mb-12 max-w-lg mx-auto"
        >
          Your idea doesn't need to stay an idea.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            id="finalcta-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#contact')}
            className="flex items-center gap-2 bg-[#0066FF] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#0047CC] transition-colors shadow-2xl shadow-blue-500/30"
          >
            Start a Project
            <ArrowRight size={18} />
          </motion.button>
          <motion.button
            id="finalcta-secondary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#our-work')}
            className="flex items-center gap-2 bg-white text-[#0A1628] px-8 py-4 rounded-full text-base font-bold border border-gray-200 hover:border-[#0066FF] hover:text-[#0066FF] transition-all shadow-sm"
          >
            See Our Work
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA
