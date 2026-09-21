import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Check, ShieldCheck } from 'lucide-react'
import { trackEvent } from '../utils/analytics'

interface CookieBannerProps {
  onOpenPrivacyPolicy: () => void
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacyPolicy }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('pyforge_cookie_consent')
    if (!consent) {
      // Delay presentation slightly so it doesn't jarringly block the initial load
      const timer = setTimeout(() => setIsVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('pyforge_cookie_consent', 'accepted')
    trackEvent('Consent', 'cookie_accepted', 'all')
    setIsVisible(false)
  }

  const handleEssentialOnly = () => {
    localStorage.setItem('pyforge_cookie_consent', 'essential')
    trackEvent('Consent', 'cookie_essential', 'essential_only')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 pointer-events-auto"
        >
          <div className="card-sticker p-5 bg-white border-2 border-[#1E293B] shadow-pop-xl relative">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FBBF24] border-2 border-[#1E293B] flex items-center justify-center shrink-0 shadow-pop-sm text-[#1E293B]">
                <Cookie size={20} strokeWidth={2.5} />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-heading font-black text-sm text-[#1E293B]">
                    Industrial Telemetry & Cookies
                  </h4>
                  <button
                    onClick={handleEssentialOnly}
                    className="text-[#64748B] hover:text-[#1E293B] p-1 rounded transition-colors cursor-pointer"
                    aria-label="Dismiss cookie notice"
                  >
                    <X size={15} />
                  </button>
                </div>

                <p className="text-xs text-[#1E293B]/80 font-medium leading-relaxed mb-3">
                  We use minimal cookies and telemetry to measure project inquiry flow and optimize our custom Python software interfaces.{' '}
                  <button
                    onClick={onOpenPrivacyPolicy}
                    className="text-[#8B5CF6] font-bold underline hover:text-[#7C3AED] cursor-pointer"
                  >
                    Read Privacy Policy
                  </button>.
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={handleAcceptAll}
                    className="btn-candy bg-[#34D399] text-[#1E293B] hover:bg-[#10B981] shadow-pop-sm py-1.5 px-3 text-xs font-black flex items-center gap-1.5 cursor-pointer"
                  >
                    <Check size={14} strokeWidth={3} />
                    Accept All
                  </button>

                  <button
                    onClick={handleEssentialOnly}
                    className="btn-candy bg-white text-[#1E293B] border-2 border-[#1E293B] hover:bg-slate-50 shadow-pop-sm py-1.5 px-3 text-xs font-bold cursor-pointer"
                  >
                    Essential Only
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-[#1E293B]/10 flex items-center gap-1.5 text-[10px] font-bold text-[#64748B]">
              <ShieldCheck size={12} className="text-[#34D399]" />
              <span>Zero advertising cookies · Never sold to competitors</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner
