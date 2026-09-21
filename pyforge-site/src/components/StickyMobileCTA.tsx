import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react'
import { trackEvent } from '../utils/analytics'

interface StickyMobileCTAProps {
  onScrollToContact: () => void
}

const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onScrollToContact }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA once user scrolls past the hero section (> 350px)
      if (window.scrollY > 350) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-[#1E293B] px-3 py-2.5 shadow-pop-lg"
    >
      <div className="flex items-center gap-2">
        {/* Fast WhatsApp Chat */}
        <a
          href="https://wa.me/916378753622?text=Hi%20PyForge,%20I%20want%20to%20discuss%20a%20software%20requirement%20for%20our%20operations."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('WhatsApp', 'sticky_mobile_click', '6378753622')}
          className="flex-1 btn-candy bg-[#34D399] text-[#1E293B] py-2.5 px-3 rounded-xl border-2 border-[#1E293B] shadow-pop-sm flex items-center justify-center gap-1.5 text-xs font-black"
        >
          <MessageCircle size={15} strokeWidth={2.5} />
          <span>WhatsApp Direct</span>
        </a>

        {/* Request Engineering Quote */}
        <button
          onClick={() => {
            trackEvent('CTA', 'sticky_mobile_quote_click')
            onScrollToContact()
          }}
          className="flex-1 btn-candy bg-[#8B5CF6] text-white py-2.5 px-3 rounded-xl border-2 border-[#1E293B] shadow-pop-sm flex items-center justify-center gap-1.5 text-xs font-black cursor-pointer"
        >
          <Sparkles size={14} className="text-[#FBBF24]" />
          <span>Request Quote</span>
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </motion.div>
  )
}

export default StickyMobileCTA
