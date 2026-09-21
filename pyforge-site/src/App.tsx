import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import Industries from './components/Industries'
import HowWeWork from './components/HowWeWork'
import WhyCustom from './components/WhyCustom'
import OurWork from './components/OurWork'
import Impact from './components/Impact'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Founder from './components/Founder'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import StickyMobileCTA from './components/StickyMobileCTA'
import CookieBanner from './components/CookieBanner'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import ThankYou from './pages/ThankYou'
import { defaultSEO, updatePageSEO } from './utils/seo'
import { trackEvent } from './utils/analytics'

type RoutePath = '/' | '/privacy' | '/terms' | '/thank-you' | '/404'

function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path
    }
    return '/'
  })

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path
      setCurrentPath(cleanPath)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Sync route and SEO
  useEffect(() => {
    if (currentPath === '/') {
      updatePageSEO(defaultSEO)
    }
    // Track pageview
    trackEvent('Navigation', 'page_view', currentPath)
  }, [currentPath])

  const navigateTo = (path: RoutePath) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path)
    }
    setCurrentPath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScrollToContact = () => {
    if (currentPath !== '/') {
      navigateTo('/')
      setTimeout(() => {
        const el = document.querySelector('#contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
      return
    }
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Determine which page component to render
  const isHome = currentPath === '' || currentPath === '/'
  const isPrivacy = currentPath === '/privacy'
  const isTerms = currentPath === '/terms'
  const isThankYou = currentPath === '/thank-you'
  const isKnownRoute = isHome || isPrivacy || isTerms || isThankYou

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#1E293B] font-body selection:bg-[#FBBF24] selection:text-[#1E293B] overflow-x-hidden">
      {/* Navbar with route awareness */}
      <Navbar onNavigateHome={() => navigateTo('/')} isSubPage={!isHome} />

      <main className="relative">
        {isHome && (
          <>
            <Hero />
            <WhatWeDo />
            <Industries />
            <HowWeWork />
            <WhyCustom />
            <OurWork />
            <Impact />
            <Testimonials />
            <About />
            <Founder />
            <Contact
              onNavigateThankYou={() => navigateTo('/thank-you')}
              onNavigatePrivacy={() => navigateTo('/privacy')}
            />
            <FinalCTA />
          </>
        )}

        {isPrivacy && <PrivacyPolicy onNavigateHome={() => navigateTo('/')} />}
        {isTerms && <TermsConditions onNavigateHome={() => navigateTo('/')} />}
        {isThankYou && <ThankYou onNavigateHome={() => navigateTo('/')} />}
        {!isKnownRoute && <NotFound onNavigateHome={() => navigateTo('/')} />}
      </main>

      {/* Footer with legal navigation */}
      <Footer
        onNavigatePrivacy={() => navigateTo('/privacy')}
        onNavigateTerms={() => navigateTo('/terms')}
      />

      {/* Floating Widgets */}
      <WhatsAppButton />
      <StickyMobileCTA onScrollToContact={handleScrollToContact} />
      <CookieBanner onOpenPrivacyPolicy={() => navigateTo('/privacy')} />
    </div>
  )
}

export default App
