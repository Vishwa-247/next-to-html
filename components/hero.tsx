"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, Mail, Linkedin, Github } from "lucide-react"
import { gsap } from "gsap"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" },
      )

      gsap.fromTo(
        ".hero-buttons",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.8, ease: "back.out(1.7)" },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-20 px-4 bg-background">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-text text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Hi, I'm <span className="gradient-text">Sravan Lingam</span>
          </h1>
          <p className="hero-text text-xl md:text-2xl text-muted-foreground mb-4">
            Computer Science Student & Machine Learning Enthusiast
          </p>
          <p className="hero-text text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about leveraging technology to solve real-world problems. Currently pursuing B.Tech in Computer
            Science with a focus on Machine Learning and AI.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="hero-buttons flex justify-center space-x-6">
            <a
              href="mailto:sravanlingam6302@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sravan-lingam-290520288/"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/LingamSravan63"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
