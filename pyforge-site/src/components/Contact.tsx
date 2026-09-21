import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Paperclip, Link2, GitBranch, Mail, Loader2, DollarSign, AlertCircle, MapPin, Clock, Phone, ShieldCheck, ExternalLink } from 'lucide-react'
import { trackEvent } from '../utils/analytics'
import {
  openMailClient,
  generateMailtoUrl,
  generateGmailWebUrl,
} from '../utils/mailHelper'

interface ContactProps {
  onNavigateThankYou?: () => void
  onNavigatePrivacy?: () => void
}

const automotiveSolutionChips = [
  'Custom Project Pricing Quote',
  'CMM & Metrology Automator',
  'CAN-Bus / Dyno Logger',
  'CAD / CAM Scripting Tool',
  'OpenCV Vision QA Scanner',
  'Mechanical Math Solver',
  'Sensor DAQ / Test-Rig GUI',
  'Other Custom Engineering Tool',
]

const automotiveSectors = [
  'Automotive Quality & CMM Inspection Lab',
  'Powertrain & Engine Dyno Testing Cell',
  'Precision CNC & Tooling Workshop',
  'Sheet Metal Stamping Press Shop',
  'Component Fatigue & Test Rig Bench',
  'Automotive Component Supplier (Tier 1/2)',
  'Mechanical Design & R&D Office',
  'Other Mechanical / Automotive Facility',
]

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  what_to_build?: string
  consent?: string
}

