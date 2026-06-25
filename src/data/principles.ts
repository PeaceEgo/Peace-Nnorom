import { BookOpen, Gauge, Layers, Users, type LucideIcon } from "lucide-react"

export type Principle = {
  icon: LucideIcon
  title: string
  description: string
}

export const principles: Principle[] = [
  {
    icon: Gauge,
    title: "Performance First",
    description: "I prioritize fast, efficient, and optimized user experiences.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "I build maintainable systems designed to grow with business needs.",
  },
  {
    icon: Users,
    title: "User-Centered Design",
    description: "I create intuitive experiences focused on solving real user problems.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "I continuously explore new technologies and improve my engineering practices.",
  },
]
