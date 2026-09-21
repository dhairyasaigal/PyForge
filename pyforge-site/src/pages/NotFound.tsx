import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, AlertTriangle, Cpu } from 'lucide-react'
import { updatePageSEO } from '../utils/seo'
import { trackEvent } from '../utils/analytics'

interface NotFoundProps {
  onNavigateHome: () => void
}

const NotFound: React.FC<NotFoundProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    updatePageSEO({
      title: '404 — Blueprint Not Found | PyForge',
      description: 'The requested engineering blueprint, machine route, or tool does not exist.',
      canonical: 'https://pyforge.in/404',
    })
    trackEvent('Navigation', '404_viewed', window.location.pathname)
  }, [])

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 py-20 bg-[#FFFDF5] relative overflow-hidden">
      {/* Background dot grid pattern */}
      <div className="absolute inset-0 bg-dot-grid-subtle opacity-40 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card-sticker max-w-xl w-full p-8 sm:p-12 bg-white border-2 border-[#1E293B] shadow-pop-xl text-center relative z-10"
      >
        {/* Error Code Pill */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="badge-candy bg-red-100 text-red-700 text-xs font-black">
            <AlertTriangle size={14} strokeWidth={2.5} />
            ERROR 404 · OUT-OF-TOLERANCE
          </span>
        </div>

        {/* Big Glitch/Neo Heading */}
        <div className="relative mb-6">
          <h1 className="font-heading text-7xl sm:text-8xl font-black text-[#1E293B] tracking-tight">
            4<span className="text-[#8B5CF6]">0</span>4
          </h1>
          <p className="font-heading text-xl sm:text-2xl font-black text-[#1E293B] mt-2">
            Blueprint Not Found on Shop Floor
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#1E293B]/75 font-medium leading-relaxed mb-8">
          The machine route or document you attempted to access does not exist or has been recalibrated. Let's get you back to our production systems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onNavigateHome}
            className="w-full sm:w-auto btn-candy bg-[#8B5CF6] text-white hover:bg-[#7C3AED] shadow-pop flex items-center justify-center gap-2 text-sm font-black py-3 px-6 cursor-pointer"
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
            Return to Factory Floor
          </button>

          <a
            href="https://wa.me/916378753622?text=Hi%20PyForge,%20I%20hit%20a%20broken%20link%20on%20your%20site."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('WhatsApp', '404_report', 'whatsapp_click')}
            className="w-full sm:w-auto btn-candy bg-[#34D399] text-[#1E293B] hover:bg-[#10B981] shadow-pop flex items-center justify-center gap-2 text-sm font-black py-3 px-6"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            Report Broken Route
          </a>
        </div>

        {/* Footer Meta */}
        <div className="mt-10 pt-6 border-t-2 border-[#1E293B]/10 flex items-center justify-center gap-2 text-xs font-bold text-[#64748B]">
          <Cpu size={14} className="text-[#8B5CF6]" />
          <span>PyForge Industrial Telemetry Node · Bhiwadi Hub</span>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound
