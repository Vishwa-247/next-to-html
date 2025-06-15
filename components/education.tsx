"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 px-4" style={{ backgroundColor: "var(--muted)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">My academic journey and achievements</p>
        </div>

        <div className="max-w-4xl mx-auto fade-in">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Bachelor of Technology in Computer Science</CardTitle>
                    <p className="text-lg text-muted-foreground">SR University</p>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>2022 – 2026</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    CGPA: 9.33/10.0
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Machine Learning",
                      "Data Structures",
                      "Python",
                      "C Programming",
                      "Database Management System",
                      "Operating System",
                      "Java",
                    ].map((course) => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
