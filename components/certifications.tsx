"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Calendar } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Cisco CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "Mar 2024",
      verifyLink: "#",
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "Mar 2024",
      verifyLink: "#",
    },
    {
      title: "NPTEL: Database Management System",
      issuer: "NPTEL",
      date: "May 2024",
      verifyLink: "#",
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      date: "Feb 2025",
      verifyLink: "#",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4" style={{ backgroundColor: "var(--muted)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <p className="text-xl text-muted-foreground">Professional certifications and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto fade-in">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
