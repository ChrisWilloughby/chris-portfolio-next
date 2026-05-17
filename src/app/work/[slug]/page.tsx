import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TableOfContents } from "@/components/ui/table-of-contents";
import { getMDXPost, getMDXPostSlugs } from "@/lib/mdx";
import { getProjectBySlug } from "@/data/projects";
import MDXContent from "@/components/mdx/mdx-content";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getMDXPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getMDXPost(slug);
  const project = getProjectBySlug(slug);
  
  if (!post || !project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Chris Willoughby`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getMDXPost(slug);
  const project = getProjectBySlug(slug);

  if (!post || !project) {
    notFound();
  }

  return (
    <div className="container px-4 py-16 mx-auto max-w-6xl">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>
        </Button>
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
              {project.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{project.role}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
          <span>•</span>
          <span>{project.status}</span>
          {project.featured && (
            <>
              <span>•</span>
              <Badge variant="default" className="text-xs">Featured</Badge>
            </>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardContent className="p-8 lg:p-12">
              <article className="prose prose-invert prose-lg max-w-none">
                <MDXContent content={post.content} />
              </article>
            </CardContent>
          </Card>
          
          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Button variant="outline" asChild>
              <Link href="/work">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Work
              </Link>
            </Button>
            
            <Badge variant="outline">{project.category}</Badge>
          </div>
        </div>

        {/* Table of Contents - Desktop Only */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <Card className="border-border/40 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <TableOfContents />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
