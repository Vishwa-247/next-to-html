"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Brain } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: ["Python", "C", "Java", "JavaScript", "HTML", "CSS"],
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Frameworks",
      skills: ["GitHub", "Visual Studio", "Git"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases",
      skills: ["SQL", "MySQL"],
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Domain Knowledge",
      skills: ["Machine Learning", "Deep Learning", "Data Analysis", "Computer Vision"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4" style={{ backgroundColor: "var(--muted)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto fade-in">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
