"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import ProfileImage from "@/app/assets/images/profme.jpeg"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Function to handle CV download
  const handleDownloadCV = () => {
    const cvUrl = "https://drive.google.com/uc?export=download&id=1GLOPyZaPCNHzncYcjFeXMEPpDDtB99R_"
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a')
    link.href = cvUrl
    link.setAttribute('download', 'Peace_Nnorom_CV.pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            {/* Main heading with staggered animation */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  Peace Nnorom
                </span>
              </h1>
            </div>

            {/* Improved Introduction */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl text-justify">
              Full-Stack Developer specializing in crafting 
                high-performance, scalable web applications with cutting-edge technologies.
              </p>
              <p className="text-base text-muted-foreground/80 mb-4 max-w-xl text-justify">
                I transform complex problems into elegant, user-friendly solutions using 
                React,Next.js,TypeScript,Express.js and Nest.Js.
                Passionate about building applications that not only look great but deliver exceptional performance and user experience.
              </p>
              <p className="text-base text-muted-foreground/80 mb-8 max-w-xl text-justify">
                Currently open to opportunities where I can leverage my full-stack expertise to build 
                innovative digital solutions that make a real impact.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`transition-all duration-1000 delay-400 flex flex-col sm:flex-row gap-4 mb-12 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-gradient-to-r from-accent to-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
              >
                View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleDownloadCV}
                className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-muted transition-all duration-300 flex items-center justify-center gap-2 group hover:border-accent/50"
              >
                <Download size={20} className="group-hover:scale-110 transition-transform" /> 
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div
              className={`transition-all duration-1000 delay-600 flex gap-4 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="https://github.com/PeaceEgo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-accent/20 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/peace-nnorom-120048235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-accent/20 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ceeprintz111@gmail.com"
                className="p-3 bg-muted hover:bg-accent/20 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
                aria-label="Send Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right side  */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
              {/* Animated background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-2xl animate-float"></div>
              </div>

              {/* Main image container with creative masking */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Outer ring with gradient border */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent rounded-3xl p-1 animate-spin"
                  style={{ animationDuration: "20s" }}
                >
                  <div className="absolute inset-1 bg-background rounded-3xl"></div>
                </div>

                {/* Image with creative mask */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center relative group">
                    <Image
                      src={ProfileImage}
                      loading="lazy"
                      alt="Peace Nnorom - Full-Stack Developer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Floating tech badges around image */}
                <div
                  className="absolute -top-6 -left-6 px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold text-accent shadow-lg animate-float"
                  style={{ animationDelay: "0s" }}
                >
                  React
                </div>
                <div
                  className="absolute -bottom-6 -right-6 px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold text-primary shadow-lg animate-float"
                  style={{ animationDelay: "0.3s" }}
                >
                  Next.js
                </div>
                <div
                  className="absolute top-1/4 -right-8 px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold text-accent shadow-lg animate-float"
                  style={{ animationDelay: "0.6s" }}
                >
                  TypeScript
                </div>
                <div
                  className="absolute bottom-1/4 -left-8 px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold text-primary shadow-lg animate-float"
                  style={{ animationDelay: "0.9s" }}
                >
                  Express.js
                </div>
                <div
                  className="absolute top-1/2 -right-12 px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold text-accent shadow-lg animate-float"
                  style={{ animationDelay: "1.2s" }}
                >
                  Nest.js
                </div>
                <div
                  className="absolute top-1/2 -left-12 px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold text-primary shadow-lg animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  Tailwind
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/30 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}