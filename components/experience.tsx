"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Experience</h2>
          <p className="text-xl text-muted-foreground">Professional experience and internships</p>
        </div>

        <div className="max-w-4xl mx-auto fade-in">
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-card border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground">Machine Learning Intern</CardTitle>
                    <p className="text-lg text-muted-foreground">NIT Warangal</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Warangal, India</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>June 2024 – July 2024</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    Certificate Available
                  </Badge>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Analyzed and presented findings from 5+ research papers on cloud computing and its integration
                      with machine learning, enhancing knowledge in cutting-edge technologies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Spearheaded an initiative to document cloud workload patterns over two months, leading to insights
                      that refined predictive analytics capabilities within the team while establishing standards for
                      future projects
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
