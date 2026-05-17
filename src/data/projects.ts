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
  // Selected Work
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

  // Enterprise Work
  {
    id: "1",
    title: "AT&T GenAI Enterprise Tools",
    slug: "att-genai-enterprise-tools",
    category: "Enterprise Systems",
    shortDescription: "Enterprise-grade generative AI tools and interfaces for internal teams, focused on usability, security, and scalability.",
    role: "Lead Frontend Engineer",
    tools: ["React", "TypeScript", "Next.js", "TailwindCSS", "Framer Motion"],
    impact: [
      "Delivered intuitive AI tooling used by thousands of internal employees",
      "Reduced time-to-value for AI adoption across business units",
      "Established consistent patterns for GenAI UI components"
    ],
    status: "NDA-Safe Summary",
    href: "/work/att-genai-enterprise-tools",
    featured: false,
    image: "/images/work/abstract-enterprise-ai.png"
  },
  {
    id: "2",
    title: "BrightSpeed Customer Service Application Redesign",
    slug: "brightspeed-customer-service-redesign",
    category: "Enterprise UX",
    shortDescription: "Complete redesign of customer service portal improving agent efficiency and customer experience.",
    role: "Senior Frontend Developer",
    tools: ["React", "TypeScript", "Material-UI", "Redux", "Jest"],
    impact: [
      "Improved agent task completion rates through streamlined workflows",
      "Reduced average handle time for customer interactions",
      "Enhanced accessibility compliance across the application"
    ],
    status: "NDA-Safe Summary",
    href: "/work/brightspeed-customer-service-redesign",
    featured: false
  },
  {
    id: "3",
    title: "SpyCloud Design System + Accessibility",
    slug: "spycloud-design-system-accessibility",
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
  },
  {
    id: "6",
    title: "Developer Portal System",
    slug: "developer-portal-system",
    category: "Developer Portals / Platform Work",
    shortDescription: "A grouped developer ecosystem case study spanning ADP, Comcast, Jabra, Conviva, and Anacapa, focused on documentation systems, onboarding flows, API discovery, and scalable portal patterns.",
    role: "Frontend Developer",
    tools: ["React", "TypeScript", "Next.js", "Docusaurus", "Auth0"],
    impact: [
      "Created reusable portal patterns across multiple developer ecosystem sites",
      "Improved API discovery, documentation access, and onboarding clarity",
      "Supported platform teams with scalable information architecture and UI systems"
    ],
    status: "Case Study",
    href: "/work/developer-portal-system",
    featured: true,
    image: "/images/work/developer-portal-system.png"
  },
  {
    id: "7",
    title: "ADP Developer Portal",
    slug: "adp-developer-portal",
    category: "Developer Portals / Platform Work",
    shortDescription: "Developer portal for ADP APIs with documentation, authentication, and testing tools.",
    role: "Frontend Developer",
    tools: ["React", "TypeScript", "Next.js", "Swagger", "Auth0"],
    impact: [
      "Centralized API documentation and testing for external developers",
      "Improved API adoption through better developer experience",
      "Streamlined authentication and onboarding flows"
    ],
    status: "NDA-Safe Summary",
    href: "/work/adp-developer-portal",
    featured: false
  },
  {
    id: "8",
    title: "Comcast Incubator Portal",
    slug: "comcast-incubator-portal",
    category: "Developer Portals / Platform Work",
    shortDescription: "Internal incubator platform for rapid prototyping and innovation projects.",
    role: "Frontend Engineer",
    tools: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
    impact: [
      "Accelerated internal innovation through rapid prototyping tools",
      "Enabled cross-team collaboration on experimental projects",
      "Reduced time from idea to proof-of-concept"
    ],
    status: "NDA-Safe Summary",
    href: "/work/comcast-incubator-portal",
    featured: false
  },
  {
    id: "9",
    title: "Jabra Developer Portal",
    slug: "jabra-developer-portal",
    category: "Developer Portals / Platform Work",
    shortDescription: "Developer portal for Jabra SDKs and APIs with comprehensive documentation.",
    role: "Frontend Developer",
    tools: ["React", "TypeScript", "Next.js", "Docusaurus", "GitLab"],
    impact: [
      "Improved developer onboarding for Jabra SDK integration",
      "Centralized documentation and code examples",
      "Enhanced API testing and debugging capabilities"
    ],
    status: "NDA-Safe Summary",
    href: "/work/jabra-developer-portal",
    featured: false
  },
  {
    id: "10",
    title: "Conviva Developer Portal",
    slug: "conviva-developer-portal",
    category: "Developer Portals / Platform Work",
    shortDescription: "Developer portal for Conviva's video analytics APIs and SDKs.",
    role: "Frontend Developer",
    tools: ["React", "TypeScript", "Next.js", "Stripe", "Auth0"],
    impact: [
      "Streamlined API access and documentation for video analytics",
      "Improved developer experience with interactive examples",
      "Reduced integration time for new customers"
    ],
    status: "NDA-Safe Summary",
    href: "/work/conviva-developer-portal",
    featured: false
  },
  {
    id: "11",
    title: "Anacapa Partners",
    slug: "anacapa-partners",
    category: "Developer Portals / Platform Work",
    shortDescription: "Platform for financial data analysis and reporting tools.",
    role: "Frontend Developer",
    tools: ["React", "TypeScript", "D3.js", "Python", "PostgreSQL"],
    impact: [
      "Enabled complex financial data visualization and analysis",
      "Improved reporting accuracy and speed",
      "Enhanced user experience for financial analysts"
    ],
    status: "Client Work",
    href: "/work/anacapa-partners",
    featured: false
  },

  // UI Labs / Code Experiments
  {
    id: "12",
    title: "JavaScript Paddle Game",
    slug: "javascript-paddle-game",
    category: "UI Labs / Code Experiments",
    shortDescription: "Browser-based paddle game demonstrating JavaScript game development patterns.",
    role: "Creator",
    tools: ["JavaScript", "HTML5 Canvas", "CSS3"],
    impact: [
      "Explored game development patterns in pure JavaScript",
      "Demonstrated canvas rendering and animation techniques",
      "Served as learning example for game loop implementation"
    ],
    status: "Lab",
    href: "/work/javascript-paddle-game",
    featured: false
  },
  {
    id: "13",
    title: "Angular Card Builder",
    slug: "angular-card-builder",
    category: "UI Labs / Code Experiments",
    shortDescription: "Interactive card builder component demonstrating Angular patterns and state management.",
    role: "Creator",
    tools: ["Angular", "TypeScript", "RxJS", "SCSS"],
    impact: [
      "Explored reactive programming patterns with RxJS",
      "Demonstrated component composition in Angular",
      "Served as reference for complex form handling"
    ],
    status: "Lab",
    href: "/work/angular-card-builder",
    featured: false
  },
  {
    id: "14",
    title: "YouTube Playlist Player",
    slug: "youtube-playlist-player",
    category: "UI Labs / Code Experiments",
    shortDescription: "Custom YouTube playlist player with enhanced controls and features.",
    role: "Creator",
    tools: ["React", "YouTube API", "TypeScript", "TailwindCSS"],
    impact: [
      "Explored YouTube API integration patterns",
      "Demonstrated custom video player controls",
      "Experimented with playlist management and state"
    ],
    status: "Lab",
    href: "/work/youtube-playlist-player",
    featured: false
  },
  {
    id: "15",
    title: "Code Playground Example",
    slug: "code-playground-example",
    category: "UI Labs / Code Experiments",
    shortDescription: "Interactive code playground demonstrating live code execution and preview.",
    role: "Creator",
    tools: ["React", "TypeScript", "Monaco Editor", "Sandpack"],
    impact: [
      "Explored live code execution patterns",
      "Demonstrated editor integration and sandboxing",
      "Served as reference for interactive documentation"
    ],
    status: "Lab",
    href: "/work/code-playground-example",
    featured: false
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
