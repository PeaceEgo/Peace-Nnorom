"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { footerLinks } from "@/data/navigation"
import { socialLinks } from "@/data/social-links"
import { scrollToSection } from "@/lib/download-cv"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <button
              onClick={() => scrollToSection("#home")}
              className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2 hover:opacity-80 transition-opacity"
            >
              Peace Nnorom
            </button>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Engineer building scalable business applications and digital products.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-accent transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-accent/20 rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Peace Nnorom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
