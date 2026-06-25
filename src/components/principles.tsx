"use client"

import { motion } from "framer-motion"
import { principles } from "@/data/principles"
import { useSectionInView } from "@/hooks/use-section-in-view"
import SectionHeader from "@/components/ui/section-header"

export default function Principles() {
  const { ref, isInView } = useSectionInView()

  return (
    <section id="principles" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionHeader
          badge="Philosophy"
          title="Engineering"
          titleHighlight="Principles"
          description="The values and standards that guide how I approach every project and technical decision."
          isInView={isInView}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-card/80 backdrop-blur-sm border border-border rounded-2xl hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="p-3 w-fit bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl mb-5 group-hover:scale-105 transition-transform">
                <principle.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
