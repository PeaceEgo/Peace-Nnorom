import { Cloud, Database, Layout, Server, Wrench, type LucideIcon } from "lucide-react"

export type SkillCategory = {
  title: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "NestJS", "Express.js", "Laravel", "PHP"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Git", "GitHub Actions", "Vercel", "Render", "cPanel"],
  },
  {
    title: "CMS & Tools",
    icon: Wrench,
    skills: ["WordPress", "Figma", "Postman", "REST APIs"],
  },
]
