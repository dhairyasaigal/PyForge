import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Gauge, CheckSquare, Layers, Eye, Calculator, Cpu, Code2 } from 'lucide-react'

const pythonAutomotiveServices = [
  {
    icon: CheckSquare,
    title: 'CMM & Metrology Automators',
    tag: 'pandas · openpyxl · CMM',
    description: 'Standalone applications that parse Coordinate Measuring Machine (CMM) output files (PDF, text, CSV), flag Out-of-Tolerance (OOT) drift instantly, and auto-generate audit-ready Cp/Cpk capability sheets.',
    pythonStack: ['Python 3.12', 'pandas', 'openpyxl', 'ReportLab', 'Standalone .exe'],
    color: '#8B5CF6', // Violet
    bgLight: '#F3E8FF',
  },
  {
    icon: Gauge,
    title: 'CAN-Bus & Dyno Telemetry GUIs',
    tag: 'python-can · PyQt · J1939',
    description: 'High-frequency vehicle and dyno data loggers. Decode J1939, CAN-FD, and OBD-II frames in real-time with responsive PyQt/PySide dashboards for engine and motor testbenches.',
    pythonStack: ['python-can', 'PyQt6 / PySide6', 'cantools', 'pyqtgraph', 'Serial / USB'],
    color: '#FBBF24', // Yellow
    bgLight: '#FEF3C7',
  },
  {
    icon: Layers,
    title: 'CAD/CAM & CNC Scripting Engines',
    tag: 'win32com · SolidWorks · G-Code',
    description: 'Automated scripting bridges interfacing directly with SolidWorks, CATIA, and AutoCAD. Batch export STEP/DXF files, extract Bill of Materials (BOM) automatically, and validate CNC G-code parameters.',
    pythonStack: ['pywin32', 'FreeCAD API', 'G-Code Parser', 'CAD COM Bridges'],
    color: '#34D399', // Mint
    bgLight: '#D1FAE5',
  },
  {
    icon: Eye,
    title: 'OpenCV Machine Vision QA',
    tag: 'OpenCV · NumPy · Industrial Cam',
    description: 'Shop-floor machine vision applications with OpenCV. Connects to industrial USB or GigE cameras to inspect sheet metal stamping burrs, weld defects, scratch patterns, and assembly alignments in under 200ms.',
    pythonStack: ['OpenCV', 'NumPy', 'PyTorch Mobile', 'GigE / USB Vision'],
    color: '#F472B6', // Pink
    bgLight: '#FCE7F3',
  },
  {
    icon: Calculator,
    title: 'Mechanical Solvers & Calculators',
    tag: 'NumPy · SciPy · Engineering Math',
    description: 'Replace fragile Excel calculation sheets with robust, deterministic standalone desktop tools. Solve gear contact stresses, shaft torque limits, bolt shear forces, hydraulic cylinder pressures, and tolerance stackups.',
    pythonStack: ['NumPy', 'SciPy', 'Custom GUI', 'Zero Macro Errors'],
    color: '#8B5CF6',
    bgLight: '#F3E8FF',
  },
  {
    icon: Cpu,
    title: 'Sensor DAQ & Test-Rig Interfaces',
    tag: 'PySerial · Modbus · Testbenches',
    description: 'Custom desktop software interfacing with plant hardware via RS-485, Modbus, thermocouples, load cells, and pressure transducers. Automate cyclic endurance testing, fatigue rigs, and generate instant pass/fail summaries.',
    pythonStack: ['pyserial', 'pymodbus', 'SQLite / CSV', 'Real-Time Plotting'],
    color: '#34D399',
    bgLight: '#D1FAE5',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
}

const WhatWeDo: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="what-we-do" className="py-24 lg:py-32 bg-[#FFFDF5] relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-grid-subtle opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div ref={ref} className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="badge-candy bg-[#8B5CF6] text-white">
              <Code2 size={14} strokeWidth={2.5} />
              Python For Mechanical & Automotive Systems
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight mb-4"
          >
            Custom Python Applications Built for <br />
            <span className="relative inline-block text-[#8B5CF6]">
              Mechanical & Automobile
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#FBBF24] -rotate-1 -z-10 rounded-sm" />
            </span>{' '}
            Engineering.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#1E293B]/80 leading-relaxed font-medium"
          >
            We focus strictly on Python software engineered for machines, testbenches, and inspection cells.
            From CMM data parsers and live CAN loggers to CAD automation scripts, we package your mechanical logic into standalone, offline-ready desktop applications.
          </motion.p>
        </div>

        {/* Playful Geometric Sticker Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pythonAutomotiveServices.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="card-sticker p-7 flex flex-col justify-between group relative overflow-hidden bg-white border-2 border-[#1E293B]"
              >
                {/* Colored accent tab at top of card */}
                <div
                  className="absolute top-0 left-0 right-0 h-2.5 border-b-2 border-[#1E293B]"
                  style={{ backgroundColor: service.color }}
                />

                <div>
                  {/* Top Row: Icon inside circle badge + tag */}
                  <div className="flex items-center justify-between mt-2 mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl border-2 border-[#1E293B] flex items-center justify-center shadow-pop-sm group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: service.bgLight }}
                    >
                      <Icon size={22} strokeWidth={2.5} style={{ color: service.color }} />
                    </div>
                    <span className="text-[11px] font-mono font-extrabold uppercase px-2.5 py-1 rounded-full border-2 border-[#1E293B] bg-[#FFFDF5] text-[#1E293B] shadow-pop-sm">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-black text-[#1E293B] mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1E293B]/75 leading-relaxed font-medium mb-5">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Python Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-[#1E293B]/10 mb-4">
                    {service.pythonStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border border-[#1E293B]/20 bg-[#FFFDF5] text-[#1E293B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-black text-[#8B5CF6]">
                    <span>Standalone .exe / Local Tool</span>
                    <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-[#FBBF24] border-2 border-[#1E293B] rounded-3xl p-8 sm:p-10 shadow-pop-lg flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-xl text-center sm:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-[#1E293B]/80 bg-white/70 px-3 py-1 rounded-full border border-[#1E293B] mb-2 inline-block">
              Custom Script or Desktop GUI
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#1E293B] leading-tight mt-1">
              Have a machine file or calculation sheet you want to automate?
            </h3>
            <p className="text-sm text-[#1E293B]/80 font-bold mt-1">
              Send us sample data (text outputs, CAN dumps, CAD files, or Excel sheets) and we'll forge a dedicated application for your plant.
            </p>
          </div>

          <button
            id="whatwedo-cta"
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-candy bg-[#1E293B] text-white hover:bg-[#8B5CF6] px-7 py-3.5 text-sm shrink-0 cursor-pointer"
          >
            <span>Hit Us With Your Query</span>
            <span className="w-6 h-6 rounded-full bg-white text-[#1E293B] flex items-center justify-center">
              <ArrowRight size={14} strokeWidth={3} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeDo
