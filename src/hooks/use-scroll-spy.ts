"use client"

import { useEffect, useState } from "react"
import { navItems } from "@/data/navigation"

const sections = navItems.map((item) => item.href.substring(1))

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          return
        }
      }

      if (scrollPosition < 100) setActiveSection("home")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return activeSection
}
