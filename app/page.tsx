import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import CallToAction from './components/sections/CallToAction'
import Footer from './components/sections/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
