"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ProfileImage from "@/app/assets/images/profme.jpeg"
import { heroTechBadges } from "@/data/hero"

type HeroProfileProps = {
  isVisible: boolean
}

export default function HeroProfile({ isVisible }: HeroProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-2xl animate-float" />
      </div>

      <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent rounded-3xl p-1 animate-spin"
          style={{ animationDuration: "20s" }}
        >
          <div className="absolute inset-1 bg-background rounded-3xl" />
        </div>

        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-accent/30 to-primary/30 relative group">
            <Image
              src={ProfileImage}
              loading="lazy"
              alt="Peace Nnorom - Full-Stack Engineer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {heroTechBadges.map(({ tech, className }, i) => (
          <div
            key={tech}
            className={`${className} px-3 py-1.5 bg-card border border-border rounded-full text-xs sm:text-sm font-semibold text-accent shadow-lg animate-float`}
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            {tech}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
