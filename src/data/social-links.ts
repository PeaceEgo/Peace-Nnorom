import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react"

export type SocialLink = {
  href: string
  icon: LucideIcon
  label: string
}

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/PeaceEgo", icon: Github, label: "GitHub Profile" },
  {
    href: "https://www.linkedin.com/in/peace-nnorom-120048235",
    icon: Linkedin,
    label: "LinkedIn Profile",
  },
  { href: "mailto:ceeprintz111@gmail.com", icon: Mail, label: "Send Email" },
]
