import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Mail, TrendingUp, BarChart2, Gauge, Camera, Layers, CheckCircle2, Maximize2, X, Factory } from 'lucide-react'

const hondaApps = [
  {
    number: '01',
    icon: Mail,
    title: 'Email File Sender V2',
    image: '/email_file_sender.png',
    caption: 'Live UI: Automated Coordinate Measuring Machine (CMM) file detection and instant department alert routing.',
    description: 'Continuously monitors CMM coordinate inspection directories, parses report headers in real time, checks tolerance status, and automatically dispatches formatted alerts and PDFs to line supervisors and engineers.',
    pipeline: ['CMM Output', 'Header Parse', 'Tolerance Check', 'Instant SMTP'],
    color: '#8B5CF6',
    bg: '#F3E8FF',
  },
  {
    number: '02',
    icon: TrendingUp,
    title: 'Monthly OOT Trend Analyzer',
    image: '/mothlyootanalyser.png',
    caption: 'Live UI: Out-Of-Tolerance (OOT) statistical trend analyzer plotting monthly dimension drifts.',
    description: 'Consolidates all monthly CMM coordinate inspection measurement logs, flags recurring Out-of-Tolerance characteristics, plots historical tool-wear drift curves, and auto-generates root-cause analytics matrices for quality audits.',
    pipeline: ['Coordinate Logs', 'Drift Detection', 'OOT Flagging', 'Excel Matrix'],
    color: '#F472B6',
    bg: '#FCE7F3',
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'Cp/Cpk Master Report Generator',
    image: '/cpk.png',
    caption: 'Live UI: High-precision statistical process capability (Cp & Cpk) automated generator.',
    description: 'Automates statistical analysis across production batches, calculates Normal Distribution, Mean, Sigma, Cp, and Cpk metrics, and generates audit-ready automotive compliance templates with zero manual spreadsheet calculation.',
    pipeline: ['Batch Data', 'Normal Dist', 'Cp/Cpk Math', 'Audit Template'],
    color: '#34D399',
    bg: '#D1FAE5',
  },
]

const mechanicalProjects = [
  {
    icon: Gauge,
    title: 'CAN Bus Dyno Telemetry Suite',
    category: 'Powertrain & EV',
    description: 'High-speed J1939 CAN packet sniffer and live dyno telemetry logger recording torque, manifold pressure, and RPM during endurance pulls.',
    tags: ['CAN-FD', 'Python OBD', 'Live Dyno'],
    color: '#8B5CF6',
  },
  {
    icon: Camera,
    title: 'Sheet Metal Defect Vision Rig',
    category: 'Stamping Quality',
    description: 'Edge-AI camera inspection pipeline detecting edge burrs and tearing in automotive body stampings in under 180ms per stroke.',
    tags: ['Computer Vision', 'PyTorch', 'Edge Box'],
    color: '#FBBF24',
  },
  {
    icon: Layers,
    title: 'CAD Parameter to CNC Validator',
    category: 'Tooling & CAD',
    description: 'Automated script reading SolidWorks/CATIA models, validating wall thicknesses against CNC tool limits, and producing automated setup sheets.',
    tags: ['SolidWorks API', 'G-Code Check', 'Automated BOM'],
    color: '#34D399',
  },
]

