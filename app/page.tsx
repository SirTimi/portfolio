import NavBar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CTA />
      <Contact />

    </div>
  )
}
