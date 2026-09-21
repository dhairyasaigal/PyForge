import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckSquare, Gauge, Wrench, Eye, Cpu, Calculator, CheckCircle2, Code2 } from 'lucide-react'

const pythonAutomotiveSectors = [
  {
    name: 'Automotive Quality & CMM Cells',
    icon: CheckSquare,
    tag: 'pandas · openpyxl · CMM',
    color: '#8B5CF6',
    description: 'Quality labs and coordinate measuring machine (CMM) inspection stations in automotive component plants.',
    pythonApplications: [
      'Automated CMM coordinate output parsers (PDF, text, CSV)',
      'Instant Out-of-Tolerance (OOT) detection and alert dispatchers',
      'Automated Cp/Cpk statistical process capability report generators',
      'Historical tolerance drift curve analyzers across production batches',
    ],
  },
  {
    name: 'Powertrain & Dyno Testbenches',
    icon: Gauge,
    tag: 'python-can · PyQt · J1939',
    color: '#F472B6',
    description: 'Engine, transmission, and EV powertrain test cells requiring high-frequency digital data recording.',
    pythonApplications: [
      'Real-time CAN bus (J1939 / CAN-FD) packet logging software',
      'Live PyQt / PySide telemetry dashboards displaying RPM & torque curves',
      'Automated thermal and pressure transducer data loggers',
      'OBD-II diagnostic trouble code (DTC) decoders and exporters',
    ],
  },
  {
    name: 'Tooling, Fixtures & CNC Machining',
    icon: Wrench,
    tag: 'win32com · SolidWorks · G-Code',
    color: '#34D399',
    description: 'Precision machining cells and fixture design departments working with CAD and CNC equipment.',
    pythonApplications: [
      'SolidWorks & CATIA automation scripts for batch STEP/DXF export',
      'Automated Bill of Materials (BOM) compilation from assembly models',
      'CNC G-code parameter and tool collision pre-check scripts',
      'Cutting tool wear life tracking and regrinding alert utilities',
    ],
  },
  {
    name: 'Stamping & Sheet Metal Press Shops',
    icon: Eye,
    tag: 'OpenCV · PyTorch · Industrial Cam',
    color: '#FBBF24',
    description: 'High-speed press lines producing automotive body panels, chassis brackets, and deep-drawn stampings.',
    pythonApplications: [
      'OpenCV computer vision camera scripts detecting edge burrs and cracks',
      'Press stroke counters and tonnage sensor logging software',
      'Sheet metal blank nesting and scrap percentage calculation tools',
      'Die maintenance tracking and automated inspection loggers',
    ],
  },
  {
    name: 'Mechanical Test Rigs & Fatigue Benches',
    icon: Cpu,
    tag: 'PySerial · Modbus · Sensor DAQ',
    color: '#8B5CF6',
    description: 'Component endurance, shock absorber, and fatigue testing rigs running continuous cyclic loads.',
    pythonApplications: [
      'PySerial & Modbus hardware controllers for pneumatic/hydraulic cycles',
      'Automated 24/7 load-cell and thermocouple data collection scripts',
      'Auto-generated PDF test compliance certificates with pass/fail graphs',
      'Emergency threshold shutdown triggers for overnight test runs',
    ],
  },
  {
    name: 'Mechanical Design & R&D Calculations',
    icon: Calculator,
    tag: 'NumPy · SciPy · Engineering Math',
    color: '#34D399',
    description: 'Mechanical design teams needing deterministic engineering calculation tools to replace fragile Excel spreadsheets.',
    pythonApplications: [
      'Gear contact stress and bending fatigue calculation tools',
      'Shaft torsion, critical speed, and bearing life calculation software',
      'Hydraulic cylinder sizing and fluid flow calculation desktop apps',
      'Tolerance stackup analysis engines with Monte Carlo simulations',
    ],
  },
]

const Industries: React.FC = () => {
  const [activeSectorName, setActiveSectorName] = useState<string>('Automotive Quality & CMM Cells')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const activeSector = pythonAutomotiveSectors.find((s) => s.name === activeSectorName) || pythonAutomotiveSectors[0]
  const ActiveIcon = activeSector.icon

  return (
    <section id="industries" className="py-24 lg:py-32 bg-[#FFFDF5] border-t-2 border-b-2 border-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="badge-candy bg-[#34D399] text-[#1E293B]">
              <Code2 size={13} strokeWidth={2.5} />
              Where Our Python Applications Excel
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight mb-4"
          >
            Targeted Python Solutions for <br />
            <span className="text-[#8B5CF6]">Automobile & Mechanical Workflows.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#1E293B]/75 mb-12 max-w-2xl font-medium"
          >
            We don't build generic web platforms. We build purpose-driven Python tools tailored for quality managers, testbench engineers, and mechanical workshop heads.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sector Buttons Grid (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {pythonAutomotiveSectors.map((sector) => {
              const Icon = sector.icon
              const isSelected = activeSectorName === sector.name
              return (
                <button
                  key={sector.name}
                  id={`industry-${sector.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setActiveSectorName(sector.name)}
                  className={`p-4 rounded-2xl border-2 border-[#1E293B] text-left transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#8B5CF6] text-white shadow-pop -translate-y-1'
                      : 'bg-white text-[#1E293B] hover:bg-[#FBBF24] hover:shadow-pop-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl border-2 border-[#1E293B] flex items-center justify-center ${
                        isSelected ? 'bg-white text-[#8B5CF6]' : 'bg-[#FFFDF5] text-[#1E293B]'
                      }`}
                    >
                      <Icon size={18} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="font-heading font-black text-sm leading-tight">{sector.name}</div>
                      <div className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSelected ? 'text-white/80' : 'text-[#64748B]'}`}>
                        {sector.tag}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full border border-[#1E293B] ${
                      isSelected ? 'bg-[#34D399]' : 'bg-gray-200 group-hover:bg-[#1E293B]'
                    }`}
                  />
                </button>
              )
            })}
          </motion.div>

          {/* Active Sector Blueprint Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-6"
          >
            <div className="bg-white border-2 border-[#1E293B] rounded-3xl p-7 shadow-pop-lg relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#1E293B]/15 mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl border-2 border-[#1E293B] flex items-center justify-center shadow-pop-sm"
                    style={{ backgroundColor: activeSector.color }}
                  >
                    <ActiveIcon size={22} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#8B5CF6]">
                      PYTHON APPLICATION DOMAIN
                    </span>
                    <h3 className="font-heading font-black text-xl text-[#1E293B] leading-tight">
                      {activeSector.name}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#1E293B]/80 font-medium leading-relaxed mb-5">
                {activeSector.description}
              </p>

              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#64748B] mb-3">
                  What Systems PyForge Builds For This Area:
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {activeSector.pythonApplications.map((app) => (
                    <li key={app} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#1E293B]">
                      <span className="mt-0.5 text-[#34D399] shrink-0">
                        <CheckCircle2 size={16} strokeWidth={2.5} />
                      </span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t-2 border-[#1E293B]/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#64748B]">Have a specific machine format or dataset?</span>
                <button
                  onClick={() => {
                    const el = document.querySelector('#contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="badge-candy bg-[#FBBF24] hover:bg-[#8B5CF6] hover:text-white transition-colors cursor-pointer text-xs"
                >
                  Request Engineering Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Industries