const OurWork: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; caption: string } | null>(null)

  return (
    <section id="our-work" className="py-24 lg:py-32 bg-[#FFFDF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={ref}>
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="badge-candy bg-[#FBBF24] text-[#1E293B]">
              Production Systems In Action
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight mb-4"
          >
            Real Machine Software.<br />
            <span className="text-[#8B5CF6]">Built & Actively Working in Production.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#1E293B]/80 font-medium leading-relaxed"
          >
            We don't build theoretical concepts. We engineer production-grade applications that operate 24/7 on shop floors, processing real machine data with absolute reliability.
          </motion.p>
        </div>

        {/* Live Deployments at Honda Motorcycles & Scooters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card-sticker p-8 lg:p-12 bg-white border-2 border-[#1E293B] shadow-pop-xl mb-16 relative overflow-hidden"
        >
          {/* Top Banner */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 badge-candy bg-[#34D399] text-[#1E293B] mb-3">
                <Factory size={15} strokeWidth={2.5} />
                <span>LIVE PRODUCTION DEPLOYMENT · HONDA MOTORCYCLE & SCOOTER INDIA PVT. LTD.</span>
              </div>

              <h3 className="font-heading text-2xl lg:text-4xl font-black text-[#1E293B] mb-2 leading-tight">
                Live CMM Quality Automation Suite at Honda Motorcycles & Scooters Pvt. Ltd.
              </h3>

              <p className="text-[#1E293B]/80 text-sm sm:text-base font-semibold max-w-3xl leading-relaxed">
                We built and deployed these three connected software systems, and they are actively running on the production floor at <strong>Honda Motorcycle and Scooter India Pvt. Ltd. (HMSI)</strong>. They fully automate Coordinate Measuring Machine (CMM) inspection reporting, eliminate out-of-tolerance reporting lag, and automate critical Cp/Cpk statistical capability calculations.
              </p>
            </div>

            <div className="badge-candy bg-[#FBBF24] text-[#1E293B] text-xs font-black shadow-pop-sm">
              3 Models Deployed & Active
            </div>
          </div>

          {/* CMM Pipeline Flow Indicator */}
          <div className="mb-10 p-4 bg-[#FFFDF5] border-2 border-[#1E293B] rounded-2xl">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#64748B] block mb-2">
              AUTOMATED SHOP-FLOOR DATA PIPELINE
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {['CMM Machine Measurement Output', 'Email File Sender V2', 'Monthly OOT Trend Analyzer', 'Cp/Cpk Master Generator'].map((stage, i) => (
                <div key={stage} className="flex items-center gap-2">
                  <span className="badge-candy bg-white text-[#1E293B] text-xs font-bold shadow-pop-sm">
                    {stage}
                  </span>
                  {i < 3 && <ArrowRight size={14} strokeWidth={3} className="text-[#8B5CF6]" />}
                </div>
              ))}
            </div>
          </div>

          {/* Three Live Systems with Real Screenshots */}
          <div className="grid lg:grid-cols-3 gap-8">
            {hondaApps.map((app) => {
              const Icon = app.icon
              return (
                <div
                  key={app.title}
                  className="rounded-2xl border-2 border-[#1E293B] bg-[#FFFDF5] shadow-pop-sm flex flex-col justify-between overflow-hidden group hover:shadow-pop transition-all"
                >
                  {/* Screenshot Container with Click to Zoom */}
                  <div className="relative border-b-2 border-[#1E293B] bg-[#1E293B] overflow-hidden">
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="badge-candy bg-[#34D399] text-[#1E293B] text-[10px] shadow-pop-sm font-black">
                        LIVE WORKING MODEL
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedImage({ src: app.image, title: app.title, caption: app.caption })}
                      className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white border-2 border-[#1E293B] flex items-center justify-center text-[#1E293B] shadow-pop-sm hover:scale-110 transition-transform cursor-pointer"
                      title="Click to view full screenshot"
                    >
                      <Maximize2 size={13} strokeWidth={3} />
                    </button>

                    <div
                      onClick={() => setSelectedImage({ src: app.image, title: app.title, caption: app.caption })}
                      className="cursor-pointer overflow-hidden aspect-[16/10] flex items-center justify-center bg-gray-950"
                    >
                      <img
                        src={app.image}
                        alt={`${app.title} live working screenshot at Honda`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="bg-[#1E293B] px-3 py-1.5 text-[11px] font-mono text-[#34D399] flex items-center justify-between border-t border-white/10">
                      <span>{app.title}</span>
                      <span className="text-white/60 text-[10px]">Click to expand</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className="w-10 h-10 rounded-xl border-2 border-[#1E293B] flex items-center justify-center shadow-pop-sm"
                          style={{ backgroundColor: app.bg }}
                        >
                          <Icon size={20} strokeWidth={2.5} style={{ color: app.color }} />
                        </div>
                        <span className="text-xs font-black font-heading text-[#64748B]">
                          Model {app.number}
                        </span>
                      </div>

                      <h4 className="font-heading font-black text-lg text-[#1E293B] mb-2 leading-tight">
                        {app.title}
                      </h4>

                      <p className="text-xs text-[#1E293B]/75 font-medium leading-relaxed mb-4">
                        {app.description}
                      </p>
                    </div>

                    <div>
                      {/* Pipeline steps */}
                      <div className="flex flex-wrap gap-1 pt-3 border-t border-[#1E293B]/10 mb-3">
                        {app.pipeline.map((step) => (
                          <span
                            key={step}
                            className="text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#1E293B]/30 bg-white text-[#1E293B]"
                          >
                            {step}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#059669]">
                        <CheckCircle2 size={14} strokeWidth={2.5} />
                        <span>Operating Live at HMSI</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Additional Machine Software Projects */}
        <div>
          <h3 className="font-heading text-xl font-black text-[#1E293B] mb-6 flex items-center gap-2">
            <span>More Automotive & Mechanical Projects</span>
            <span className="h-0.5 flex-1 bg-[#1E293B]/10 ml-2" />
          </h3>

          <div className="grid sm:grid-cols-3 gap-6">
            {mechanicalProjects.map((proj) => {
              const Icon = proj.icon
              return (
                <div
                  key={proj.title}
                  className="card-sticker p-6 bg-white border-2 border-[#1E293B] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl border-2 border-[#1E293B] bg-[#FFFDF5] flex items-center justify-center shadow-pop-sm">
                        <Icon size={20} strokeWidth={2.5} style={{ color: proj.color }} />
                      </div>
                      <span className="text-[10px] font-black uppercase text-[#8B5CF6] tracking-wider">
                        {proj.category}
                      </span>
                    </div>

                    <h4 className="font-heading font-black text-base text-[#1E293B] mb-2">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-[#1E293B]/70 font-medium leading-relaxed mb-4">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-[#1E293B]/10">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#1E293B] bg-[#FFFDF5] text-[#1E293B]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Full Screenshot View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#1E293B]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-2 border-[#1E293B] rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-pop-xl"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b-2 border-[#1E293B] flex items-center justify-between bg-[#FFFDF5]">
                <div className="flex items-center gap-2.5">
                  <span className="badge-candy bg-[#34D399] text-[#1E293B] text-xs font-black">
                    LIVE PRODUCTION SYSTEM
                  </span>
                  <h3 className="font-heading font-black text-lg sm:text-xl text-[#1E293B]">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-9 h-9 rounded-full bg-white border-2 border-[#1E293B] flex items-center justify-center shadow-pop-sm hover:bg-[#FBBF24] transition-colors cursor-pointer"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>

              {/* Modal Image Display */}
              <div className="p-4 sm:p-6 bg-[#0F172A] overflow-auto flex items-center justify-center max-h-[70vh]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[65vh] w-auto object-contain rounded-xl border border-white/20 shadow-2xl"
                />
              </div>

              {/* Modal Footer Caption */}
              <div className="p-4 sm:p-5 border-t-2 border-[#1E293B] bg-[#FFFDF5] flex items-center justify-between">
                <p className="text-xs sm:text-sm font-semibold text-[#1E293B]/80">
                  {selectedImage.caption}
                </p>
                <span className="text-xs font-extrabold text-[#8B5CF6] hidden sm:inline">
                  Deployed at Honda Motorcycle & Scooter India
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default OurWork
