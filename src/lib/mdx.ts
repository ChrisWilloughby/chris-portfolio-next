import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDirectory = path.join(process.cwd(), 'src/content/work');

export interface MDXPost {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  year: number;
  featured: boolean;
  readingTime: string;
  content: string;
}

export function getMDXPosts(): MDXPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const posts = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title || '',
        summary: data.summary || '',
        stack: data.stack || [],
        year: data.year || new Date().getFullYear(),
        featured: data.featured || false,
        readingTime: readingTime(content).text,
        content,
      };
    });

  return posts.sort((a, b) => b.year - a.year);
}

export function getMDXPost(slug: string): MDXPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title || '',
      summary: data.summary || '',
      stack: data.stack || [],
      year: data.year || new Date().getFullYear(),
      featured: data.featured || false,
      readingTime: readingTime(content).text,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getMDXPostSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames
    .filter(name => name.endsWith('.mdx'))
    .map(name => name.replace(/\.mdx$/, ''));
}
