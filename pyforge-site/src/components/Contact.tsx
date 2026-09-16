import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Paperclip, Check, Link2, GitBranch, Mail, Loader2 } from 'lucide-react'

const solutionChips = [
  'Python Application',
  'AI / GenAI',
  'Automation',
  'Dashboard',
  'API / Backend',
  'Data / Analytics',
  'Computer Vision',
  'Not Sure',
]

const industries = [
  'IT', 'Automotive', 'Manufacturing', 'Mechanical', 'Electrical', 'Civil',
  'Healthcare', 'Education', 'Finance', 'Retail', 'Logistics', 'Construction', 'Research', 'Other',
]

const Contact: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedChips, setSelectedChips] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 👇 PASTE YOUR FORMSPREE ENDPOINT HERE
  // Go to https://formspree.io → New Form → copy the endpoint URL
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meaojpje'

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    // Append chip selections as a readable string
    data.append('solution_types', selectedChips.join(', ') || 'Not specified')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        const json = await res.json()
        setError(json?.errors?.[0]?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F8FAFF]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-2 mb-4"
        >
          <div className="h-px w-8 bg-[#0066FF]" />
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">Start a Project</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black text-[#0A1628] leading-tight mb-3"
        >
          What do you want us to build?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-base text-[#0A1628]/60 mb-12"
        >
          Tell us what you're trying to solve. We'll figure out how to build it.
        </motion.p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-10 shadow-sm flex flex-col gap-7"
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-sm font-semibold text-[#0A1628]">Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-sm font-semibold text-[#0A1628]">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-company" className="text-sm font-semibold text-[#0A1628]">
                  Company / Organization <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  placeholder="Your company or organization"
                  className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all"
                />
              </div>

              {/* What to build */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-description" className="text-sm font-semibold text-[#0A1628]">
                  What are you looking to build? *
                </label>
                <textarea
                  id="contact-description"
                  name="what_to_build"
                  required
                  rows={5}
                  placeholder="Describe your idea, problem, workflow or application in your own words..."
                  className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all resize-none"
                />
              </div>

              {/* Solution chips */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-[#0A1628]">
                  What kind of solution do you think you need?
                </label>
                <div className="flex flex-wrap gap-2">
                  {solutionChips.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      id={`chip-${chip.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`}
                      onClick={() => toggleChip(chip)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${selectedChips.includes(chip)
                        ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-md shadow-blue-500/25'
                        : 'bg-white text-[#0A1628]/60 border-gray-200 hover:border-[#0066FF]/40 hover:text-[#0066FF]'
                        }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry + Timeline + Budget */}
              <div className="grid sm:grid-cols-3 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-industry" className="text-sm font-semibold text-[#0A1628]">Industry</label>
                  <select
                    id="contact-industry"
                    name="industry"
                    className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all bg-white appearance-none"
                  >
                    <option value="">Select industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-timeline" className="text-sm font-semibold text-[#0A1628]">
                    Timeline <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="contact-timeline"
                    name="timeline"
                    type="text"
                    placeholder="e.g. 2 months"
                    className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-budget" className="text-sm font-semibold text-[#0A1628]">
                    Budget <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="contact-budget"
                    name="budget"
                    type="text"
                    placeholder="e.g. Rs. 50,000"
                    className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all"
                  />
                </div>
              </div>

              {/* Attachment */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0A1628]">
                  Attachment <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <label
                  htmlFor="contact-attachment"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-gray-300 text-sm text-[#0A1628]/50 hover:border-[#0066FF]/40 hover:text-[#0066FF] cursor-pointer transition-all group"
                >
                  <Paperclip size={16} className="group-hover:text-[#0066FF] transition-colors" />
                  {fileName ? (
                    <span className="text-[#0A1628]/70 font-medium">{fileName}</span>
                  ) : (
                    <span>Attach a file (requirements doc, spreadsheet, etc.)</span>
                  )}
                  <input
                    id="contact-attachment"
                    type="file"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                  />
                </label>
              </div>

              {/* Submit */}
              <div className="flex flex-col items-start gap-3">
                <motion.button
                  id="contact-submit"
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="flex items-center gap-2 bg-[#0066FF] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#0047CC] transition-colors shadow-xl shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Project Request
                      <ArrowRight size={18} />
                    </>
                  )}
                </motion.button>
                {error && (
                  <p className="text-sm text-red-500 font-medium">{error}</p>
                )}
                <p className="text-xs text-[#0A1628]/40">No technical knowledge required. Just tell us what you need.</p>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#0066FF] to-[#0047CC] rounded-3xl p-12 text-center shadow-2xl shadow-blue-500/25"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-black text-white mb-3">Your idea has entered the Forge.</h3>
              <p className="text-white/80 text-base max-w-md mx-auto">
                Thanks for reaching out. The PyForge team will review your requirements and get back to you.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Alternative contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          <div>
            <p className="text-xs text-[#0A1628]/40 mb-1">Prefer email?</p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=contactpyforge@gmail.com&su=Project+Inquiry+via+PyForge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#0066FF] hover:underline flex items-center gap-1.5 justify-center"
            >
              <Mail size={14} /> contactpyforge@gmail.com
            </a>
          </div>
          <div className="h-px w-8 lg:h-8 lg:w-px bg-gray-200" />
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/company/pyforge" target="_blank" rel="noopener noreferrer" className="text-[#0A1628]/40 hover:text-[#0066FF] transition-colors" id="contact-linkedin">
              <Link2 size={18} />
            </a>
            <a href="https://github.com/pyforge" target="_blank" rel="noopener noreferrer" className="text-[#0A1628]/40 hover:text-[#0A1628] transition-colors" id="contact-github">
              <GitBranch size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

