"use client";
import Link from "next/link";
import { Download, Mail, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeRoles } from "@/data/resume";

export default function ResumePage() {
  const formatDateRange = (startDate: string, endDate?: string, current?: boolean) => {
    if (current) {
      return `${startDate} - Present`;
    }
    return `${startDate} - ${endDate}`;
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container px-4 py-16 mx-auto max-w-4xl">
        <section className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Resume
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            UI Engineer and UX Designer with 10+ years of experience leading design and development of enterprise-scale digital products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-white">
              <a href="/resume/chris-willoughby-resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-white">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </section>

      <section className="mb-16">
        <div className="space-y-8">
          {resumeRoles.map((role, index) => (
            <div key={role.id} className="relative">
              {/* Timeline Line */}
              {index < resumeRoles.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-white/10" />
              )}

              {/* Role Card */}
              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                    role.current
                      ? 'bg-cyan-500/20 border-cyan-500/50'
                      : 'bg-white/[0.02] border-white/10'
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${
                      role.current ? 'bg-cyan-400' : 'bg-white/30'
                    }`} />
                  </div>
                </div>

                {/* Role Content */}
                <div className="flex-1 min-w-0">
                  <Card className="border border-white/10 bg-white/[0.02] backdrop-blur">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-2">
                          <CardTitle className="text-xl text-white">{role.title}</CardTitle>
                          <CardDescription className="text-base font-medium text-cyan-400">
                            {role.company}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-white/50">
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
                        {role.stack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs border border-white/10 bg-white/[0.02] text-white/70">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-medium mb-3 text-white">Key Responsibilities:</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                          {role.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
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
        <Card className="border border-white/10 bg-white/[0.02] backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-white">Frontend & Design</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Figma", "TailwindCSS", "Material UI", "Design Systems", "WCAG"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs border border-white/10 bg-white/[0.02] text-white/70">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-white">AI & Enterprise</h4>
                <div className="flex flex-wrap gap-2">
                  {["GenAI", "Agentic AI", "AEM", "JIRA", "Azure", "Git", "UX Research", "Prototyping"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs border border-white/10 bg-white/[0.02] text-white/70">
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
        <Card className="border border-white/10 bg-white/[0.02] backdrop-blur">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2 text-white">Let's Work Together</h3>
            <p className="text-white/60 mb-4">
              I'm always interested in exciting opportunities and challenging projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-white">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-white">
                <Link href="/work">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View My Work
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
      </div>
    </div>
  );
}
