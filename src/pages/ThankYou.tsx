import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, MessageCircle, ArrowLeft, Clock, ShieldCheck, Mail } from 'lucide-react'
import { updatePageSEO } from '../utils/seo'
import { trackEvent } from '../utils/analytics'

interface ThankYouProps {
  onNavigateHome: () => void
}

const ThankYou: React.FC<ThankYouProps> = ({ onNavigateHome }) => {
  const [refId] = useState(() => `PF-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`)

  useEffect(() => {
    updatePageSEO({
      title: 'Query Received — PyForge Engineering Team',
      description: 'Your automotive software inquiry has been logged. Our engineering lead will review your CMM and tooling parameters.',
      canonical: 'https://pyforge.in/thank-you',
    })
    trackEvent('Contact', 'thank_you_viewed', refId)
  }, [refId])

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 py-20 bg-[#FFFDF5] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid-subtle opacity-40 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card-sticker max-w-2xl w-full p-8 sm:p-12 bg-white border-2 border-[#1E293B] shadow-pop-xl relative z-10"
      >
        {/* Success Badge */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="badge-candy bg-[#34D399] text-[#1E293B] text-xs font-black">
            <CheckCircle2 size={15} strokeWidth={2.5} />
            ENGINEERING INQUIRY LOGGED
          </span>
          <span className="text-xs font-mono font-black text-[#8B5CF6] bg-[#8B5CF6]/10 px-2.5 py-1 rounded-md border border-[#8B5CF6]/30">
            REF: #{refId}
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl font-black text-[#1E293B] leading-tight mb-4">
          We've Received Your Machine Blueprint.
        </h1>

        <p className="text-sm sm:text-base text-[#1E293B]/80 font-medium leading-relaxed mb-8">
          Thank you for trusting PyForge. Your inspection automation or custom Python engineering requirement has been routed directly to our engineering team.
        </p>

        {/* 3 Step Timeline of Next Actions */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[#FFFDF5] border-2 border-[#1E293B] shadow-pop-sm">
            <div className="w-8 h-8 rounded-lg bg-[#8B5CF6] text-white flex items-center justify-center font-black text-sm mb-2">
              1
            </div>
            <h4 className="font-heading font-black text-xs text-[#1E293B] mb-1">Architecture Review</h4>
            <p className="text-[11px] text-[#64748B] font-medium leading-normal">
              We analyze your CMM, machine controller, or sensor specs under strict confidentiality.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FFFDF5] border-2 border-[#1E293B] shadow-pop-sm">
            <div className="w-8 h-8 rounded-lg bg-[#FBBF24] text-[#1E293B] flex items-center justify-center font-black text-sm mb-2">
              2
            </div>
            <h4 className="font-heading font-black text-xs text-[#1E293B] mb-1">Direct Callback</h4>
            <p className="text-[11px] text-[#64748B] font-medium leading-normal">
              Founder Dhairya Saigal will reach out via WhatsApp / phone to discuss exact machine logic.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FFFDF5] border-2 border-[#1E293B] shadow-pop-sm">
            <div className="w-8 h-8 rounded-lg bg-[#34D399] text-[#1E293B] flex items-center justify-center font-black text-sm mb-2">
              3
            </div>
            <h4 className="font-heading font-black text-xs text-[#1E293B] mb-1">Prototype Demo</h4>
            <p className="text-[11px] text-[#64748B] font-medium leading-normal">
              We provide a working standalone executable prototype demonstrating live calculation.
            </p>
          </div>
        </div>

        {/* SLA Callout */}
        <div className="p-4 rounded-xl bg-[#8B5CF6]/10 border-2 border-[#8B5CF6] mb-8 flex items-center gap-3.5">
          <Clock size={20} className="text-[#8B5CF6] shrink-0" />
          <div className="text-xs text-[#1E293B] font-medium">
            <strong className="font-bold text-[#8B5CF6]">Response SLA:</strong> Inquiries are typically reviewed within{' '}
            <span className="font-black text-[#1E293B]">2 to 4 hours</span> during active office hours (09:30 – 18:30 IST).
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 flex-wrap justify-center">
          <a
            href={`https://wa.me/916378753622?text=Hi%20PyForge,%20I%20just%20submitted%20an%20engineering%20query%20(Ref:%20${refId}).%20Can%20we%20connect%20now?`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('WhatsApp', 'thank_you_escalate', refId)}
            className="w-full sm:w-auto btn-candy bg-[#34D399] text-[#1E293B] hover:bg-[#10B981] shadow-pop flex items-center justify-center gap-2 text-sm font-black py-3 px-6"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            Fast-Track on WhatsApp
          </a>

          <a
            href="mailto:contactpyforge@gmail.com?cc=saigaldhairya1@gmail.com&subject=PyForge%20Engineering%20Query%20Followup"
            className="w-full sm:w-auto btn-candy bg-[#8B5CF6] text-white hover:bg-[#7C3AED] shadow-pop flex items-center justify-center gap-2 text-sm font-black py-3 px-6"
          >
            <Mail size={16} strokeWidth={2.5} />
            Open Mail App
          </a>

          <button
            onClick={onNavigateHome}
            className="w-full sm:w-auto btn-candy bg-white text-[#1E293B] border-2 border-[#1E293B] hover:bg-slate-50 shadow-pop flex items-center justify-center gap-2 text-sm font-black py-3 px-6 cursor-pointer"
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
            Return to Homepage
          </button>
        </div>

        {/* Confidentiality Reminder */}
        <div className="mt-8 pt-6 border-t-2 border-[#1E293B]/10 flex items-center gap-2 text-xs font-bold text-[#64748B]">
          <ShieldCheck size={16} className="text-[#34D399]" />
          <span>All technical drawings, CAD parameters, and CMM inspection records are protected under bilateral NDA.</span>
        </div>
      </motion.div>
    </div>
  )
}

export default ThankYou
