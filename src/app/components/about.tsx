"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Palette, Server, Zap, Users, Award, Clock } from "lucide-react"

// Improved AnimatedCounter component
const AnimatedCounter = ({ 
  value, 
  duration = 20
}: { 
  value: string; 
  duration?: number 
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  // Check if value is a number (with optional + sign) or percentage
  const numericValue = value.replace(/[+%]/g, '')
  const isNumber = !isNaN(Number(numericValue))
  const suffix = value.replace(numericValue, '') // Get the + or % suffix

  useEffect(() => {
    if (isNumber && isInView) {
      const target = parseInt(numericValue)
      let start = 0
      const increment = target / (duration * 60) // 60 frames per second
      
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60) // 60 FPS
      
      return () => clearInterval(timer)
    }
  }, [isNumber, numericValue, duration, isInView])

  if (!isNumber) {
    return <span ref={ref}>{value}</span>
  }

  return <span ref={ref}>{Math.floor(count)}{suffix}</span>
}

// Animated skill bar with percentage
const AnimatedSkillBar = ({ 
  skill, 
  index 
}: { 
  skill: { name: string; level: number }; 
  index: number 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">
          {isInView ? (
            <AnimatedCounter value={`${skill.level}%`} duration={1} />
          ) : (
            "0%"
          )}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ 
            delay: index * 0.1 + 0.3, 
            duration: 1,
            ease: "easeOut"
          }}
          className="h-2 rounded-full bg-gradient-to-r from-accent to-primary"
        />
      </div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("skills")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const stats = [
    { icon: Clock, value: "3+", label: "Years Experience" },
    { icon: Users, value: "10+", label: "Projects Completed" },
    { icon: Award, value: "100%", label: "Client Satisfaction" },
    { icon: Zap, value: "Fast", label: "Delivery" }
  ]

  type SkillCategory = {
    frontend: { name: string; level: number }[]
    backend: { name: string; level: number }[]
    tools: { name: string; level: number }[]
  }

  const skills: SkillCategory = {
    frontend: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "React Native", level: 70 }
    ],
    backend: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "Nest.js", level: 85 },
      { name: "MongoDB", level: 87 }
    ],
    tools: [
      { name: "Git/GitHub", level: 93 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 }
    ]
  }

  const getSkillsForTab = (tab: string) => {
    switch(tab) {
      case "skills": 
        return [...skills.frontend, ...skills.backend, ...skills.tools].slice(0, 4);
      case "frontend":
        return skills.frontend;
      case "backend":
        return skills.backend;
      case "tools":
        return skills.tools;
      default:
        return skills.frontend;
    }
  }

  const tabs = [
    { id: "skills", label: "Skills", icon: Zap },
    { id: "frontend", label: "Frontend", icon: Palette },
    { id: "backend", label: "Backend", icon: Server },
    { id: "tools", label: "Tools", icon: Code2 }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold">
              About Me
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Passionate full-stack developer with a keen eye for detail and a commitment to 
            delivering exceptional digital experiences that drive results.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-4 sm:p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full mb-3 sm:mb-4">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                <AnimatedCounter value={stat.value} duration={2} />
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div 
              variants={itemVariants}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate full-stack developer with over{" "}
                <span className="text-accent font-semibold">
                  <AnimatedCounter value="3+" duration={1.5} />
                </span>{" "}
                years of experience creating digital solutions that make a real impact. My journey began with curiosity about 
                how things work, and it has evolved into a career dedicated to building 
                applications that solve real-world problems.
              </p>
              <p className="text-muted-foreground mb-4">
                I specialize in the <span className="text-accent font-semibold">MERN stack</span> 
                {" "}and modern web technologies, with a strong focus on creating scalable, 
                maintainable, and user-friendly applications. I believe in writing clean, 
                efficient code and staying updated with the latest industry trends.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-6"
          >
            {/* Responsive Tab Navigation */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap gap-1 bg-muted/50 rounded-xl p-1"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-medium transition-all duration-300 flex-1 min-w-[120px] sm:min-w-0 justify-center ${
                    activeTab === tab.id
                      ? "bg-background shadow-lg shadow-accent/10 text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{tab.label}</span>
                </button>
              ))}
            </motion.div>

            {/* Skills Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {getSkillsForTab(activeTab).map((skill, index) => (
                <AnimatedSkillBar 
                  key={skill.name} 
                  skill={skill} 
                  index={index} 
                />
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 p-4 sm:p-6 bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl text-center"
            >
              <h4 className="font-semibold text-sm sm:text-base mb-2">Ready to Bring Your Ideas to Life?</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Let's collaborate to create something extraordinary together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 text-sm sm:text-base"
              >
                Start a Project
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}