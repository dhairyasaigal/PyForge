import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Gauge, Cpu, CheckCircle2, Sliders, Activity, Cog, Flame, MessageCircle } from 'lucide-react'

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

type HeroTab = 'telemetry' | 'cmm' | 'cad'

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<HeroTab>('telemetry')

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FFFDF5] pt-24 pb-16 lg:py-24"
    >
      {/* Playful Geometric Background Elements */}
      <div className="absolute top-12 left-1/4 w-80 h-80 rounded-full bg-[#FBBF24]/30 pointer-events-none -z-10 blur-2xl" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#F472B6]/25 pointer-events-none -z-10 blur-2xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#34D399]/25 pointer-events-none -z-10 blur-2xl" />

      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 bg-dot-grid-subtle opacity-60 pointer-events-none -z-10" />

      {/* Floating Memphis Geometric Confetti */}
      <div className="absolute top-28 left-8 hidden sm:block pointer-events-none">
        <div className="w-8 h-8 rounded-full border-2 border-[#1E293B] bg-[#FBBF24] shadow-pop-sm animate-bounce" />
      </div>
      <div className="absolute top-44 right-12 hidden lg:block pointer-events-none">
        <div className="w-10 h-10 rotate-12 border-2 border-[#1E293B] bg-[#34D399] shadow-pop-sm" />
      </div>
      <div className="absolute bottom-20 left-16 hidden lg:block pointer-events-none">
        <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="text-[#F472B6]">
          <path d="M2 12C6 4 10 4 14 12C18 20 22 20 26 12C30 4 34 4 38 12C42 20 46 20 46 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 self-start"
            >
              <div className="badge-candy bg-[#FBBF24] text-[#1E293B]">
                <Cog size={14} strokeWidth={2.5} className="animate-spin text-[#1E293B]" style={{ animationDuration: '8s' }} />
                <span>Python For Automobile & Mechanical Industry</span>
              </div>
              <span className="text-xs font-bold text-[#64748B] hidden sm:inline-block">
                Standalone Executables · Offline Shop-Floor Ready
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="flex flex-col gap-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-[#1E293B] leading-[1.04] tracking-tight"
              >
                You Ask It.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.04] tracking-tight text-[#1E293B]"
              >
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#8B5CF6]">We'll Make It</span>
                  <span className="absolute bottom-2 left-0 right-0 h-4 bg-[#FBBF24] -rotate-1 -z-0 rounded-sm" />
                </span>
                <span> For You.</span>
              </motion.h1>
            </div>

            {/* Subtitle with tailored Python mechanical & automotive focus */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg lg:text-xl text-[#1E293B]/80 font-medium leading-relaxed max-w-2xl"
            >
              The software world is crowded with generic web templates. PyForge engineers specialized 
              <strong className="text-[#1E293B] font-extrabold"> Python desktop applications, CMM metrology parsers, live CAN-bus telemetry loggers, CAD/CAM automations, and OpenCV inspection tools</strong> 
              tailored to physical machines and mechanical operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 bg-white border-2 border-[#1E293B] p-3 rounded-2xl shadow-pop-sm max-w-xl"
            >
              <div className="w-8 h-8 rounded-xl bg-[#34D399] border-2 border-[#1E293B] flex items-center justify-center shrink-0">
                <Flame size={16} strokeWidth={2.5} className="text-[#1E293B]" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                Explain your shop-floor bottleneck or mechanical problem in plain English. We write the Python code, validate the math, and package it into a standalone .exe.
              </p>
            </motion.div>

            {/* CTAs (Playful Candy Buttons) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                id="hero-primary-cta"
                onClick={() => scrollTo('#contact')}
                className="btn-candy px-7 py-3.5 text-sm sm:text-base cursor-pointer"
              >
                <span>Hit Us With Your Query</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#1E293B] flex items-center justify-center shadow-sm">
                  <ArrowRight size={15} strokeWidth={3} />
                </span>
              </button>

              <a
                href="https://wa.me/916378753622?text=Hi%20PyForge,%20I%20have%20an%20automobile/mechanical%20software%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-candy bg-[#34D399] text-[#1E293B] hover:bg-[#10B981] px-5 py-3.5 text-sm font-black flex items-center gap-2 shadow-pop"
              >
                <MessageCircle size={17} strokeWidth={2.5} />
                <span>WhatsApp Direct</span>
              </a>

              <button
                id="hero-secondary-cta"
                onClick={() => scrollTo('#our-work')}
                className="btn-candy-secondary px-5 py-3.5 text-sm font-bold cursor-pointer"
              >
                <span>Live Deployments</span>
              </button>
            </motion.div>

            {/* Tech Badges / Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2 pt-2 items-center"
            >
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider mr-1">Python Stack:</span>
              {[
                { label: 'Python 3.12 .exe', color: 'bg-[#8B5CF6]/15 text-[#8B5CF6]' },
                { label: 'pandas & openpyxl', color: 'bg-[#FBBF24]/20 text-[#1E293B]' },
                { label: 'python-can & J1939', color: 'bg-[#34D399]/20 text-[#047857]' },
                { label: 'PyQt / PySide GUIs', color: 'bg-[#F472B6]/20 text-[#BE185D]' },
                { label: 'OpenCV Vision QA', color: 'bg-blue-100 text-blue-800' },
                { label: 'NumPy & SciPy Math', color: 'bg-amber-100 text-amber-900' },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className={`text-xs px-3 py-1 rounded-full font-bold border-2 border-[#1E293B] shadow-pop-sm ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Hero Interactive Mechanical Cockpit (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Background offset card decoration */}
            <div className="absolute inset-0 bg-[#FBBF24] rounded-3xl border-2 border-[#1E293B] translate-x-3 translate-y-3 -z-10" />

            {/* Main Interactive Sticker Workbench */}
            <div className="bg-white border-2 border-[#1E293B] rounded-3xl p-6 shadow-pop-lg relative overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-[#1E293B]">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-2 border-[#1E293B]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FBBF24] border-2 border-[#1E293B]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#34D399] border-2 border-[#1E293B]" />
                  <span className="font-heading font-extrabold text-xs text-[#1E293B] ml-2">
                    PYFORGE_ENGINE_CORE // V3.4
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] animate-ping" />
                  <span className="text-[11px] font-extrabold text-[#059669] uppercase">ONLINE</span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex gap-2 mb-5">
                {[
                  { id: 'telemetry', label: 'Dyno Telemetry', icon: Gauge },
                  { id: 'cmm', label: 'CMM Inspection', icon: CheckCircle2 },
                  { id: 'cad', label: 'CAD / G-Code', icon: Sliders },
                ].map((t) => {
                  const Icon = t.icon
                  const active = activeTab === t.id
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id as HeroTab)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-heading font-extrabold border-2 border-[#1E293B] transition-all cursor-pointer ${
                        active
                          ? 'bg-[#8B5CF6] text-white shadow-pop-sm -translate-y-0.5'
                          : 'bg-[#FFFDF5] text-[#1E293B] hover:bg-[#FBBF24]'
                      }`}
                    >
                      <Icon size={14} strokeWidth={2.5} />
                      <span className="hidden sm:inline">{t.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Tab 1: Dyno Telemetry */}
              {activeTab === 'telemetry' && (
                <motion.div
                  key="telemetry"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#FFFDF5] border-2 border-[#1E293B] rounded-2xl p-3.5 shadow-pop-sm">
                      <div className="flex items-center justify-between text-xs font-bold text-[#64748B] mb-1">
                        <span>ENGINE RPM</span>
                        <Activity size={14} strokeWidth={2.5} className="text-[#8B5CF6]" />
                      </div>
                      <div className="text-2xl font-black font-heading text-[#1E293B]">5,820 <span className="text-xs text-[#64748B]">RPM</span></div>
                      <div className="w-full bg-[#1E293B]/10 h-2 rounded-full mt-2 overflow-hidden border border-[#1E293B]">
                        <div className="bg-[#8B5CF6] h-full w-[78%]" />
                      </div>
                    </div>

                    <div className="bg-[#FFFDF5] border-2 border-[#1E293B] rounded-2xl p-3.5 shadow-pop-sm">
                      <div className="flex items-center justify-between text-xs font-bold text-[#64748B] mb-1">
                        <span>TORQUE OUTPUT</span>
                        <Gauge size={14} strokeWidth={2.5} className="text-[#FBBF24]" />
                      </div>
                      <div className="text-2xl font-black font-heading text-[#1E293B]">412 <span className="text-xs text-[#64748B]">Nm</span></div>
                      <div className="w-full bg-[#1E293B]/10 h-2 rounded-full mt-2 overflow-hidden border border-[#1E293B]">
                        <div className="bg-[#FBBF24] h-full w-[65%]" />
                      </div>
                    </div>
                  </div>

                  {/* Live CAN Packet Feed */}
                  <div className="bg-[#1E293B] text-[#34D399] font-mono text-xs p-3.5 rounded-2xl border-2 border-[#1E293B] space-y-1.5">
                    <div className="text-[10px] text-white/50 uppercase font-sans font-bold flex justify-between">
                      <span>CAN BUS PACKET STREAM (J1939)</span>
                      <span className="text-[#34D399]">100 Hz ACTIVE</span>
                    </div>
                    <div className="text-[11px] truncate">0x18FEF100 [Speed: 88.4 km/h | Accel: 92%]</div>
                    <div className="text-[11px] truncate">0x0CF00400 [Torque: 412 Nm | RPM: 5820]</div>
                    <div className="text-[11px] truncate text-white/80">0x18FEEE00 [Coolant Temp: 89.2°C | PASS]</div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: CMM Inspection */}
              {activeTab === 'cmm' && (
                <motion.div
                  key="cmm"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="bg-[#FFFDF5] border-2 border-[#1E293B] rounded-2xl p-4 shadow-pop-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="badge-candy bg-[#34D399] text-[#1E293B] text-[10px]">
                        CMM AUTO-REPORTER ACTIVE
                      </span>
                      <span className="text-xs font-bold text-[#64748B]">Honda Benchmark</span>
                    </div>
                    <h4 className="font-heading font-black text-sm text-[#1E293B]">Brankshaft Bore Tolerance</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">Deviation: +0.0018 mm (Max Permissible ±0.0050 mm)</p>
                    
                    <div className="mt-3 flex items-center justify-between text-xs font-extrabold bg-[#34D399]/20 border border-[#34D399] p-2 rounded-xl text-[#065F46]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 size={16} strokeWidth={2.5} />
                        Process Capability Cp = 1.67 (Excellent)
                      </span>
                      <span>100% OK</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white border-2 border-[#1E293B] rounded-2xl flex items-center justify-between text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#F472B6] border border-[#1E293B] flex items-center justify-center">
                        <Cpu size={14} strokeWidth={2.5} className="text-[#1E293B]" />
                      </div>
                      <div>
                        <div>Monthly OOT Trend Analyzer</div>
                        <span className="text-[10px] text-[#64748B] font-medium">Automatic PDF parse to Excel</span>
                      </div>
                    </div>
                    <span className="badge-candy bg-[#FBBF24] text-[10px]">Instant Routing</span>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: CAD / G-Code */}
              {activeTab === 'cad' && (
                <motion.div
                  key="cad"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="bg-[#1E293B] text-white p-3.5 rounded-2xl border-2 border-[#1E293B] font-mono text-xs">
                    <div className="text-[10px] text-[#FBBF24] font-bold uppercase mb-2 font-sans flex justify-between">
                      <span>AUTOMATED CNC POST-PROCESSOR</span>
                      <span className="text-[#34D399]">VALIDATED</span>
                    </div>
                    <div className="text-white/70">N10 G21 G90 G40 G80</div>
                    <div className="text-[#34D399]">N20 T01 M06 (6mm CARBIDE ENDMILL)</div>
                    <div className="text-white/70">N30 S12000 M03</div>
                    <div className="text-[#FBBF24]">N40 G00 X14.20 Y-32.50 Z5.00</div>
                    <div className="text-white/90">N50 G01 Z-1.50 F800.0</div>
                  </div>

                  <div className="bg-[#FFFDF5] border-2 border-[#1E293B] rounded-2xl p-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-black font-heading text-[#1E293B]">SolidWorks & CATIA Automation Bridge</div>
                      <div className="text-[10px] text-[#64748B] font-semibold">Automatic BOM extraction & STEP export</div>
                    </div>
                    <span className="badge-candy bg-[#8B5CF6] text-white text-[10px]">Zero Manual Clicks</span>
                  </div>
                </motion.div>
              )}

              {/* Bottom Workbench Tag */}
              <div className="mt-4 pt-3 border-t-2 border-[#1E293B]/10 flex items-center justify-between text-xs text-[#64748B]">
                <span className="font-bold flex items-center gap-1 text-[#1E293B]">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                  Custom Engineered to Your Workflow
                </span>
                <span className="font-extrabold text-[#8B5CF6]">PyForge Mechanical</span>
              </div>
            </div>

            {/* Sticker Badges Floating Outside */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-[#F472B6] text-[#1E293B] border-2 border-[#1E293B] rounded-2xl px-3.5 py-1.5 font-heading font-black text-xs shadow-pop-sm rotate-3 hidden sm:block"
            >
              100% Tailored Code
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -left-4 bg-[#34D399] text-[#1E293B] border-2 border-[#1E293B] rounded-2xl px-3.5 py-1.5 font-heading font-black text-xs shadow-pop-sm -rotate-2 hidden sm:block"
            >
              Automotive Shop-Floor Ready
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
