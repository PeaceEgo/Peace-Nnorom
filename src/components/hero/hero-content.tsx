"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { heroMetrics } from "@/data/hero"
import { socialLinks } from "@/data/social-links"
import { downloadCV, scrollToSection } from "@/lib/download-cv"

type HeroContentProps = {
  isVisible: boolean
}

export default function HeroContent({ isVisible }: HeroContentProps) {
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 } as const,
    animate: isVisible ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay },
  })

  return (
    <div>
      <motion.div {...fade(0)}>
        <span className="inline-block px-4 py-2 mb-6 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold tracking-wide">
          Full-Stack Engineer
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
          <span className="block text-foreground">Hi, I&apos;m</span>
          <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Peace Nnorom
          </span>
        </h1>
      </motion.div>

      <motion.div {...fade(0.15)} className="space-y-4 mb-8">
        <p className="text-xl sm:text-2xl text-foreground font-medium leading-snug max-w-xl">
          Full-Stack Engineer building scalable business applications and digital products.
        </p>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
          I help startups and businesses transform ideas into performant, maintainable, and
          user-centric software solutions using modern web technologies.
        </p>
      </motion.div>

      <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-4 mb-10">
        <button
          onClick={() => scrollToSection("#solutions")}
          className="px-8 py-4 bg-gradient-to-r from-accent to-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 group"
        >
          View Featured Solutions
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={downloadCV}
          className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-muted transition-all duration-300 flex items-center justify-center gap-2 group hover:border-accent/50"
        >
          <Download size={20} className="group-hover:scale-110 transition-transform" />
          Download CV
        </button>
      </motion.div>

      <motion.div {...fade(0.4)} className="flex gap-4 mb-12">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="p-3 bg-card border border-border hover:bg-accent/10 hover:border-accent/30 rounded-lg transition-all duration-300 transform hover:scale-110"
            aria-label={label}
          >
            <Icon size={22} />
          </a>
        ))}
      </motion.div>

      <motion.div {...fade(0.5)} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {heroMetrics.map((metric) => (
          <div
            key={metric.label}
            className="flex items-start gap-3 p-4 bg-card/60 backdrop-blur-sm border border-border rounded-xl hover:border-accent/30 transition-colors"
          >
            <div className="p-2 bg-accent/10 rounded-lg shrink-0">
              <metric.icon size={18} className="text-accent" />
            </div>
            <p className="text-sm font-medium text-foreground leading-snug">{metric.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
