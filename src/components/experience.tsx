"use client"

import { motion } from "framer-motion"
import { Briefcase, CheckCircle2 } from "lucide-react"
import { meezakExperience } from "@/data/experience"
import { useSectionInView } from "@/hooks/use-section-in-view"
import GradientBlobs from "@/components/ui/gradient-blobs"
import SectionHeader from "@/components/ui/section-header"

export default function Experience() {
  const { ref, isInView } = useSectionInView()

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <GradientBlobs variant="subtle" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionHeader
          badge="Career"
          title="Professional"
          titleHighlight="Experience"
          description="Delivering production-grade applications for businesses and clients in professional environments."
          isInView={isInView}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-primary/30 to-transparent hidden sm:block" />

          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-10 hover:border-accent/30 transition-colors shadow-lg shadow-black/10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{meezakExperience.company}</h3>
                    <p className="text-accent font-semibold mt-1">{meezakExperience.role}</p>
                  </div>
                  <span className="inline-flex w-fit px-4 py-1.5 bg-muted border border-border rounded-full text-sm font-medium text-muted-foreground">
                    {meezakExperience.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {meezakExperience.responsibilities.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
                      className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
