"use client"

import { projects } from "@/data/projects"
import { useSectionInView } from "@/hooks/use-section-in-view"
import SectionHeader from "@/components/ui/section-header"
import ProjectCard from "./project-card"

export default function Projects() {
  const { ref, isInView } = useSectionInView()

  return (
    <section id="solutions" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Portfolio"
          title="Featured"
          titleHighlight="Solutions"
          description="Selected professional and personal projects demonstrating my experience in building scalable digital products and business platforms."
          isInView={isInView}
        />

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
