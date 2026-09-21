import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X, ArrowRight, Zap, Layers, Rocket } from 'lucide-react'

/* --------------- Competitor comparison data --------------- */
const competitors = [
  {
    name: 'Typical Agency',
    price: 'Rs. 6,50,000 - Rs. 25,00,000+',
    turnaround: '3 – 6 months',
    custom: true,
    ai: false,
    revisions: 'Limited (paid)',
    support: 'Account manager',
    transparent: false,
  },
  {
    name: 'Freelancer (Upwork)',
    price: 'Rs. 1,65,000 - Rs. 8,30,000',
    turnaround: '4 – 12 weeks',
    custom: true,
    ai: false,
    revisions: 'Negotiated',
    support: 'Email only',
    transparent: false,
  },
  {
    name: 'No-Code Tools',
    price: 'Rs. 8,000 - Rs. 42,000 / mo',
    turnaround: 'Self-serve',
    custom: false,
    ai: false,
    revisions: 'DIY',
    support: 'Community',
    transparent: false,
  },
  {
    name: 'PyForge',
    price: 'From Rs. 4,999',
    turnaround: '3 – 14 days',
    custom: true,
    ai: true,
    revisions: 'Unlimited',
    support: 'Direct founder',
    transparent: true,
    highlight: true,
  },
]

/* --------------- Pricing tiers --------------- */
const tiers = [
  {
    id: 'starter',
    icon: Zap,
    name: 'Starter',
    tagline: 'Quick scripts & automations',
    price: 'Rs. 4,999',
    sub: 'one-time',
    description: 'Perfect for automating repetitive tasks, simple scrapers, data processors, or small utility tools.',
    features: [
      'Up to 200 lines of production Python',
      'Single-purpose automation or script',
      'Basic error handling & logging',
      'Delivered in 3 – 5 days',
      '1 revision round',
      'Source code + README',
    ],
    notIncluded: ['AI/ML integration', 'Deployment & hosting', 'Ongoing support'],
    cta: 'Start a Project',
    popular: false,
    color: 'from-slate-600 to-slate-700',
  },
  {
    id: 'builder',
    icon: Layers,
    name: 'Builder',
    tagline: 'Full apps & AI integrations',
    price: 'Rs. 14,999',
    sub: 'one-time',
    description: 'Ideal for full-stack tools, AI-powered workflows, dashboards, API integrations, or multi-module systems.',
    features: [
      'Full-stack custom application',
      'AI / LLM integrations (OpenAI, Gemini, etc.)',
      'REST APIs or backend services',
      'Database design & integration',
      'Delivered in 7 – 14 days',
      'Unlimited revisions within scope',
      'Deployment-ready setup',
      '30-day bug-fix support',
    ],
    notIncluded: ['Ongoing hosting costs', 'Feature additions post-delivery (new quote)'],
    cta: 'Start a Project',
    popular: true,
    color: 'from-[#0066FF] to-[#0047CC]',
  },
  {
    id: 'enterprise',
    icon: Rocket,
    name: 'Enterprise',
    tagline: 'Complex systems & ongoing builds',
    price: 'Custom',
    sub: 'scoped per project',
    description: 'For large-scale automation pipelines, multi-service architectures, enterprise tooling, or ongoing engineering partnerships.',
    features: [
      'Everything in Builder',
      'Dedicated project management',
      'Multi-phase delivery milestones',
      'Custom SLA & delivery timeline',
      'Ongoing retainer available',
      'NDA available on request',
      'Priority direct-founder access',
    ],
    notIncluded: [],
    cta: 'Get a Custom Quote',
    popular: false,
    color: 'from-[#0A1628] to-[#0F2040]',
  },
]

const demandNote =
  'Pricing scales with project complexity and scope — not arbitrary markups. A simple automation starts at Rs. 4,999; a sophisticated AI system is quoted transparently based on actual engineering hours.'

const Tick = ({ ok }: { ok: boolean }) =>
  ok ? (
    <Check size={16} className="text-[#0066FF] shrink-0" />
  ) : (
    <X size={16} className="text-gray-300 shrink-0" />
  )

