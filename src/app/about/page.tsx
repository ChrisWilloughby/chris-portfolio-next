import { Mail, MapPin, Calendar, Coffee, Code, Music, Camera, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const interests = [
  {
    icon: Code,
    title: "Open Source",
    description: "Contributing to projects and building tools that help developers be more productive."
  },
  {
    icon: Coffee,
    title: "Coffee & Code",
    description: "Perfecting the art of brewing while writing clean, efficient code."
  },
  {
    icon: Music,
    title: "Music Production",
    description: "Creating electronic music and exploring the intersection of art and technology."
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and exploring visual storytelling through lenses."
  },
  {
    icon: Book,
    title: "Continuous Learning",
    description: "Always exploring new technologies and staying current with industry trends."
  }
];

const values = [
  {
    title: "Quality First",
    description: "Writing clean, maintainable code that stands the test of time."
  },
  {
    title: "User-Centered",
    description: "Building products that solve real problems and delight users."
  },
  {
    title: "Collaboration",
    description: "Working effectively with teams and fostering inclusive environments."
  },
  {
    title: "Innovation",
    description: "Embracing new challenges and finding creative solutions to complex problems."
  },
  {
    title: "Growth Mindset",
    description: "Continuously learning and adapting to new technologies and methodologies."
  },
  {
    title: "Integrity",
    description: "Building trust through transparency, honesty, and ethical practices."
  }
];

export default function AboutPage() {
  return (
    <div className="container px-4 py-16 mx-auto max-w-4xl">
      <section className="text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          About Me
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Passionate full-stack developer with a love for creating elegant solutions 
          to complex problems. I believe in the power of technology to transform ideas 
          into reality and improve people's lives.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              My Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              My journey into software development began with a curiosity about how websites work 
              and evolved into a passion for building scalable, user-centric applications. 
              Over the past 5+ years, I've had the privilege of working with diverse teams 
              and tackling challenges across various industries.
            </p>
            <p className="text-muted-foreground">
              I specialize in full-stack development with a focus on modern JavaScript frameworks, 
              but I'm always excited to learn new technologies and approaches. My experience 
              ranges from startups to enterprise environments, giving me a broad perspective 
              on software development best practices.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Current Focus
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Currently based in San Francisco, I'm working on enterprise-scale applications 
              that serve thousands of users daily. My focus is on performance optimization, 
              system architecture, and mentoring the next generation of developers.
            </p>
            <p className="text-muted-foreground">
              I'm particularly interested in the intersection of AI and web development, 
              exploring how machine learning can enhance user experiences and automate 
              complex workflows. When I'm not coding, you'll find me contributing to open 
              source projects or experimenting with new technologies.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, index) => (
            <Card key={index} className="border-border/40 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Beyond Code</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card key={index} className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{interest.title}</CardTitle>
                  <CardDescription>{interest.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Technical Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              I believe that great software is built on a foundation of clean code, 
              thoughtful architecture, and a deep understanding of user needs. 
              My approach emphasizes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Development Principles</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Write code that humans can understand</li>
                  <li>• Test early, test often</li>
                  <li>• Optimize for maintainability</li>
                  <li>• Embrace iterative development</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Team Collaboration</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Knowledge sharing and documentation</li>
                  <li>• Constructive code reviews</li>
                  <li>• Clear communication</li>
                  <li>• Supporting team growth</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Let's Connect</h3>
            <p className="text-muted-foreground mb-4">
              I'm always open to discussing new opportunities, sharing knowledge, 
              or collaborating on interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="mailto:chris@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send a Message
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/work">View My Work</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
