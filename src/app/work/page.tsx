import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <div className="container px-4 py-16 mx-auto">
      <section className="text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          My Work
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of projects showcasing my skills in full-stack development, 
          UI/UX design, and problem-solving. Each project represents unique challenges 
          and innovative solutions.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {projects.map((project) => (
          <Card key={project.id} className="border-border/40 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-sm">
                {project.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {project.links.caseStudy && (
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.links.caseStudy}>
                      Read case study <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                )}
                {project.links.github && (
                  <Button size="sm" variant="ghost" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.links.live && (
                  <Button size="sm" variant="ghost" asChild>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Interested in Collaboration?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your visions. Feel free to reach out!
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Let's Talk</Link>
        </Button>
      </section>
    </div>
  );
}
