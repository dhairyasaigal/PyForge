import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Scale, Code2, AlertOctagon, CheckCircle2, ShieldAlert } from 'lucide-react'
import { updatePageSEO } from '../utils/seo'

interface TermsConditionsProps {
  onNavigateHome: () => void
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    updatePageSEO({
      title: 'Terms & Conditions — PyForge Custom Engineering Applications',
      description:
        'Standard operational terms, licensing, machine safety disclaimers, and service agreements for PyForge custom software.',
      canonical: 'https://pyforge.in/terms',
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#1E293B] py-16 px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Top Back Navigation */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#8B5CF6] hover:text-[#7C3AED] mb-8 cursor-pointer"
        >
          <ArrowLeft size={16} strokeWidth={2.5} />
          Back to PyForge Main Site
        </button>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="card-sticker p-8 sm:p-12 bg-white border-2 border-[#1E293B] shadow-pop-xl"
        >
          {/* Header */}
          <div className="border-b-2 border-[#1E293B]/10 pb-6 mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="badge-candy bg-[#FBBF24] text-[#1E293B] text-xs font-black">
                <Scale size={14} strokeWidth={2.5} />
                TERMS OF ENGINEERING ENGAGEMENT
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-black text-[#1E293B]">
              Terms & Conditions of Service
            </h1>
            <p className="text-xs font-bold text-[#64748B] mt-2">
              Effective Date: January 1, 2026 · Last Updated: September 21, 2026
            </p>
          </div>

          <div className="space-y-8 text-xs sm:text-sm text-[#1E293B]/85 font-medium leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="font-heading text-lg sm:text-xl font-black text-[#1E293B] flex items-center gap-2 mb-3">
                <Code2 size={18} className="text-[#8B5CF6]" />
                1. Scope of Engineering Services
              </h2>
              <p>
                PyForge develops bespoke, tailor-made Python software applications, offline standalone desktop executables (`.exe`), CMM report parsers, CAN-bus telemetry dashboards, and plant-floor automation scripts based upon client specifications provided during initial technical consultations.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-heading text-lg sm:text-xl font-black text-[#1E293B] flex items-center gap-2 mb-3">
                <CheckCircle2 size={18} className="text-[#8B5CF6]" />
                2. Software Delivery & Intellectual Property
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-[#1E293B]">Zero Recurring SaaS Lock-in:</strong> PyForge provides perpetual, standalone software builds that operate without mandatory ongoing cloud subscriptions.
                </li>
                <li>
                  <strong className="text-[#1E293B]">Client IP Ownership:</strong> Upon full settlement of contracted milestone invoices, the client retains full ownership of custom application scripts and plant-specific workflows created exclusively for their operations.
                </li>
                <li>
                  <strong className="text-[#1E293B]">PyForge Core Libraries:</strong> General-purpose math utilities, UI scaffolds, and proprietary algorithm engines remain the foundational IP of PyForge, licensed perpetually and non-exclusively to the client for plant operations.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-heading text-lg sm:text-xl font-black text-[#1E293B] flex items-center gap-2 mb-3">
                <AlertOctagon size={18} className="text-red-600" />
                3. Physical Machine & Hardware Safety Disclaimer
              </h2>
              <p>
                While PyForge tools rigorously validate mathematical formulas, CMM calculations, and communication protocols (e.g., RS-232, Serial, TCP/IP), physical line operators and certified plant metrologists remain ultimately responsible for safety stops, CNC feed overrides, machine guarding, and mechanical calibration on live manufacturing floors.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-heading text-lg sm:text-xl font-black text-[#1E293B] flex items-center gap-2 mb-3">
                <ShieldAlert size={18} className="text-[#8B5CF6]" />
                4. Warranty & Defect Remediation
              </h2>
              <p>
                PyForge offers an active 90-day post-deployment bug-fix guarantee on all custom software milestones. Any calculation discrepancy, CMM format mismatch, or script runtime exception identified during normal plant operations will be debugged and hotfixed at zero additional cost.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-heading text-lg sm:text-xl font-black text-[#1E293B] flex items-center gap-2 mb-3">
                <Scale size={18} className="text-[#8B5CF6]" />
                5. Jurisdiction & Governing Law
              </h2>
              <p>
                These terms and all commercial engineering agreements executed with PyForge are governed by the laws of India, with exclusive jurisdiction in the courts of Bhiwadi / Delhi NCR.
              </p>
            </section>
          </div>

          {/* Bottom Back Button */}
          <div className="mt-10 pt-6 border-t-2 border-[#1E293B]/10">
            <button
              onClick={onNavigateHome}
              className="btn-candy bg-[#8B5CF6] text-white hover:bg-[#7C3AED] shadow-pop py-3 px-6 text-xs font-black cursor-pointer"
            >
              ← Back to Homepage
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsConditions
