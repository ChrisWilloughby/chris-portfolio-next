export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  role: string;
  tools: string[];
  impact: string[];
  status: "Case Study" | "Client Work" | "Lab" | "NDA-Safe Summary";
  href: string;
  featured?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "0",
    title: "ProjectGhost",
    slug: "projectghost",
    category: "Current Product Work",
    shortDescription: "AI-assisted outreach and relationship intelligence for modern job search, built as a native macOS product from concept through ongoing iteration.",
    role: "Product Designer + Builder",
    tools: ["SwiftUI", "SwiftData", "Product Design", "UX Systems", "AI Workflows"],
    impact: [
      "Designed a career command center for outreach, relationships, and opportunity momentum",
      "Built local-first workflows for applications, contacts, weekly actions, and AI-assisted messaging",
      "Evolved the product from personal workflow experiment into an active product system"
    ],
    status: "Case Study",
    href: "/work/projectghost",
    featured: true,
    image: "/images/work/projectghost/hero.png"
  },
  {
    id: "00",
    title: "Agentic Developer Portal",
    slug: "agentic-developer-portal",
    category: "AI Workflow Systems",
    shortDescription: "UX workflow systems for AI-assisted repository management and agent execution.",
    role: "Product Designer",
    tools: ["Product Design", "UX Systems", "AI Workflows", "Developer Tools", "Interaction Architecture"],
    impact: [
      "Explored docked execution patterns for AI-assisted repository workflows",
      "Mapped GitHub and terminal mental models into an agent orchestration interface",
      "Documented tradeoffs around progressive disclosure, logs, navigation, and workstation context"
    ],
    status: "Case Study",
    href: "/work/agentic-developer-portal",
    featured: true,
    image: "/images/work/agentic-dev-portal/hero.png"
  },
  {
    id: "3",
    title: "SpyCloud Design System + Accessibility",
    slug: "spycloud",
    category: "Enterprise Systems + Accessibility",
    shortDescription: "Comprehensive design system with accessibility-first components and documentation.",
    role: "Design System Lead",
    tools: ["React", "TypeScript", "Storybook", "Figma", "WCAG"],
    impact: [
      "Established unified component library used across multiple products",
      "Achieved WCAG 2.1 AA compliance for all core components",
      "Reduced development time through reusable, documented components"
    ],
    status: "Case Study",
    href: "/work/spycloud",
    featured: true,
    image: "/images/work/spycloud/logo.png"
  },
  {
    id: "4",
    title: "Apple Internal Tools",
    slug: "apple-internal-tools",
    category: "Internal Tools",
    shortDescription: "Internal productivity and workflow tools for Apple engineering teams.",
    role: "Frontend Engineer",
    tools: ["SwiftUI", "React", "TypeScript", "Node.js", "GraphQL"],
    impact: [
      "Streamlined internal workflows for engineering teams",
      "Improved tool adoption through intuitive interfaces",
      "Integrated with existing Apple infrastructure seamlessly"
    ],
    status: "NDA-Safe Summary",
    href: "/work/apple-internal-tools",
    featured: false
  },

  // Developer Portals / Platform Work
  {
    id: "5",
    title: "Cisco DevNet Sandbox",
    slug: "cisco-devnet-sandbox",
    category: "Public Technical Platform Work",
    shortDescription: "Developer sandbox platform for testing and learning Cisco technologies.",
    role: "Senior Frontend Developer",
    tools: ["React", "TypeScript", "Next.js", "TailwindCSS", "Docker"],
    impact: [
      "Enabled thousands of developers to test Cisco solutions in sandboxed environments",
      "Improved onboarding experience for new platform users",
      "Reduced support requests through better self-service documentation"
    ],
    status: "Client Work",
    href: "/work/cisco-devnet-sandbox",
    featured: false,
    image: "/images/work/cisco-devnet-sandbox.png"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getCategories = (): string[] => {
  return Array.from(new Set(projects.map(project => project.category)));
};
