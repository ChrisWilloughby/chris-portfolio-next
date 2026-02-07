import { Download, Mail, MapPin, Calendar, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { resumeRoles } from "@/data/resume";
import { useState } from "react";

export default function ResumePage() {
  const [expandedRoles, setExpandedRoles] = useState<Set<string>>(new Set());

  const toggleExpanded = (roleId: string) => {
    const newExpanded = new Set(expandedRoles);
    if (newExpanded.has(roleId)) {
      newExpanded.delete(roleId);
    } else {
      newExpanded.add(roleId);
    }
    setExpandedRoles(newExpanded);
  };

  const formatDateRange = (startDate: string, endDate?: string, current?: boolean) => {
    if (current) {
      return `${startDate} - Present`;
    }
    return `${startDate} - ${endDate}`;
  };

  return (
    <div className="container px-4 py-16 mx-auto max-w-4xl">
      <section className="text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Resume
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Senior Product Designer who codes production UI with 5+ years of experience 
          building scalable web applications and leading design systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:chris@example.com">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <div className="space-y-8">
          {resumeRoles.map((role, index) => (
            <div key={role.id} className="relative">
              {/* Timeline Line */}
              {index < resumeRoles.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-border/40" />
              )}
              
              {/* Role Card */}
              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                    role.current 
                      ? 'bg-primary border-primary' 
                      : 'bg-background border-border'
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${
                      role.current ? 'bg-primary-foreground' : 'bg-muted-foreground'
                    }`} />
                  </div>
                </div>

                {/* Role Content */}
                <div className="flex-1 min-w-0">
                  <Card className="border-border/40 bg-card/50 backdrop-blur">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-2">
                          <CardTitle className="text-xl">{role.title}</CardTitle>
                          <CardDescription className="text-base font-medium text-primary">
                            {role.company}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {role.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDateRange(role.startDate, role.endDate, role.current)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {role.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-medium mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {role.responsibilities.map((responsibility, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expandable Context */}
                      {role.context && (
                        <Collapsible
                          open={expandedRoles.has(role.id)}
                          onOpenChange={() => toggleExpanded(role.id)}
                        >
                          <CollapsibleTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="w-full justify-between text-primary hover:text-primary/80"
                            >
                              <span>More context</span>
                              {expandedRoles.has(role.id) ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-4">
                            <div className="p-4 rounded-lg bg-muted/50 border border-border/40">
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {role.context}
                              </p>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Summary */}
      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Frontend & Design</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Vue.js", "Figma", "TailwindCSS", "CSS3", "HTML5"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Backend & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "PostgreSQL", "MongoDB", "AWS", "Git", "Jest", "Docker"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Let's Work Together</h3>
            <p className="text-muted-foreground mb-4">
              I'm always interested in exciting opportunities and challenging projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="mailto:chris@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/work">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View My Work
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
