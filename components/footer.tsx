"use client"

import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border" style={{ backgroundColor: "var(--muted)" }}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-2xl font-bold gradient-text">Sravan Lingam</div>

          <div className="flex space-x-6">
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

          <div className="text-center text-muted-foreground">
            <p>Made with love by Sravan Lingam</p>
            <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
