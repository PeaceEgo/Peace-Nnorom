import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react"

export type ContactDetail = {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export const contactDetails: ContactDetail[] = [
  {
    icon: Mail,
    label: "Email",
    value: "ceeprintz111@gmail.com",
    href: "mailto:ceeprintz111@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234-913-139-9569",
    href: "tel:+2349131399569",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
  },
]
