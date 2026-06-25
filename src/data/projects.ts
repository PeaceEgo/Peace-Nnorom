import PhoneTracker from "@/app/assets/images/phonetracker.png"
import Meezak from "@/app/assets/images/meezak.png"
import FloFinance from "@/app/assets/images/flofinance.png"
import Dpcms from "@/app/assets/images/dpcms.png"
import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    title: "Phone Tracker Platform",
    category: "Personal Product",
    challenge:
      "Families and businesses needed secure real-time device monitoring and location tracking.",
    solution:
      "Built a full-stack device tracking platform supporting real-time location updates, QR-based device onboarding, secure authentication, and multi-device management.",
    impact: [
      "Implemented real-time updates using WebSockets.",
      "Enabled secure device registration and management.",
      "Built scalable backend APIs using NestJS.",
    ],
    technologies: ["Next.js", "NestJS", "MongoDB", "WebSockets", "Zustand", "Tailwind CSS"],
    image: PhoneTracker,
    links: {
      github: "https://github.com/PeaceEgo/phone-tracker-fe",
      live: "https://phone-tracker-fe.vercel.app",
    },
  },
  {
    title: "FloFinance",
    category: "Client Project",
    company: "Meezak Technologies",
    challenge:
      "Financial service providers required a modern digital platform to simplify customer interactions and improve accessibility.",
    solution:
      "Developed responsive and user-friendly interfaces for a financial services platform focused on loans, savings, and financial products.",
    impact: [
      "Delivered as part of professional work at Meezak Technologies.",
      "Improved customer engagement through modern UX patterns.",
      "Built responsive and accessible interfaces.",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: FloFinance,
    links: { live: "https://flofinanceng.com/" },
  },
  {
    title: "Destiny Promoters Cooperative Management System (DPCMS)",
    category: "Enterprise Platform",
    company: "Meezak Technologies",
    challenge:
      "The cooperative needed to digitize member onboarding, contributions, referrals, and operational processes.",
    solution:
      "Built a centralized platform for member registration, thrift contributions, referrals, and cooperative management.",
    impact: [
      "Digitized manual cooperative processes.",
      "Improved operational efficiency.",
      "Enabled centralized member and contribution management.",
    ],
    technologies: ["HTML", "JavaScript", "CSS"],
    image: Dpcms,
    links: { live: "https://www.destinypromoterscooperative.com/" },
  },
  {
    title: "Meezak Corporate Website",
    category: "Internal Product",
    company: "Meezak Technologies",
    challenge:
      "Meezak Technologies required a modern digital presence to showcase services and attract potential clients.",
    solution:
      "Developed and maintained a responsive corporate website with lead generation and customer communication features.",
    impact: [
      "Strengthened company digital presence.",
      "Improved lead acquisition process.",
      "Integrated customer communication workflows.",
    ],
    technologies: ["React", "Tailwind CSS"],
    image: Meezak,
    links: {
      github: "https://github.com/PeaceEgo/Meezak-Site",
      live: "https://meezaktechnologies.com/",
    },
  },
]
