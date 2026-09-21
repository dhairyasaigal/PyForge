import { motion } from 'framer-motion'

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/916378753622?text=Hi%20PyForge,%20I'm%20interested%20in%20custom%20software%20for%20an%20automobile/mechanical%20project."
      target="_blank"
      rel="noopener noreferrer"
      id="floating-whatsapp-btn"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-[#1E293B] border-2 border-[#1E293B] px-4 py-2.5 rounded-full shadow-pop-lg hover:shadow-pop-xl transition-shadow cursor-pointer font-heading font-black text-xs sm:text-sm select-none"
    >
      <div className="w-7 h-7 rounded-full bg-white border-2 border-[#1E293B] flex items-center justify-center shrink-0">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#1E293B">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.12.17 1.76 2.68 4.25 3.76.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.3" />
        </svg>
      </div>
      <span className="hidden sm:inline">WhatsApp: +91 6378753622</span>
      <span className="sm:hidden font-black">Chat on WhatsApp</span>
    </motion.a>
  )
}

export default WhatsAppButton
