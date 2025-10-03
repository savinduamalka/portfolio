import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ParticleSection } from "@/components/ParticleSection";

const education = [
  {
    degree: "Bachelor of Science in Information Technology & Management",
    institution: "University of Moratuwa",
    period: "2023 August - 2027 July",
    gpa: "3.82/4.0",
    achievements: ["Dean's List"],
    description: "Focused on Software Engineering, AI, and IT",
  },
    {
    degree: "Chartered Accountant (CA)",
    institution: "Institute of Chartered Accountants of Sri Lanka (ICASL)",
    period: "2022 - Present",
    achievements: ["Price Winner"],
    description: "Completed Business Level 1 & 2, Reading Corporate Level",
  },
  {
    degree: "Advanced Level",
    institution: "Vidyaloka College - Galle",
    period: "2019 - 2021",
    gpa: "1.8764",
    achievements: ["Top of Class", "Top of Section", "Subject Awards"],
    description: "Commerce Stream",
  },
];

export function Education() {
  return (
    <ParticleSection id="education" className="py-20" variant="minimal" opacity={1}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-primary">
              Education
            </h2>
            <p className="text-muted-foreground">
              Academic journey and qualifications
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative animate-slide-up ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background glow-box-primary" />

                  <Card className="glass-hover p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 glow-box-primary">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-lg text-muted-foreground mb-3">{edu.institution}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.period}
                          </Badge>
                          <Badge variant="outline" className="gap-1">
                            <Award className="h-3 w-3" />
                            {edu.gpa}
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement) => (
                            <Badge key={achievement} className="bg-primary/20 text-primary border-primary/30">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ParticleSection>
  );
}
