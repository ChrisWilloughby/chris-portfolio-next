"use client";

import { useMemo } from "react";

interface MDXContentProps {
  content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
  const processedContent = useMemo(() => {
    // Simple MDX-like processing for demonstration
    // In a real implementation, you'd use @mdx-js/loader or similar
    let processed = content;
    
    // Convert headers to add IDs
    processed = processed.replace(/^(#{1,6})\s+(.+)$/gm, (match, hashes, text) => {
      const level = hashes.length;
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return `<h${level} id="${id}">${text}</h${level}>`;
    });
    
    // Convert code blocks
    processed = processed.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre><code class="language-${lang || 'text'}">${code.trim()}</code></pre>`;
    });
    
    // Convert inline code
    processed = processed.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Convert bold and italic
    processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    
    // Convert links
    processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    // Convert line breaks to paragraphs (simplified)
    const paragraphs = processed.split('\n\n').map(p => {
      if (p.trim().startsWith('<h') || p.trim().startsWith('<pre') || p.trim().startsWith('<ul') || p.trim().startsWith('<ol') || p.trim().startsWith('<blockquote')) {
        return p;
      }
      return `<p>${p.trim()}</p>`;
    });
    
    // Convert lists
    processed = paragraphs.join('\n\n').replace(/^\* (.+)$/gm, '<li>$1</li>');
    processed = processed.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>');
    
    // Convert numbered lists
    processed = processed.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
    
    // Convert blockquotes
    processed = processed.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
    
    return processed;
  }, [content]);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: processedContent }}
      className="mdx-content"
    />
  );
}
