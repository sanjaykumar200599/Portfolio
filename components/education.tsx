"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

const Education = () => {
  const educationItems = [
    {
      title: "Computer Science and Engineering",
      organization: "St Joseph Engineering College, Mangaluru",
      date: "2026",
      description:
        "Currently studying Computer Science and Engineering. Enthusiastic about crafting digital solutions through web dev, database design, and cloud platforms",
      icon: <GraduationCap className="h-6 w-6" />,
      tags: ["ComputerScience","FullStackDeveloper","WebDevelopment"],
    },
    {
      title: "Completed Pre-University education with PCMC stream",
      organization: "Vivekananda Pre University College, Puttur",
      date: "2022",
      description:
        "Completed PUC with a major focus on Physics, Chemistry, Mathematics, and Computer Science.",
      icon: <GraduationCap className="h-6 w-6" />,
      tags: ["PCMC", "Computer Science"],
    },
    {
        title: "Primary & High School",
        organization: "Vivekananda English Medium School, Puttur",
        date: "2020",
        description: "Completed foundational education with strong emphasis on core subjects including science, mathematics, and languages.",
        icon: <GraduationCap className="h-6 w-6" />,
        tags: ["Primary Education", "High School", "Science", "Mathematics"],
        }

  ]

  return (
    <section id="education" className="py-20 w-full bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform md:-translate-x-1/2"></div>

            {/* Timeline items */}
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:mb-8 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
                } md:w-1/2 pl-12 md:pl-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center z-10 md:translate-x-1/2 -translate-y-1/2">
                  {item.icon}
                </div>

                {/* Date badge */}
                <div
                  className={`absolute top-0 ${
                    index % 2 === 0 ? "left-12 md:left-auto md:right-full md:mr-8" : "left-12 md:left-full md:ml-8"
                  } -translate-y-1/2`}
                >
                  <Badge variant="outline" className="flex items-center gap-1 bg-card">
                    <Calendar className="h-3 w-3" />
                    <span>{item.date}</span>
                  </Badge>
                </div>

                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-primary font-medium mb-2">{item.organization}</p>
                    <p className="text-foreground/70 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education