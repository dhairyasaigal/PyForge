import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const HeroEngine = lazy(() => import('./three/HeroEngine'))

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#F0F5FF] to-[#EEF2FF]"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066FF]/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00C8FF]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-24 lg:py-0">
          {/* Left content */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="h-px w-8 bg-[#0066FF]" />
              <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">
                Custom Software · AI · Automation
              </span>
            </motion.div>

            {/* Headline */}
            <div className="flex flex-col gap-1">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-5xl lg:text-7xl font-black text-[#0A1628] leading-[1.05] tracking-tight"
              >
                You Ask It.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C8FF]">
                  We'll Make It
                </span>
                <span className="text-[#0A1628]"> For You.</span>
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg lg:text-xl text-[#0A1628]/60 leading-relaxed max-w-lg"
            >
              From a simple automation to an enterprise-grade application, PyForge turns ideas and real-world problems into working software.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm text-[#0A1628]/50 font-medium"
            >
              You don't need to know what technology to use. Just tell us what you need.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                id="hero-primary-cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 bg-[#0066FF] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#0047CC] transition-colors shadow-xl shadow-blue-500/30"
              >
                Tell Us What You Need
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                id="hero-secondary-cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#our-work')}
                className="flex items-center gap-2 bg-white text-[#0A1628] px-7 py-3.5 rounded-full text-sm font-semibold border border-gray-200 hover:border-[#0066FF] hover:text-[#0066FF] transition-all shadow-sm"
              >
                Explore Our Work
              </motion.button>
            </motion.div>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-2"
            >
              {['Python', 'AI', 'Automation', 'APIs', 'Data', 'Custom Applications'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 bg-white border border-gray-200 text-[#0A1628]/60 rounded-full font-medium shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Three.js Engine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[420px] lg:h-[580px] w-full"
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-[#0066FF]/20 border-t-[#0066FF] rounded-full animate-spin" />
                </div>
              }
            >
              <HeroEngine />
            </Suspense>

            {/* Floating labels */}
            <div className="absolute top-8 left-0 pointer-events-none">
              <div className="text-xs font-semibold text-[#0A1628]/40 tracking-widest uppercase mb-2">Your Idea</div>
              <div className="flex flex-col gap-1.5">
                {['Automate my reports', 'Build an AI assistant', 'Create a dashboard'].map((idea, i) => (
                  <motion.div
                    key={idea}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: [0, 0.7, 0], x: 0 }}
                    transition={{ duration: 3, delay: 2 + i * 1.5, repeat: Infinity, repeatDelay: 6 }}
                    className="text-xs bg-white border border-[#0066FF]/20 text-[#0066FF] px-3 py-1.5 rounded-lg shadow-sm font-medium"
                  >
                    {idea}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute top-8 right-0 pointer-events-none text-right">
              <div className="text-xs font-semibold text-[#0A1628]/40 tracking-widest uppercase mb-2">Your Solution</div>
              <div className="flex flex-col gap-1.5 items-end">
                {['Application', 'AI System', 'Automation'].map((sol, i) => (
                  <motion.div
                    key={sol}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: [0, 0.7, 0], x: 0 }}
                    transition={{ duration: 3, delay: 3 + i * 1.5, repeat: Infinity, repeatDelay: 6 }}
                    className="text-xs bg-white border border-[#00C8FF]/30 text-[#00a8d4] px-3 py-1.5 rounded-lg shadow-sm font-medium"
                  >
                    {sol}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#what-we-do')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#0A1628]/30 hover:text-[#0066FF] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero
