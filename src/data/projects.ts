export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  stack: string[];
  links: {
    caseStudy?: string;
    live?: string;
    github?: string;
  };
  featured?: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    summary: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "TailwindCSS", "Redis"],
    links: {
      caseStudy: "/work/ecommerce-platform",
      live: "https://ecommerce-demo.chriswilloughby.dev",
      github: "https://github.com/chriswilloughby/ecommerce-platform"
    },
    featured: true,
    year: 2024
  },
  {
    id: "2", 
    title: "Task Management App",
    slug: "task-management-app",
    summary: "Collaborative task management with real-time updates and team analytics.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Chart.js"],
    links: {
      caseStudy: "/work/task-management-app",
      live: "https://tasks.chriswilloughby.dev",
      github: "https://github.com/chriswilloughby/task-app"
    },
    featured: true,
    year: 2023
  },
  {
    id: "3",
    title: "Weather Dashboard",
    slug: "weather-dashboard", 
    summary: "Interactive weather dashboard with location-based forecasts and data visualization.",
    stack: ["Vue.js", "Chart.js", "OpenWeather API", "Geolocation API", "CSS3"],
    links: {
      caseStudy: "/work/weather-dashboard",
      live: "https://weather.chriswilloughby.dev",
      github: "https://github.com/chriswilloughby/weather-dashboard"
    },
    featured: false,
    year: 2023
  },
  {
    id: "4",
    title: "Social Media Analytics",
    slug: "social-media-analytics",
    summary: "Real-time analytics dashboard for social media performance tracking.",
    stack: ["React", "Python", "FastAPI", "PostgreSQL", "D3.js", "Redis"],
    links: {
      caseStudy: "/work/social-media-analytics",
      live: "https://analytics.chriswilloughby.dev",
      github: "https://github.com/chriswilloughby/social-analytics"
    },
    featured: true,
    year: 2024
  },
  {
    id: "5",
    title: "Learning Management System",
    slug: "learning-management-system",
    summary: "Educational platform with video streaming, quizzes, and progress tracking.",
    stack: ["Next.js", "Node.js", "AWS", "MongoDB", "WebRTC", "Stripe"],
    links: {
      caseStudy: "/work/learning-management-system",
      live: "https://lms.chriswilloughby.dev",
      github: "https://github.com/chriswilloughby/lms"
    },
    featured: false,
    year: 2022
  },
  {
    id: "6",
    title: "Real Estate Platform",
    slug: "real-estate-platform",
    summary: "Property listing platform with virtual tours and advanced search filters.",
    stack: ["Vue.js", "Laravel", "MySQL", "Three.js", "Mapbox", "AWS S3"],
    links: {
      caseStudy: "/work/real-estate-platform",
      live: "https://realestate.chriswilloughby.dev",
      github: "https://github.com/chriswilloughby/real-estate"
    },
    featured: true,
    year: 2023
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByYear = (year: number): Project[] => {
  return projects.filter(project => project.year === year);
};
