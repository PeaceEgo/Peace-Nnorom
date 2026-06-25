"use client"

import { motion } from "framer-motion"
import { useSectionInView } from "@/hooks/use-section-in-view"
import GradientBlobs from "@/components/ui/gradient-blobs"
import SectionHeader from "@/components/ui/section-header"

export default function About() {
  const { ref, isInView } = useSectionInView()

  const paragraphs = [
    <>
      With over <span className="text-accent font-semibold">3+ years</span> of professional experience,
      I specialize in building end-to-end web applications — from intuitive user interfaces to
      robust backend systems. My work spans client projects, enterprise platforms, and internal
      products delivered in production environments.
    </>,
    <>
      At <span className="text-accent font-semibold">Meezak Technologies</span>, I develop and
      maintain business-critical applications for financial services, cooperative management, and
      corporate digital presence. I bring a strong focus on code quality, performance, and
      maintainability to every project.
    </>,
    <>
      I work across the modern JavaScript ecosystem — React, Next.js, TypeScript, Node.js, and
      NestJS — with experience integrating REST APIs, databases, and third-party services. I thrive
      in collaborative environments where engineering directly impacts business outcomes.
    </>,
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <GradientBlobs variant="subtle" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionHeader
          badge="About Me"
          title="Engineering with"
          titleHighlight="Purpose"
          description="A Full-Stack Engineer focused on delivering production-ready software that solves real business problems and scales with organizational growth."
          isInView={isInView}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 sm:p-12 space-y-6">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
