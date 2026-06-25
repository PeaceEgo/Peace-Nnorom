import type { StaticImageData } from "next/image"

export type ProjectCategory =
  | "Client Project"
  | "Enterprise Platform"
  | "Internal Product"
  | "Personal Product"

export type Project = {
  title: string
  category: ProjectCategory
  company?: string
  challenge: string
  solution: string
  impact: string[]
  technologies: string[]
  image: StaticImageData
  links: {
    github?: string
    live: string
  }
}

export const categoryStyles: Record<ProjectCategory, string> = {
  "Client Project": "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "Enterprise Platform": "bg-purple-500/10 text-purple-400 border-purple-500/30",
  "Internal Product": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "Personal Product": "bg-accent/10 text-accent border-accent/30",
}
