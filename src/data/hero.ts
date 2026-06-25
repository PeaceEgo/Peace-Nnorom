import { Briefcase, Building2, Layers, type LucideIcon } from "lucide-react"

export type HeroMetric = {
  icon: LucideIcon
  label: string
}

export const heroMetrics: HeroMetric[] = [
  { icon: Briefcase, label: "3+ Years Experience" },
  { icon: Layers, label: "10+ Projects Delivered" },
  { icon: Building2, label: "Multiple Business Platforms Built" },
  { icon: Building2, label: "Professional Experience at Meezak Technologies" },
]

export const heroTechBadges = [
  { tech: "React", className: "absolute -top-6 -left-6" },
  { tech: "Next.js", className: "absolute -bottom-6 -right-6" },
  { tech: "TypeScript", className: "absolute top-1/4 -right-8" },
  { tech: "NestJS", className: "absolute bottom-1/4 -left-8" },
  { tech: "Node.js", className: "absolute top-1/2 -right-12" },
  { tech: "Tailwind", className: "absolute top-1/2 -left-12" },
] as const
