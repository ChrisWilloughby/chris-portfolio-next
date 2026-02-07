import Link from "next/link";
import { ArrowRight, Code2, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroBanner } from "@/components/hero/hero-banner";
import { SectionObserver } from "@/components/section-observer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Rest of the page content */}
      <main id="main-content">
        <div className="container px-4 py-16 mx-auto">
          {/* Building Digital Experiences Section */}
          <section className="mb-16">
            <SectionObserver animation="fade-in" delay={200}>
              <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Building Digital Experiences
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Full-stack developer crafting digital experiences with modern web technologies. 
                  I build scalable applications that blend beautiful design with robust functionality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/work">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/resume">Resume</Link>
                  </Button>
                </div>
              </div>
            </SectionObserver>
          </section>

          {/* Skills Grid Section */}
          <section id="work" className="mb-16">
            <SectionObserver animation="slide-up" delay={400}>
              <div className="text-center space-y-6 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Expertise & Skills
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Specialized in modern web technologies with a focus on creating exceptional user experiences.
                </p>
              </div>
            </SectionObserver>

            <div className="grid md:grid-cols-3 gap-6">
              <SectionObserver animation="slide-up" delay={600}>
                <Card className="border-border/40 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <Code2 className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Full-Stack Development</CardTitle>
                    <CardDescription>
                      Building end-to-end solutions with React, Next.js, Node.js, and modern cloud platforms.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SectionObserver>

              <SectionObserver animation="slide-up" delay={800}>
                <Card className="border-border/40 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <Palette className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>UI/UX Design</CardTitle>
                    <CardDescription>
                      Creating intuitive interfaces with attention to detail, accessibility, and user experience.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SectionObserver>

              <SectionObserver animation="slide-up" delay={1000}>
                <Card className="border-border/40 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <Zap className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Performance Optimization</CardTitle>
                    <CardDescription>
                      Delivering fast, responsive applications optimized for scale and user engagement.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SectionObserver>
            </div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="mb-16">
            <SectionObserver animation="fade-in" delay={1200}>
              <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Professional Experience
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Senior Product Designer who codes production UI with 5+ years of experience 
                  building scalable web applications and leading design systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/resume">
                      View Full Resume <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:chris@example.com">Get in Touch</a>
                  </Button>
                </div>
              </div>
            </SectionObserver>
          </section>

          {/* About Section */}
          <section id="about" className="mb-16">
            <SectionObserver animation="slide-left" delay={1400}>
              <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  About Chris
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Passionate about the intersection of design and technology. 
                  I believe in creating products that not only look beautiful but also solve real problems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/about">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SectionObserver>
          </section>

          {/* CTA Section */}
          <section>
            <SectionObserver animation="fade-in" delay={1600}>
              <Card className="border-border/40 bg-card/50 backdrop-blur">
                <CardContent className="pt-8 pb-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                    I'm always interested in hearing about new projects and opportunities. 
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </SectionObserver>
          </section>
        </div>
      </main>
    </div>
  );
}
