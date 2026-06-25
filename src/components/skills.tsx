"use client"

import { motion } from "framer-motion"
import { skillCategories } from "@/data/skills"
import { useSectionInView } from "@/hooks/use-section-in-view"
import SectionHeader from "@/components/ui/section-header"

export default function Skills() {
  const { ref, isInView } = useSectionInView()

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Technical Expertise"
          title="Skills &"
          titleHighlight="Technologies"
          description="A comprehensive toolkit for building modern, scalable web applications across the full stack."
          isInView={isInView}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 sm:p-8 bg-card/80 backdrop-blur-sm border border-border rounded-2xl hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-accent/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted/80 text-sm font-medium text-foreground rounded-lg border border-border hover:border-accent/30 hover:bg-accent/5 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
