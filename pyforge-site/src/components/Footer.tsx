import { Link2, GitBranch, Mail } from 'lucide-react'

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1628] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="PyForge" className="w-9 h-9 rounded-full object-cover" />
              <span className="text-xl font-black">Py<span className="text-[#00C8FF]">Forge</span></span>
            </div>
            <p className="text-sm text-white/50 mb-6 max-w-xs leading-relaxed">
              You Ask It. We'll Make It For You.
            </p>
            <p className="text-xs text-white/30 leading-relaxed max-w-xs">
              Custom Python applications, AI solutions, automation systems and software built around your requirements.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'What We Do', href: '#what-we-do' },
                { label: 'How We Work', href: '#how-we-work' },
                { label: 'Our Work', href: '#our-work' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {['Python', 'AI', 'Automation', 'APIs', 'Data', 'Custom Software'].map((s) => (
                <li key={s} className="text-sm text-white/50">{s}</li>
              ))}
            </ul>
          </div>

          {/* Company & Social */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Founder</h4>
              <div>
                <p className="text-sm text-white/70 font-semibold">Dhairya Saigal</p>
                <p className="text-xs text-white/40">Co-Founder & CEO</p>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Connect</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/dhairya-saigal-3a9702280"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  id="footer-linkedin"
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0066FF] transition-colors duration-200"
                >
                  <Link2 size={14} />
                </a>
                <a
                  href="https://github.com/dhairyasaigal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  id="footer-github"
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                >
                  <GitBranch size={14} />
                </a>
                <a
                  href="mailto:contactpyforge@gmail.com"
                  aria-label="Email"
                  id="footer-email"
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0066FF] transition-colors duration-200"
                >
                  <Mail size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">Â© 2026 PyForge. All rights reserved.</p>
          <p className="text-xs text-white/20">Ideas Â· Code Â· Solutions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