const Contact: React.FC<ContactProps> = ({ onNavigateThankYou, onNavigatePrivacy }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedChips, setSelectedChips] = useState<string[]>(['Pricing & Project Quote'])
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formErrors, setFormErrors] = useState<FormErrors>({})

  // Form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    what_to_build: '',
    timeline: '',
    budget: '',
    consent: false,
  })

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meaojpje'

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    )
  }

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please enter your full name (minimum 2 characters).'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid work or corporate email address.'
    }

    const cleanPhone = formData.phone.replace(/[^0-9+]/g, '')
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = 'Please provide a valid contact/WhatsApp phone number (min 10 digits).'
    }

    if (!formData.what_to_build.trim() || formData.what_to_build.trim().length < 15) {
      errors.what_to_build = 'Please describe your machine/software requirement in at least 15 characters.'
    }

    if (!formData.consent) {
      errors.consent = 'You must agree to confidential engineering review & privacy terms.'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const [mailRoutingLinks, setMailRoutingLinks] = useState<{ mailto: string; gmail: string } | null>(null)

  const buildMailPayload = () => {
    const subject = `[PyForge Project Inquiry] ${formData.name || 'Client'} - ${formData.company || 'Custom Software'}`
    const body = `Hi PyForge Engineering Team,

I have an engineering/software requirement and would like to receive a scope and pricing quote.

--- CLIENT CONTACT ---
Name: ${formData.name}
Work Email: ${formData.email}
Phone / WhatsApp: ${formData.phone}
Company / Organization: ${formData.company || 'Not Specified'}
Industry Sector: ${formData.industry || 'Not Specified'}

--- CAPABILITIES REQUESTED ---
${selectedChips.join(', ') || 'Custom Project Quote'}

--- REQUIREMENT & BOTTLENECK DESCRIPTION ---
${formData.what_to_build}

--- PROJECT TIMELINE & BUDGET ---
Target Timeline: ${formData.timeline || 'Flexible'}
Estimated Budget: ${formData.budget || 'To be discussed'}

Sent from PyForge Official Website
`
    return { subject, body }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!validateForm()) {
      trackEvent('Contact', 'form_validation_failed')
      return
    }

    setIsLoading(true)
    trackEvent('Contact', 'form_submission_started')

    const { subject, body } = buildMailPayload()
    const mailtoUrl = generateMailtoUrl({ subject, body })
    const gmailUrl = generateGmailWebUrl({ subject, body })
    setMailRoutingLinks({ mailto: mailtoUrl, gmail: gmailUrl })

    // Instantly route to mail client / mail application
    try {
      openMailClient({ subject, body })
    } catch {
      // ignore
    }

    // Also attempt Formspree in background if reachable
    try {
      const data = new FormData()
      data.append('name', formData.name)
      data.append('email', formData.email)
      data.append('phone', formData.phone)
      data.append('company', formData.company)
      data.append('industry', formData.industry)
      data.append('what_to_build', formData.what_to_build)
      data.append('timeline', formData.timeline)
      data.append('budget', formData.budget)
      data.append('solution_types', selectedChips.join(', ') || 'Pricing & Project Quote')

      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
    } catch {
      // Graceful fallback - mailto handles transmission
    } finally {
      setIsLoading(false)
      setSubmitted(true)
      trackEvent('Contact', 'form_submission_success')
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FFFDF5] relative overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 bg-dot-grid-subtle opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative" ref={ref}>
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="badge-candy bg-[#8B5CF6] text-white">
              Hit Us With Your Query
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight mb-4"
          >
            Looking for Pricing? <br />
            <span className="text-[#8B5CF6]">Hit Us With Your Project Query.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base text-[#1E293B]/75 font-medium leading-relaxed"
          >
            Every automotive and mechanical build has specific machine tolerances, sensor formats, and test rig protocols. 
            Send us your problem description and we will return a <strong>transparent scope, timeline, and fixed quote within 24 hours</strong>.
          </motion.p>
        </div>

        {/* Pricing Notice & WhatsApp Direct Action */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="bg-[#FEF3C7] border-2 border-[#1E293B] rounded-2xl p-4 shadow-pop-sm flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-[#FBBF24] border-2 border-[#1E293B] flex items-center justify-center shrink-0">
              <DollarSign size={18} strokeWidth={3} className="text-[#1E293B]" />
            </div>
            <div className="text-xs font-bold text-[#1E293B]">
              <strong>Fast 24-hr Quote:</strong> Fill out the form below with your machine specifications for a transparent engineering quote.
            </div>
          </motion.div>

          <motion.a
            href="https://wa.me/916378753622?text=Hi%20PyForge,%20I%20have%20an%20automobile/mechanical%20software%20requirement%20and%20would%20like%20to%20discuss%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-[#25D366] text-[#1E293B] border-2 border-[#1E293B] rounded-2xl p-4 shadow-pop-sm flex items-center justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-pop transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border-2 border-[#1E293B] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1E293B">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.12.17 1.76 2.68 4.25 3.76.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.3" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#1E293B]">Instant WhatsApp Chat</div>
                <div className="text-xs font-bold text-[#1E293B]/90">+91 6378753622</div>
              </div>
            </div>
            <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Form Container */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-3xl border-2 border-[#1E293B] p-8 lg:p-10 shadow-pop-xl flex flex-col gap-6"
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-black uppercase tracking-wider text-[#1E293B] flex items-center justify-between">
                    <span>Your Name *</span>
                    {formErrors.name && (
                      <span className="text-red-600 font-bold text-[11px] flex items-center gap-1">
                        <AlertCircle size={12} /> Required
                      </span>
                    )}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (formErrors.name) setFormErrors({ ...formErrors, name: undefined })
                    }}
                    placeholder="e.g. Ramesh Kumar"
                    className={`input-neo ${formErrors.name ? 'border-red-500 bg-red-50/40 focus:ring-red-500' : ''}`}
                  />
                  {formErrors.name && (
                    <p className="text-[11px] text-red-600 font-bold">{formErrors.name}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-black uppercase tracking-wider text-[#1E293B] flex items-center justify-between">
                    <span>Work / Official Email *</span>
                    {formErrors.email && (
                      <span className="text-red-600 font-bold text-[11px] flex items-center gap-1">
                        <AlertCircle size={12} /> Invalid
                      </span>
                    )}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (formErrors.email) setFormErrors({ ...formErrors, email: undefined })
                    }}
                    placeholder="e.g. ramesh@autocomponents.com"
                    className={`input-neo ${formErrors.email ? 'border-red-500 bg-red-50/40 focus:ring-red-500' : ''}`}
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-red-600 font-bold">{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone/WhatsApp + Company */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-black uppercase tracking-wider text-[#1E293B] flex items-center justify-between">
                    <span>Phone / WhatsApp Number *</span>
                    {formErrors.phone && (
                      <span className="text-red-600 font-bold text-[11px] flex items-center gap-1">
                        <AlertCircle size={12} /> Required
                      </span>
                    )}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value })
                      if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined })
                    }}
                    placeholder="e.g. +91 98765 43210"
                    className={`input-neo ${formErrors.phone ? 'border-red-500 bg-red-50/40 focus:ring-red-500' : ''}`}
                  />
                  {formErrors.phone && (
                    <p className="text-[11px] text-red-600 font-bold">{formErrors.phone}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-company" className="text-xs font-black uppercase tracking-wider text-[#1E293B]">
                    Company / Organization Name <span className="text-[#64748B] font-medium">(optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Precision Engineering"
                    className="input-neo"
                  />
                </div>
              </div>

              {/* Industry Sector */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-industry" className="text-xs font-black uppercase tracking-wider text-[#1E293B]">
                  Industry Sector
                </label>
                <select
                  id="contact-industry"
                  name="industry"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="input-neo bg-white font-medium cursor-pointer"
                >
                  <option value="">Select your sector</option>
                  {automotiveSectors.map((sec) => (
                    <option key={sec} value={sec}>{sec}</option>
                  ))}
                </select>
              </div>

              {/* Solution Type Chips */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-wider text-[#1E293B]">
                  What type of solution or query are you inquiring about?
                </label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {automotiveSolutionChips.map((chip) => {
                    const selected = selectedChips.includes(chip)
                    return (
                      <button
                        key={chip}
                        type="button"
                        id={`chip-${chip.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`}
                        onClick={() => toggleChip(chip)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-black border-2 border-[#1E293B] transition-all cursor-pointer ${
                          selected
                            ? 'bg-[#8B5CF6] text-white shadow-pop-sm -translate-y-0.5'
                            : 'bg-[#FFFDF5] text-[#1E293B] hover:bg-[#FBBF24]'
                        }`}
                      >
                        {chip}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Problem Description */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-description" className="text-xs font-black uppercase tracking-wider text-[#1E293B] flex items-center justify-between">
                  <span>Describe Your Problem, Machine, or Pricing Query *</span>
                  {formErrors.what_to_build && (
                    <span className="text-red-600 font-bold text-[11px] flex items-center gap-1">
                      <AlertCircle size={12} /> Min 15 chars
                    </span>
                  )}
                </label>
                <textarea
                  id="contact-description"
                  name="what_to_build"
                  rows={4}
                  value={formData.what_to_build}
                  onChange={(e) => {
                    setFormData({ ...formData, what_to_build: e.target.value })
                    if (formErrors.what_to_build) setFormErrors({ ...formErrors, what_to_build: undefined })
                  }}
                  placeholder="Tell us what you want to automate, measure, log, or calculate. E.g. 'We need to parse CMM inspection coordinate reports every shift and email out of tolerance alerts', or 'We need a CAN bus logger for our EV motor dyno'..."
                  className={`input-neo resize-none ${formErrors.what_to_build ? 'border-red-500 bg-red-50/40 focus:ring-red-500' : ''}`}
                />
                {formErrors.what_to_build && (
                  <p className="text-[11px] text-red-600 font-bold">{formErrors.what_to_build}</p>
                )}
              </div>

              {/* Timeline & Target Budget */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-timeline" className="text-xs font-black uppercase tracking-wider text-[#1E293B]">
                    Desired Delivery Timeline <span className="text-[#64748B] font-medium">(optional)</span>
                  </label>
                  <input
                    id="contact-timeline"
                    name="timeline"
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g. 2 - 4 weeks"
                    className="input-neo"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-budget" className="text-xs font-black uppercase tracking-wider text-[#1E293B]">
                    Estimated Budget Range <span className="text-[#64748B] font-medium">(optional)</span>
                  </label>
                  <input
                    id="contact-budget"
                    name="budget"
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="e.g. ₹25,000 - ₹1,50,000"
                    className="input-neo"
                  />
                </div>
              </div>

              {/* Attachment */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black uppercase tracking-wider text-[#1E293B]">
                  Attach Sample Specs or Format <span className="text-[#64748B] font-medium">(optional - sample PDF, Excel, or CAD)</span>
                </label>
                <label
                  htmlFor="contact-attachment"
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-dashed border-[#1E293B] bg-[#FFFDF5] text-xs font-bold text-[#1E293B] hover:bg-[#FEF3C7] cursor-pointer transition-all"
                >
                  <Paperclip size={16} strokeWidth={2.5} className="text-[#8B5CF6]" />
                  {fileName ? (
                    <span className="text-[#1E293B] font-black">{fileName}</span>
                  ) : (
                    <span>Click to attach sample coordinate file, telemetry log, or brief</span>
                  )}
                  <input
                    id="contact-attachment"
                    type="file"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                  />
                </label>
              </div>

              {/* NDA & Privacy Consent Checkbox */}
              <div className="flex flex-col gap-1 pt-1">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => {
                      setFormData({ ...formData, consent: e.target.checked })
                      if (formErrors.consent) setFormErrors({ ...formErrors, consent: undefined })
                    }}
                    className="w-4 h-4 mt-0.5 rounded border-2 border-[#1E293B] text-[#8B5CF6] focus:ring-[#8B5CF6] cursor-pointer"
                  />
                  <span className="text-xs text-[#1E293B]/85 font-medium leading-tight">
                    I agree to the confidential processing of our machine parameters under bilateral NDA in accordance with the{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        if (onNavigatePrivacy) onNavigatePrivacy()
                      }}
                      className="text-[#8B5CF6] font-bold underline hover:text-[#7C3AED] cursor-pointer"
                    >
                      Privacy Policy
                    </button>.
                  </span>
                </label>
                {formErrors.consent && (
                  <p className="text-[11px] text-red-600 font-bold pl-7">{formErrors.consent}</p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  id="contact-submit"
                  type="submit"
                  disabled={isLoading}
                  className="btn-candy px-8 py-4 text-base justify-center cursor-pointer flex-1"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Routing To Your Mail App...</span>
                    </>
                  ) : (
                    <>
                      <Mail size={18} strokeWidth={2.5} />
                      <span>Send Query & Route to Mail</span>
                      <span className="w-6 h-6 rounded-full bg-white text-[#1E293B] flex items-center justify-center shadow-sm ml-auto sm:ml-0">
                        <ArrowRight size={14} strokeWidth={3} />
                      </span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const { subject, body } = buildMailPayload()
                    const gmailUrl = generateGmailWebUrl({ subject, body })
                    window.open(gmailUrl, '_blank')
                  }}
                  className="btn-candy-secondary px-5 py-4 text-xs font-bold flex items-center justify-center gap-2 bg-white cursor-pointer hover:bg-[#FBBF24]"
                  title="Open directly in Gmail web composer"
                >
                  <ExternalLink size={15} strokeWidth={2.5} className="text-[#8B5CF6]" />
                  <span>Open in Gmail Web</span>
                </button>
              </div>

              {error && (
                <p className="text-xs text-red-600 font-bold mt-1">{error}</p>
              )}
              <p className="text-[11px] text-[#64748B] font-semibold flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#34D399]" />
                Direct routing to Founder Dhairya Saigal (Official & Personal inboxes). Fast 24-hour turnaround.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FFFDF5] border-2 border-[#1E293B] rounded-3xl p-8 sm:p-10 text-center shadow-pop-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#34D399] border-2 border-[#1E293B] flex items-center justify-center mx-auto mb-4 shadow-pop-sm">
                <Mail size={32} strokeWidth={2.5} className="text-[#1E293B]" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#1E293B] mb-2">
                Your Query Is Routing To The Mail Client!
              </h3>
              <p className="text-[#1E293B]/85 font-bold text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
                We've formatted your engineering requirements and routed them directly to{' '}
                <span className="text-[#8B5CF6] underline font-black">contactpyforge@gmail.com</span> with CC to{' '}
                <span className="text-[#34D399] underline font-black">saigaldhairya1@gmail.com</span>. Click below if your mail client didn't open automatically:
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <a
                  href={mailRoutingLinks?.mailto || generateMailtoUrl(buildMailPayload())}
                  className="btn-candy bg-[#8B5CF6] text-white hover:bg-[#7C3AED] px-5 py-3 text-xs font-black flex items-center gap-2"
                >
                  <Mail size={15} strokeWidth={2.5} />
                  <span>Open Default Mail App</span>
                </a>

                <a
                  href={mailRoutingLinks?.gmail || generateGmailWebUrl(buildMailPayload())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-candy bg-[#FBBF24] text-[#1E293B] hover:bg-[#F59E0B] px-5 py-3 text-xs font-black flex items-center gap-2"
                >
                  <ExternalLink size={15} strokeWidth={2.5} />
                  <span>Open in Gmail (Web)</span>
                </a>

                <a
                  href={`https://wa.me/916378753622?text=Hi%20PyForge,%20I%20just%20sent%20an%20engineering%20query%20for%20${encodeURIComponent(formData.name || 'our project')}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-candy bg-[#25D366] text-[#1E293B] hover:bg-[#128C7E] hover:text-white px-5 py-3 text-xs font-black flex items-center gap-2"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.12.17 1.76 2.68 4.25 3.76.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.3" />
                  </svg>
                  <span>WhatsApp Backup</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t-2 border-[#1E293B]/10 text-xs font-bold">
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-candy-secondary px-4 py-2 text-xs cursor-pointer bg-white"
                >
                  ← Edit Inquiry Details
                </button>
                {onNavigateThankYou && (
                  <button
                    onClick={onNavigateThankYou}
                    className="btn-candy bg-[#8B5CF6] text-white hover:bg-[#7C3AED] px-4 py-2 text-xs cursor-pointer"
                  >
                    View Official SLA Page →
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Real Contact Address Card (Office) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 card-sticker p-6 sm:p-8 bg-white border-2 border-[#1E293B] shadow-pop-lg"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="badge-candy bg-[#FBBF24] text-[#1E293B] text-[10px] font-black">
                OFFICE LOCATION & WORKSPACE
              </span>
              <h4 className="font-heading font-black text-lg text-[#1E293B]">
                PyForge Office & Development Studio
              </h4>
              <div className="flex items-start gap-2 text-xs text-[#1E293B]/80 font-medium">
                <MapPin size={15} className="text-[#8B5CF6] shrink-0 mt-0.5" />
                <span>
                  A-2, 303 Avalon Gardens, Bhiwadi
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 text-xs font-bold text-[#1E293B]">
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-[#34D399]" />
                <span>Office Hours: Mon – Sat (09:30 – 18:30 IST)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-[#8B5CF6]" />
                <a href="tel:+916378753622" className="hover:text-[#8B5CF6] transition-colors">+91 6378753622</a>
              </div>
              <div className="flex flex-col gap-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-[#8B5CF6] shrink-0" />
                  <span className="text-[#64748B] text-[11px]">Official:</span>
                  <a href="mailto:contactpyforge@gmail.com" className="hover:text-[#8B5CF6] transition-colors font-bold">contactpyforge@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-[#F472B6] shrink-0" />
                  <span className="text-[#64748B] text-[11px]">Direct:</span>
                  <a href="mailto:saigaldhairya1@gmail.com" className="hover:text-[#8B5CF6] transition-colors font-bold">saigaldhairya1@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Alternative direct channels */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center text-xs font-bold text-[#1E293B]">
          <div className="flex items-center gap-2">
            <span className="text-[#64748B]">WhatsApp:</span>
            <a
              href="https://wa.me/916378753622?text=Hi%20PyForge,%20I'm%20reaching%20out%20via%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="badge-candy bg-[#25D366] text-[#1E293B] hover:bg-[#128C7E] hover:text-white transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.12.17 1.76 2.68 4.25 3.76.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.3" />
              </svg>
              +91 6378753622
            </a>
          </div>

          <div className="h-4 w-px bg-[#1E293B]/20 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-[#64748B]">Company:</span>
            <a
              href="mailto:contactpyforge@gmail.com"
              className="badge-candy bg-white text-[#8B5CF6] hover:bg-[#FBBF24] hover:text-[#1E293B] transition-colors"
            >
              <Mail size={13} strokeWidth={2.5} />
              contactpyforge@gmail.com
            </a>
          </div>

          <div className="h-4 w-px bg-[#1E293B]/20 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-[#64748B]">Personal:</span>
            <a
              href="mailto:saigaldhairya1@gmail.com"
              className="badge-candy bg-white text-[#1E293B] hover:bg-[#FBBF24] transition-colors"
            >
              <Mail size={13} strokeWidth={2.5} />
              saigaldhairya1@gmail.com
            </a>
          </div>

          <div className="h-4 w-px bg-[#1E293B]/20 hidden sm:block" />

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/dhairya-saigal-3a9702280"
              target="_blank"
              rel="noopener noreferrer"
              className="badge-candy bg-white hover:bg-[#FBBF24] transition-colors"
            >
              <Link2 size={13} strokeWidth={2.5} /> LinkedIn
            </a>
            <a
              href="https://github.com/dhairyasaigal"
              target="_blank"
              rel="noopener noreferrer"
              className="badge-candy bg-white hover:bg-[#FBBF24] transition-colors"
            >
              <GitBranch size={13} strokeWidth={2.5} /> GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
