"use client"
import PhoneTracker from "@/app/assets/images/phonetracker.png"
import Meezak from "@/app/assets/images/meezak.png"
import Lbt from "@/app/assets/images/lbt.png"
import Ecommerce from "@/app/assets/images/ecommerce.png"
import Goride from "@/app/assets/images/goride.png"
import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Phone Tracker App",
      description:
        "A comprehensive phone tracking tool with real-time location updates, team collaboration features, and secure device management for personal and enterprise use.",
      tags: ["Nest.js", "Next.js", "Tailwind CSS", "MongoDB", "Zustand", "WebSocket"],
      image: PhoneTracker ,
      links: {
        github: "https://github.com/PeaceEgo/phone-tracker-fe",
        live: "https://phone-tracker-fe.vercel.app",
      },
    },
    {
      title: "Meezak Technologies Website",
      description:
        "Corporate website for Meezak Technologies featuring modern design, responsive layout, and integrated contact forms with SendGrid email services for seamless client communication.",
      tags: ["React", "Tailwind CSS", "SendGrid"],
      image: Meezak,
      links: {
        github: "https://github.com/PeaceEgo/Meezak-Site",
        live: "https://meezaktechnologies.com/",
      },
    },
    {
      title: "Land Thrift",
      description:
        "A Land thrift platform connecting buyers and sellers of land properties with intuitive search, property listings, and secure transaction features for land acquisition.",
      tags: ["React", "Tailwind CSS", "Zustand"],
      image:Lbt,
      links: {
        github: "https://github.com/PeaceEgo/thrift",
        live: "https://thrift-two.vercel.app",
      },
    },
    {
      title: "Ride-Hailing Platform",
      description:
        "A full-featured ride-hailing application with real-time tracking, driver-passenger matching, fare calculation, and secure payment integration for urban transportation.",
      tags: ["Javascript", "CSS", "Firebase", "Google Maps API"],
      image: Goride,
      links: {
        github: "https://github.com/randomglitchx/GoRide",
        live: "https://go-rideng.netlify.app/",
      },
    },
    {
      title: "E-Commerce Platform (On-Going)",
      description:
        "Modern e-commerce platform featuring product catalog, shopping cart, secure checkout with Stripe integration, user authentication, and admin dashboard for inventory management.",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "Mongodb", "Material UI"],
      image: Ecommerce,
      links: {
        github: "#",
        live: "#",
      },
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`transition-all duration-1000 mb-16 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">Projects</h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-accent rounded-full"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center`}>
                {/* Image Container */}
                <div className={`flex ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-colors duration-300">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className={`flex flex-col ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold mb-3 text-foreground hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-base mb-6 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-xs font-semibold rounded-full text-accent border border-accent/20 hover:border-accent/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
                    >
                      <Github size={18} /> Code
                    </a>
                    <a
                      href={project.links.live}
                      className="flex items-center gap-2 px-4 py-2 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
                    >
                      <ExternalLink size={18} /> Live Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
