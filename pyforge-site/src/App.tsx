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
import Pricing from './components/Pricing'
import About from './components/About'
import Founder from './components/Founder'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Industries />
        <HowWeWork />
        <WhyCustom />
        <OurWork />
        <Impact />
        <Testimonials />
        <Pricing />
        <About />
        <Founder />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
