"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Calendar } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Intel Image Classification",
      description:
        "Implemented a CNN-based image classification model on the Intel Image Dataset to accurately categorize natural and urban scenes such as forests, mountains, and buildings.",
      technologies: ["Python", "Machine Learning", "CNN", "Deep Learning"],
      date: "Apr 2025",
      github: "https://github.com/LingamSravan63",
      achievements: [
        "Performance evaluation performed using accuracy and loss metrics across training and validation sets",
        "Optimized model architecture for improved generalization without additional computational overhead",
      ],
    },
    {
      title: "Comparative Analysis of ML Algorithms on Titanic Dataset",
      description:
        "Conducted a comprehensive analysis comparing machine learning algorithms on the Titanic dataset, identifying key features influencing survival rates.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"],
      date: "May 2024",
      github: "https://github.com/LingamSravan63",
      achievements: [
        "Refined predictive accuracy by nearly 20 percent over previous models",
        "Implemented multiple ML models including decision trees and logistic regression",
        "Leveraged comprehensive comparative analysis to identify the most effective approach",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Projects</h2>
          <p className="text-xl text-muted-foreground">Some of my recent work and contributions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto fade-in">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-card border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{project.date}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
