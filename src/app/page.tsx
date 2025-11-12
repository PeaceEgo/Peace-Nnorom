"use client"

import { useEffect, useState } from "react"
import Navigation from "./components/navigation"
import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
// import Experience from "./components/experience"


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-background text-foreground">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </main>
  )
}
