"use client"

import { motion } from "framer-motion"

type SectionHeaderProps = {
  badge: string
  title: string
  titleHighlight: string
  description: string
  isInView?: boolean
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  isInView = true,
  className = "mb-16",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`text-center ${className}`}
    >
      <span className="inline-block px-4 py-2 mb-4 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold">
        {badge}
      </span>
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
        {title}{" "}
        <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          {titleHighlight}
        </span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{description}</p>
    </motion.div>
  )
}
