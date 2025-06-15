"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Brain, Database, Globe } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Full Stack Development",
      description: "Proficient in modern web technologies and frameworks",
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "Machine Learning",
      description: "Experienced in ML algorithms and deep learning models",
    },
    {
      icon: <Database className="h-8 w-8 text-green-500" />,
      title: "Database Management",
      description: "Strong foundation in SQL and database design",
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: "Cloud Computing",
      description: "Knowledge in cloud platforms and distributed systems",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated Computer Science student at SR University with a passion for machine learning and software
            development. With a strong academic record (CGPA: 9.33/10.0) and hands-on experience in various
            technologies, I'm committed to creating innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-card border-border"
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
