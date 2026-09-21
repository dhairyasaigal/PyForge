import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Wrench } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

interface NavbarProps {
  onNavigateHome?: () => void
  isSubPage?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, isSubPage }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    if (isSubPage && onNavigateHome) {
      onNavigateHome()
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return
    }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFDF5]/95 backdrop-blur-md border-b-2 border-[#1E293B] shadow-pop-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            aria-label="PyForge Home"
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="PyForge official logo - Custom Python software for automobile and mechanical industry"
                className="h-10 w-10 rounded-full object-cover border-2 border-[#1E293B] shadow-pop-sm transition-transform duration-200 group-hover:scale-105"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#FBBF24] border border-[#1E293B] flex items-center justify-center">
                <Wrench size={9} strokeWidth={3} className="text-[#1E293B]" />
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading text-2xl font-black tracking-tight text-[#1E293B]">
                Py<span className="text-[#8B5CF6]">Forge</span>
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#64748B] -mt-1 hidden sm:block">
                Automobile & Mechanical AI
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2 bg-white/80 border-2 border-[#1E293B] px-3 py-1.5 rounded-full shadow-pop-sm" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-heading text-xs font-bold text-[#1E293B] px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-[#FBBF24] hover:text-[#1E293B]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-candy px-5 py-2.5 text-xs tracking-wide"
              id="navbar-cta"
            >
              <span>Get Custom Quote</span>
              <span className="w-5 h-5 rounded-full bg-white text-[#1E293B] flex items-center justify-center">
                <ArrowRight size={12} strokeWidth={3} />
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl border-2 border-[#1E293B] bg-white text-[#1E293B] shadow-pop-sm hover:bg-[#FBBF24] transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden px-6 pt-3 pb-6"
          >
            <div className="bg-white border-2 border-[#1E293B] rounded-2xl p-5 shadow-pop-lg flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left py-2.5 px-3 font-heading text-sm font-bold text-[#1E293B] hover:bg-[#FBBF24] rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t-2 border-[#1E293B]/10">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full btn-candy py-3 text-xs justify-center"
                  id="mobile-cta"
                >
                  <span>Request Custom Quote</span>
                  <span className="w-5 h-5 rounded-full bg-white text-[#1E293B] flex items-center justify-center">
                    <ArrowRight size={12} strokeWidth={3} />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
