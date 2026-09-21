import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, EyeOff, Server, FileText, Mail, MapPin } from 'lucide-react'
import { updatePageSEO } from '../utils/seo'

interface PrivacyPolicyProps {
  onNavigateHome: () => void
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    updatePageSEO({
      title: 'Privacy Policy & Industrial Data Protection — PyForge',
      description:
        'Read PyForge’s strict privacy policy regarding automotive manufacturing telemetry, CMM inspection records, non-disclosure agreements, and security.',
      canonical: 'https://pyforge.in/privacy',
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
              <span className="badge-candy bg-[#34D399] text-[#1E293B] text-xs font-black">
                <Shield size={14} strokeWidth={2.5} />
                LEGAL COMPLIANCE · INDUSTRIAL CONFIDENTIALITY
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-black text-[#1E293B]">
              Privacy Policy & Industrial Data Protection
            </h1>
            <p className="text-xs font-bold text-[#64748B] mt-2">
              Effective Date: January 1, 2026 · Last Updated: September 21, 2026
            </p>
          </div>

          <div className="space-y-8 text-xs sm:text-sm text-[#1E293B]/85 font-medium leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="font-heading text-lg sm:text-xl font-black text-[#1E293B] flex items-center gap-2 mb-3">
                <Lock size={18} className="text-[#8B5CF6]" />
                1. Our Core Commitment to Plant Floor Confidentiality
              </h2>
              <p>
                At PyForge (operated by Founder Dhairya Saigal and our engineering team), we recognize that automotive, precision machining, and tooling plants operate under strict proprietary secrets. Whether you share CMM inspection tolerances, monthly out-of-tolerance sheets, machine PLC parameters, or CAD schematics, we treat all client manufacturing data with bank-grade confidentiality and strict bilateral Non-Disclosure Agreements (NDAs).
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-heading text-lg sm:text-xl font-black text-[#1E293B] flex items-center gap-2 mb-3">
                <FileText size={18} className="text-[#8B5CF6]" />
                2. Information We Collect
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-[#1E293B]">Inquiry Details:</strong> When you submit a quote request via our contact form or direct WhatsApp line, we collect your name, corporate/plant email, phone number, company/plant division, and engineering problem description.
                </li>
                <li>
                  <strong className="text-[#1E293B]">Sample Inspection Data:</strong> If provided during feasibility studies (e.g., sample CSVs, inspection PDFs, CMM data), these are stored on encrypted offline storage drives and are never uploaded to public AI models or external clouds.
                </li>
                <li>
                  <strong className="text-[#1E293B]">Anonymous Telemetry:</strong> Minimal, privacy-friendly site usage data (such as page views, button clicks, and browser screen dimensions) used purely to diagnose layout issues.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-heading text-lg sm:text-xl font-black text-[#1E293B] flex items-center gap-2 mb-3">
                <EyeOff size={18} className="text-[#8B5CF6]" />
                3. Zero Commercial Resale Guarantee
              </h2>
              <p>
                We do not sell, license, rent, or trade your contact information, company name, or plant inspection data to third-party advertisers, data brokers, or competitor suppliers. Your data is used exclusively to build, validate, and support your custom software applications.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-heading text-lg sm:text-xl font-black text-[#1E293B] flex items-center gap-2 mb-3">
                <Server size={18} className="text-[#8B5CF6]" />
                4. Offline & Standalone Software Security
              </h2>
              <p>
                The production executables PyForge builds for client plants (such as CMM parsers, OOT trend analyzers, and Cp/Cpk engines) operate 100% offline within your secure local intranet or on air-gapped machine computers. They contain zero unauthorized telemetry or phone-home backdoors.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-heading text-lg sm:text-xl font-black text-[#1E293B] flex items-center gap-2 mb-3">
                <Mail size={18} className="text-[#8B5CF6]" />
                5. Contact & Grievance Officer
              </h2>
              <p className="mb-3">
                For questions regarding this policy, to request mutual NDA execution, or to request complete deletion of shared technical samples, contact us directly:
              </p>
              <div className="p-4 rounded-xl bg-[#FFFDF5] border-2 border-[#1E293B] shadow-pop-sm space-y-1 text-xs">
                <div className="font-black text-[#1E293B]">PyForge Registered Office & Development Studio</div>
                <div className="flex items-center gap-1.5 text-[#64748B]">
                  <MapPin size={13} className="text-[#8B5CF6]" />
                  <span>A-2, 303 Avalon Gardens, Bhiwadi (Registered Office)</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#64748B]">
                  <Mail size={13} className="text-[#8B5CF6]" />
                  <span>Company Email: <a href="mailto:contactpyforge@gmail.com" className="text-[#8B5CF6] hover:underline font-bold">contactpyforge@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-1.5 text-[#64748B]">
                  <Mail size={13} className="text-[#34D399]" />
                  <span>Personal Email: <a href="mailto:saigaldhairya1@gmail.com" className="text-[#34D399] hover:underline font-bold">saigaldhairya1@gmail.com</a></span>
                </div>
                <div className="text-[#64748B]">WhatsApp / Phone: +91 6378753622</div>
              </div>
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

export default PrivacyPolicy
