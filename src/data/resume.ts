export interface ResumeRole {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string; // undefined for current role
  current?: boolean;
  techStack: string[];
  responsibilities: string[];
  context?: string; // Optional expanded context
  type: 'full-time' | 'contract' | 'freelance' | 'internship';
}

export const resumeRoles: ResumeRole[] = [
  {
    id: "1",
    title: "Senior Product Designer who codes production UI",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    startDate: "Jan 2022",
    current: true,
    techStack: ["React", "TypeScript", "Next.js", "Figma", "Node.js", "PostgreSQL", "AWS"],
    responsibilities: [
      "Lead design and development of enterprise-scale web applications serving 100K+ users",
      "Established design system and component library used across 5 product teams",
      "Reduced development time by 40% through reusable UI components and automated workflows",
      "Mentored junior designers and developers in best practices for design-engineering collaboration",
      "Collaborated with product managers to define roadmaps and technical requirements",
      "Implemented accessibility standards achieving WCAG 2.1 AA compliance across all products"
    ],
    context: "As the first design-engineering hire, I built the bridge between design and development teams. This role required both strategic thinking about design systems and hands-on coding of production UI components. I established processes that enabled designers to ship production-ready code and developers to maintain design consistency.",
    type: "full-time"
  },
  {
    id: "2",
    title: "Full-Stack Developer & UI/UX Designer",
    company: "Digital Solutions Agency",
    location: "Austin, TX",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    techStack: ["Vue.js", "React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Adobe XD"],
    responsibilities: [
      "Developed 15+ client projects across e-commerce, SaaS, and healthcare industries",
      "Designed and implemented responsive user interfaces with 95% client satisfaction rate",
      "Built RESTful APIs and real-time features using WebSocket connections",
      "Optimized application performance, achieving 60% faster load times",
      "Led client discovery sessions and translated business requirements into technical solutions",
      "Managed project timelines and coordinated with cross-functional teams"
    ],
    context: "This hybrid role allowed me to own projects from initial concept through deployment. I worked directly with clients to understand their needs, created wireframes and prototypes, then implemented the full solution. This end-to-end experience gave me deep insights into the product development lifecycle.",
    type: "full-time"
  },
  {
    id: "3",
    title: "Frontend Developer & UI Designer",
    company: "StartupXYZ",
    location: "Remote",
    startDate: "Mar 2019",
    endDate: "May 2020",
    techStack: ["React", "JavaScript", "CSS3", "Sass", "Jest", "Figma", "Sketch"],
    responsibilities: [
      "Developed responsive web applications using React and modern JavaScript",
      "Created and maintained component library used across multiple products",
      "Implemented pixel-perfect designs from Figma and Sketch files",
      "Improved user engagement by 35% through UX improvements and A/B testing",
      "Set up testing infrastructure achieving 85% code coverage",
      "Collaborated with backend team to integrate RESTful APIs"
    ],
    context: "Joining as the first frontend developer, I established the frontend architecture and design practices. I worked closely with the founding team to shape the product vision and user experience, while building scalable frontend systems that could grow with the company.",
    type: "full-time"
  },
  {
    id: "4",
    title: "Freelance UI/UX Designer & Developer",
    company: "Self-Employed",
    location: "Remote",
    startDate: "Sep 2018",
    endDate: "Feb 2019",
    techStack: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP", "Adobe Creative Suite"],
    responsibilities: [
      "Designed and developed websites for small businesses and startups",
      "Created brand identities and marketing materials for 10+ clients",
      "Managed client relationships from initial consultation to project delivery",
      "Implemented SEO best practices improving client search rankings",
      "Provided ongoing maintenance and support for deployed websites"
    ],
    context: "During this period, I built my foundational skills in both design and development while learning to manage client relationships and project timelines. This experience taught me the importance of clear communication and delivering value within budget constraints.",
    type: "freelance"
  },
  {
    id: "5",
    title: "Web Development Intern",
    company: "TechStart Inc.",
    location: "Boston, MA",
    startDate: "Jun 2018",
    endDate: "Aug 2018",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Git"],
    responsibilities: [
      "Assisted in developing responsive websites for corporate clients",
      "Participated in daily stand-ups and sprint planning meetings",
      "Learned and implemented Agile development methodologies",
      "Fixed bugs and implemented minor features under senior developer guidance",
      "Contributed to documentation and code reviews"
    ],
    context: "My first professional development experience where I learned industry best practices and teamwork. This internship solidified my passion for web development and taught me the importance of writing clean, maintainable code.",
    type: "internship"
  }
];

export const getRolesByType = (type: ResumeRole['type']): ResumeRole[] => {
  return resumeRoles.filter(role => role.type === type);
};

export const getCurrentRole = (): ResumeRole | undefined => {
  return resumeRoles.find(role => role.current);
};

export const getRolesByCompany = (company: string): ResumeRole[] => {
  return resumeRoles.filter(role => role.company.toLowerCase().includes(company.toLowerCase()));
};