const Pricing: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-2 mb-6"
        >
          <div className="h-px w-8 bg-[#0066FF]" />
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase">Pricing</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A1628] mb-4">
            A fraction of the cost.<br />
            <span className="text-[#0066FF]">None of the bloat.</span>
          </h2>
          <p className="text-base text-[#0A1628]/60 leading-relaxed">
            Traditional agencies charge for overhead, account managers, and slow processes.
            We charge for engineering. Here is exactly how we compare.
          </p>
        </motion.div>

        {/* Competitive Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-20 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"
        >
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="text-left px-6 py-4 font-semibold text-white/60 w-40"></th>
                {competitors.map((c) => (
                  <th
                    key={c.name}
                    className={`px-6 py-4 text-center font-bold ${c.highlight ? 'text-[#00C8FF]' : 'text-white/80'}`}
                  >
                    {c.name}
                    {c.highlight && (
                      <span className="ml-2 text-[10px] bg-[#0066FF] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Us
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Typical Cost', render: (c: typeof competitors[0]) => <span>{c.price}</span> },
                { label: 'Turnaround', render: (c: typeof competitors[0]) => <span>{c.turnaround}</span> },
                { label: 'Fully Custom', render: (c: typeof competitors[0]) => <Tick ok={c.custom} /> },
                { label: 'AI-Ready', render: (c: typeof competitors[0]) => <Tick ok={c.ai} /> },
                { label: 'Revisions', render: (c: typeof competitors[0]) => <span>{c.revisions}</span> },
                { label: 'Support', render: (c: typeof competitors[0]) => <span>{c.support}</span> },
                { label: 'Transparent Pricing', render: (c: typeof competitors[0]) => <Tick ok={c.transparent} /> },
              ].map((row, ri) => (
                <tr key={row.label} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                  <td className="px-6 py-3.5 font-semibold text-[#0A1628]/70 text-xs uppercase tracking-wider">
                    {row.label}
                  </td>
                  {competitors.map((c) => (
                    <td
                      key={c.name}
                      className={`px-6 py-3.5 text-center ${
                        c.highlight ? 'text-[#0066FF] font-semibold bg-blue-50/50' : 'text-[#0A1628]/60'
                      }`}
                    >
                      <div className="flex items-center justify-center">{row.render(c)}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Demand-based note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-start gap-4 bg-[#EEF4FF] border border-[#0066FF]/20 rounded-2xl px-6 py-5 mb-16 max-w-3xl"
        >
          <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center shrink-0 mt-0.5">
            <Zap size={14} className="text-white" />
          </div>
          <p className="text-sm text-[#0A1628]/70 leading-relaxed">
            <span className="font-bold text-[#0A1628]">How we price: </span>
            {demandNote}
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => {
            const Icon = tier.icon
            return (
              <motion.div
                key={tier.id}
                id={`pricing-${tier.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1 }}
                className={`relative rounded-3xl flex flex-col ${
                  tier.popular
                    ? 'bg-white border-2 border-[#0066FF] shadow-2xl shadow-blue-500/15 scale-[1.03]'
                    : 'bg-white border border-gray-200 shadow-md'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#0066FF] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`bg-gradient-to-br ${tier.color} rounded-t-3xl px-6 py-7`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-black text-lg leading-none">{tier.name}</p>
                      <p className="text-white/60 text-xs">{tier.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    {tier.price !== 'Custom' && (
                      <span className="text-white/50 text-sm mb-1">/{tier.sub}</span>
                    )}
                  </div>
                  {tier.price === 'Custom' && (
                    <p className="text-white/50 text-xs mt-1">{tier.sub}</p>
                  )}
                </div>

                <div className="px-6 py-6 flex flex-col flex-1 gap-5">
                  <p className="text-sm text-[#0A1628]/60 leading-relaxed">{tier.description}</p>

                  <ul className="flex flex-col gap-2.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#0A1628]/80">
                        <Check size={15} className="text-[#0066FF] mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {tier.notIncluded.length > 0 && (
                    <ul className="flex flex-col gap-2 border-t border-gray-100 pt-4">
                      {tier.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-[#0A1628]/35">
                          <X size={13} className="mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-2">
                    <motion.button
                      onClick={scrollToContact}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      id={`pricing-cta-${tier.id}`}
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold transition-colors duration-200 ${
                        tier.popular
                          ? 'bg-[#0066FF] text-white hover:bg-[#0047CC] shadow-lg shadow-blue-500/25'
                          : 'bg-[#0A1628] text-white hover:bg-[#0066FF]'
                      }`}
                    >
                      {tier.cta}
                      <ArrowRight size={14} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-[#0A1628]/35 mt-10"
        >
          All prices are project-based estimates. Final quote provided after a brief discovery call — no surprises.
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing




