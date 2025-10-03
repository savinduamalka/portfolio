import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ParticleSection } from "@/components/ParticleSection";

const experiences = [
  {
    title: "Audit Associate",
    company: "PBC Associates",
    location: "Galle, Sri Lanka",
    period: "May 2022 - June 2023",
    type: "Full-time",
    description: "As an Audit Associate, I played a crucial role in conducting comprehensive financial audits for diverse clients across multiple industries. My responsibilities included creating financial statements, assessing internal controls, and ensuring compliance with accounting standards and regulations. I collaborated with senior team members to identify risks, perform substantive testing, and provide valuable insights to clients for improving their financial reporting processes. This experience enhanced my analytical skills, attention to detail, and understanding of business operations while working in a dynamic professional environment.",
    skills: ["Financial Auditing", "Risk Assessment", "Client Communication", "Team Collaboration", "Time Management"],
  },
];

export function Experience() {
  return (
    <ParticleSection id="experience" className="py-20" variant="minimal" opacity={1}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-primary">
              Professional Experience
            </h2>
            <p className="text-muted-foreground">
              My professional journey and work experience
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
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
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-lg text-primary mb-3">{exp.company}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline" className="gap-1">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </Badge>
                          <Badge variant="outline" className="gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </Badge>
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {exp.type}
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Skills */}
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-foreground">Key Skills:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <Badge 
                                key={skill} 
                                variant="secondary"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
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
