"use client"

import { useEffect, useState } from "react"
import GradientBlobs from "@/components/ui/gradient-blobs"
import HeroContent from "./hero-content"
import HeroProfile from "./hero-profile"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <GradientBlobs />
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <HeroContent isVisible={isVisible} />
          <HeroProfile isVisible={isVisible} />
        </div>
      </div>
    </section>
  )
}
