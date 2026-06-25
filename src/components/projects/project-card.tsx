"use client"

import { useRef } from "react"
import type { ReactNode } from "react"
import { ExternalLink, Github, Lightbulb, Target, TrendingUp } from "lucide-react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import type { Project } from "@/types/project"
import { categoryStyles } from "@/types/project"

type ProjectCardProps = {
  project: Project
  index: number
}

function ProjectSection({ icon: Icon, title, children, iconClass }: {
  icon: typeof Target
  title: string
  children: ReactNode
  iconClass: string
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Icon size={16} className={iconClass} />
        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{title}</h4>
      </div>
      {children}
    </div>
  )
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 shadow-lg shadow-black/10"
    >
      <div className="grid lg:grid-cols-5 gap-0">
        <div className="lg:col-span-2 relative h-56 sm:h-64 lg:h-full min-h-[240px]">
          <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/20" />
        </div>

        <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${categoryStyles[project.category]}`}>
              {project.category}
            </span>
            {project.company && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-muted border border-border text-muted-foreground">
                {project.company}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">{project.title}</h3>

          <div className="space-y-5 mb-6 flex-1">
            <ProjectSection icon={Target} title="Challenge" iconClass="text-accent">
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </ProjectSection>
            <ProjectSection icon={Lightbulb} title="Solution" iconClass="text-primary">
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </ProjectSection>
            <ProjectSection icon={TrendingUp} title="Business Impact" iconClass="text-emerald-400">
              <ul className="space-y-2">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ProjectSection>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted/80 text-xs font-medium rounded-full text-foreground border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-all text-sm"
              >
                <Github size={16} /> View Code
              </a>
            )}
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all text-sm"
            >
              <ExternalLink size={16} /> Live Project
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
