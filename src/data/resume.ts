export interface ResumeRole {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
}

export const resumeRoles: ResumeRole[] = [
  {
    id: "1",
    title: "UI Engineer",
    company: "AT&T / Consultant via Insight Global",
    location: "Atlanta, GA",
    startDate: "Oct 2025",
    current: true,
    bullets: [
      "Lead UI/UX design and prototyping for enterprise-scale GenAI initiative, delivering agentic AI interfaces that accelerated design delivery cycles",
      "Architected and maintain WCAG-compliant enterprise design system in React, improving accessibility scores and ensuring consistent component reuse across products",
      "Integrated AI-driven automation into existing workflows and user interfaces, collaborating with cross-functional engineering and product teams",
      "Mentored team of 1–3 designers and developers on design system standards, accessibility best practices, and React component architecture"
    ],
    stack: ["React", "Figma", "Adobe Creative Suite", "WCAG", "Design Systems", "GenAI", "Agentic AI"]
  },
  {
    id: "2",
    title: "Lead User Experience Designer",
    company: "TechMahindra / BrightSpeed",
    location: "Remote",
    startDate: "June 2024",
    endDate: "Sept 2025",
    bullets: [
      "Led cross-functional design team in full redesign of Customer Service Application, improving agent workflow efficiency and reducing average task time by 20%",
      "Integrated AI-driven chat assistance into live customer interaction layer, streamlining agent response time and reducing manual task overhead",
      "Produced wireframes and high-fidelity Figma prototypes aligned with enterprise design standards, partnering with React developers for pixel-perfect implementation",
      "Conducted user research and workflow mapping in Miro, translating findings into measurable UX improvements across the application"
    ],
    stack: ["Figma", "React", "Miro", "AI", "UX Research", "Enterprise Design Systems"]
  },
  {
    id: "3",
    title: "Lead User Experience Designer",
    company: "TechMahindra / Cricket Wireless",
    location: "Atlanta, GA (Remote)",
    startDate: "November 2023",
    endDate: "June 2024",
    bullets: [
      "Defined design language for Back Office Reskin, integrating Material UI with Figma-based design systems to standardize UI patterns across the product",
      "Led cross-functional design review sessions to refine interaction design and improve usability across back-office tools",
      "Conducted user testing and stakeholder interviews to validate design solutions, ensuring alignment between user needs and business goals",
      "Built AEM-based component libraries to improve UI consistency and reduce design-to-development handoff time across teams"
    ],
    stack: ["Figma", "Material UI", "AEM", "WCAG", "Design Systems", "UX Research"]
  },
  {
    id: "4",
    title: "Lead User Experience Designer",
    company: "SpyCloud",
    location: "Austin, TX",
    startDate: "July 2021",
    endDate: "July 2023",
    bullets: [
      "Solely architected and delivered NPM-based Design System from the ground up, standardizing 20–50 reusable UI components and design tokens across React",
      "Owned end-to-end front-end architecture rebuild, serving as sole designer and developer bridging Figma prototypes through to React implementation",
      "Created interactive Figma prototypes to align stakeholders and streamline developer handoff for React implementation",
      "Mapped complex user workflows in Miro and led usability testing sessions to optimize customer journeys and measurably improve task efficiency",
      "Managed design sprints in JIRA across cross-functional teams, ensuring consistent delivery of accessible, scalable product experiences"
    ],
    stack: ["React", "Figma", "SCSS", "NPM", "Design Systems", "Miro", "JIRA", "WCAG"]
  },
  {
    id: "5",
    title: "Lead UX/UI Designer and Developer",
    company: "3Data",
    location: "Austin, TX",
    startDate: "March 2021",
    endDate: "July 2021",
    bullets: [
      "Led all UX/UI design for 3D data visualization startup, owning full product design process from concept through interactive Figma prototype",
      "Conducted user research and workflow mapping to define interaction patterns for complex 3D data visualization interfaces",
      "Delivered responsive, stakeholder-ready prototypes under startup pace, demonstrating ability to move quickly without sacrificing design quality"
    ],
    stack: ["Figma", "UX Research", "3D Visualization", "Prototyping", "Workflow Mapping"]
  },
  {
    id: "6",
    title: "UX/UI Developer",
    company: "TCS / Apple Vendor",
    location: "Austin, TX",
    startDate: "June 2019",
    endDate: "March 2021",
    bullets: [
      "Designed and developed responsive UI components for 3 internal Apple tools using React, AEM, SCSS, and Vanilla JavaScript, aligned with Apple's strict design standards and accessibility requirements",
      "Built AEM-based component libraries improving UI consistency and reducing design-to-development handoff time across internal teams",
      "Created wireframes, interactive prototypes, and WCAG-compliant layouts, participating in usability evaluations and design sprints to refine features based on user feedback",
      "Mentored 1–3 junior developers on code quality, Git workflows, and front-end best practices"
    ],
    stack: ["React", "AEM", "SCSS", "JavaScript", "WCAG", "Git", "Prototyping"]
  },
  {
    id: "7",
    title: "UX/UI Designer",
    company: "LTI / Apple Vendor",
    location: "Austin, TX",
    startDate: "March 2019",
    endDate: "June 2019",
    bullets: [
      "Led small team to design and build new internal application for Apple's customer service and sales organization, saving 50+ staff an estimated 3–4 hours per person per day in manual workflow time",
      "Owned end-to-end UX process including stakeholder interviews, design sprints, and usability testing to define and validate the application experience",
      "Participated in usability evaluations and design sprints, refining features based on user feedback",
      "Developed responsive UI components using Angular, HTML, CSS, and JavaScript, ensuring accessibility and design consistency throughout"
    ],
    stack: ["Angular", "HTML", "CSS", "JavaScript", "Design Sprints", "Usability Testing", "Accessibility"]
  },
  {
    id: "8",
    title: "UI Developer",
    company: "NTTData / TxDot Vendor",
    location: "Austin, TX",
    startDate: "October 2018",
    endDate: "March 2019",
    bullets: [
      "Built and optimized UI components using Angular, HTML, CSS, and JavaScript for Texas Department of Transportation internal tools",
      "Collaborated with UX teams to ensure accessibility compliance and design consistency across applications"
    ],
    stack: ["Angular", "HTML", "CSS", "JavaScript", "Accessibility"]
  },
  {
    id: "9",
    title: "UX/UI Designer and Developer",
    company: "DeveloperProgram.com / Constellant",
    location: "Austin, TX",
    startDate: "July 2014",
    endDate: "October 2018",
    bullets: [
      "Designed and developed responsive web applications using HTML, CSS, JavaScript, and proprietary CMS tools across 4-year tenure",
      "Created interactive prototypes and conducted user testing to validate and refine user experience",
      "Provided mentorship and leadership to cross-functional design and development teams"
    ],
    stack: ["HTML", "CSS", "JavaScript", "Prototyping", "User Testing", "CMS"]
  }
];

export const getCurrentRole = (): ResumeRole | undefined => {
  return resumeRoles.find(role => role.current);
};

export const getRolesByCompany = (company: string): ResumeRole[] => {
  return resumeRoles.filter(role => role.company.toLowerCase().includes(company.toLowerCase()));
};
