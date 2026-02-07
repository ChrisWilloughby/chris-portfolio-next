import * as React from 'react';
import { cn } from '@/lib/utils';

interface MDXComponents {
  h1: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>;
  h2: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>;
  h3: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>;
  h4: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>;
  p: React.ComponentType<React.HTMLAttributes<HTMLParagraphElement>>;
  a: React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
  ul: React.ComponentType<React.HTMLAttributes<HTMLUListElement>>;
  ol: React.ComponentType<React.HTMLAttributes<HTMLOListElement>>;
  li: React.ComponentType<React.HTMLAttributes<HTMLLIElement>>;
  blockquote: React.ComponentType<React.HTMLAttributes<HTMLQuoteElement>>;
  pre: React.ComponentType<React.HTMLAttributes<HTMLPreElement>>;
  code: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
  hr: React.ComponentType<React.HTMLAttributes<HTMLHRElement>>;
}

const components: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-6",
        className
      )} 
      {...props} 
    />
  ),
  h2: ({ className, ...props }) => (
    <h2 
      id={props.children?.toString()?.toLowerCase().replace(/\s+/g, '-')}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4",
        className
      )} 
      {...props} 
    />
  ),
  h3: ({ className, ...props }) => (
    <h3 
      id={props.children?.toString()?.toLowerCase().replace(/\s+/g, '-')}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight mb-3",
        className
      )} 
      {...props} 
    />
  ),
  h4: ({ className, ...props }) => (
    <h4 
      id={props.children?.toString()?.toLowerCase().replace(/\s+/g, '-')}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight mb-2",
        className
      )} 
      {...props} 
    />
  ),
  p: ({ className, ...props }) => (
    <p 
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground",
        className
      )} 
      {...props} 
    />
  ),
  a: ({ className, ...props }) => (
    <a 
      className={cn(
        "font-medium text-primary underline underline-offset-4 hover:text-primary/80",
        className
      )} 
      {...props} 
    />
  ),
  ul: ({ className, ...props }) => (
    <ul 
      className={cn(
        "my-6 ml-6 list-disc [&>li]:mt-2",
        className
      )} 
      {...props} 
    />
  ),
  ol: ({ className, ...props }) => (
    <ol 
      className={cn(
        "my-6 ml-6 list-decimal [&>li]:mt-2",
        className
      )} 
      {...props} 
    />
  ),
  li: ({ className, ...props }) => (
    <li 
      className={cn(
        "text-muted-foreground",
        className
      )} 
      {...props} 
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote 
      className={cn(
        "mt-6 border-l-2 pl-6 italic text-muted-foreground",
        className
      )} 
      {...props} 
    />
  ),
  pre: ({ className, ...props }) => (
    <pre 
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted px-4 py-4 font-mono text-sm",
        className
      )} 
      {...props} 
    />
  ),
  code: ({ className, ...props }) => (
    <code 
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )} 
      {...props} 
    />
  ),
  hr: ({ className, ...props }) => (
    <hr 
      className={cn(
        "my-4 border-border",
        className
      )} 
      {...props} 
    />
  ),
};

export default components;
