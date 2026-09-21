import { Link2, GitBranch, Mail, ArrowUp, Wrench } from 'lucide-react'

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

interface FooterProps {
  onNavigatePrivacy?: () => void
  onNavigateTerms?: () => void
}

const Footer: React.FC<FooterProps> = ({ onNavigatePrivacy, onNavigateTerms }) => {
  return (
    <footer className="bg-[#1E293B] text-white pt-16 pb-16 border-t-2 border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="PyForge official logo - Industrial automation and Python engineering"
                className="w-10 h-10 rounded-full object-cover border-2 border-white/20 shadow-sm"
              />
              <span className="font-heading text-2xl font-black tracking-tight">
                Py<span className="text-[#FBBF24]">Forge</span>
              </span>
            </div>

            <p className="font-heading font-black text-lg text-white mb-2">
              You Ask It. We'll Make It For You.
            </p>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm font-medium mb-4">
              Specialized software engineering, CAN-bus telemetry loggers, CMM inspection automation, and shop-floor AI built for the automobile & mechanical industry.
            </p>

            {/* Address in Footer */}
            <p className="text-[11px] text-white/50 leading-normal max-w-xs font-medium mb-6">
              Registered Office: A-2, 303 Avalon Gardens, Bhiwadi
            </p>

            <button
              onClick={() => scrollTo('#contact')}
              className="btn-candy bg-[#8B5CF6] hover:bg-[#FBBF24] hover:text-[#1E293B] px-4 py-2 text-xs text-white border-2 border-white/20 cursor-pointer"
            >
              <span>Submit A Project Query</span>
            </button>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-xs font-black uppercase tracking-wider text-[#FBBF24] mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'What We Do', href: '#what-we-do' },
                { label: 'Ecosystem', href: '#industries' },
                { label: 'How We Work', href: '#how-we-work' },
                { label: 'Our Work', href: '#our-work' },
                { label: 'About Us', href: '#about' },
                { label: 'Founder', href: '#founder' },
                { label: 'Contact & Quotes', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-xs font-semibold text-white/70 hover:text-[#FBBF24] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Automotive Engineering Services */}
          <div>
            <h4 className="font-heading text-xs font-black uppercase tracking-wider text-[#34D399] mb-4">
              Capabilities
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/70 font-semibold">
              <li>CMM & Metrology</li>
              <li>CAN-Bus Telemetry</li>
              <li>CAD/CAM Scripting</li>
              <li>OpenCV Vision QA</li>
              <li>Mechanical Solvers</li>
              <li>Sensor DAQ GUIs</li>
            </ul>
          </div>

          {/* Founder & Connect */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-heading text-xs font-black uppercase tracking-wider text-[#F472B6] mb-3">
                Founder
              </h4>
              <p className="text-xs font-bold text-white">Dhairya Saigal</p>
              <p className="text-[11px] text-white/50">Founder & CEO, PyForge</p>
            </div>

            <div>
              <h4 className="font-heading text-xs font-black uppercase tracking-wider text-white/60 mb-3">
                Connect
              </h4>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://wa.me/916378753622?text=Hi%20PyForge,%20I'm%20reaching%20out%20via%20your%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-xl border-2 border-white/20 bg-[#25D366] text-[#1E293B] flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.12.17 1.76 2.68 4.25 3.76.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.3" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/dhairya-saigal-3a9702280"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-xl border-2 border-white/20 bg-white/10 flex items-center justify-center hover:bg-[#8B5CF6] hover:border-white transition-colors"
                >
                  <Link2 size={14} strokeWidth={2.5} />
                </a>
                <a
                  href="https://github.com/dhairyasaigal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-8 h-8 rounded-xl border-2 border-white/20 bg-white/10 flex items-center justify-center hover:bg-[#FBBF24] hover:text-[#1E293B] hover:border-white transition-colors"
                >
                  <GitBranch size={14} strokeWidth={2.5} />
                </a>
                <a
                  href="mailto:contactpyforge@gmail.com"
                  aria-label="Company Email"
                  title="Official: contactpyforge@gmail.com"
                  className="w-8 h-8 rounded-xl border-2 border-white/20 bg-white/10 flex items-center justify-center hover:bg-[#8B5CF6] hover:text-white hover:border-white transition-colors"
                >
                  <Mail size={14} strokeWidth={2.5} />
                </a>
                <a
                  href="mailto:saigaldhairya1@gmail.com"
                  aria-label="Personal Email"
                  title="Personal: saigaldhairya1@gmail.com"
                  className="w-8 h-8 rounded-xl border-2 border-white/20 bg-white/10 flex items-center justify-center hover:bg-[#34D399] hover:text-[#1E293B] hover:border-white transition-colors"
                >
                  <Mail size={14} strokeWidth={2.5} />
                </a>
              </div>
              <div className="text-[11px] font-bold text-white/60 mt-2 space-y-0.5">
                <p>Company: <a href="mailto:contactpyforge@gmail.com" className="text-[#8B5CF6] hover:underline">contactpyforge@gmail.com</a></p>
                <p>Personal: <a href="mailto:saigaldhairya1@gmail.com" className="text-[#34D399] hover:underline">saigaldhairya1@gmail.com</a></p>
                <p>WhatsApp: +91 6378753622</p>
              </div>
            </div>

            <div>
              <button
                onClick={() => scrollTo('#home')}
                className="flex items-center gap-1.5 text-[11px] font-bold text-white/60 hover:text-white cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp size={12} strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Privacy Policy & Terms Links */}
        <div className="border-t-2 border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-semibold">
          <p>© {new Date().getFullYear()} PyForge. All rights reserved.</p>

          <div className="flex items-center gap-6 text-xs">
            <button
              onClick={onNavigatePrivacy}
              className="hover:text-[#FBBF24] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">·</span>
            <button
              onClick={onNavigateTerms}
              className="hover:text-[#FBBF24] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>

          <p className="flex items-center gap-1 text-white/40">
            <span>Engineered for Machines · Python & Automation</span>
            <Wrench size={12} className="text-[#FBBF24]" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
