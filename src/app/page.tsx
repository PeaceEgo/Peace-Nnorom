"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import About from "@/components/about"
import Skills from "@/components/skills"
import Principles from "@/components/principles"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-background text-foreground">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Skills />
      <Principles />
      <Contact />
      <Footer />
    </main>
  )
}
