import NavBar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import BlogTeaser from '../components/BlogTeaser'

export const metadata = {
  title: "SirTimi - Web & AI Systems Engineer",
  description: "Building Websites, Systems, Ai tools and Systems that solve your business problems",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Timi",
  url: "https://sirtimithdev.vercel.app",
  sameAs: [
    "https://x.com/@SirTimitheDev",
    "https://www.linkedin.com/in/timilehin-toba-972318326/",
    "mailto:outreach.sirtimithedev@gmail.com",
  ],
  jobTitle: "Web & AI Systems Engineer",
};

export default function HomePage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <BlogTeaser/>
      <CTA/>
      <Contact />

    </div>
    </>
  )
}

