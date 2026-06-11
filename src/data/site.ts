export const siteInfo = {
  name: "Alex Chen",
  firstName: "Alex",
  role: "Full-Stack Developer & UI Architect",
  bio: "I build thoughtful, performant web applications with modern tools. Focused on clean design, solid engineering, and user experience that just feels right.",
  email: "alex@example.com",
  bookingUrl: "https://cal.com/alexchen",
  availability: "Available for new projects",
};

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "GraphQL",
  "Prisma",
  "Astro",
  "Redis",
  "AWS",
];

export const experience = [
  {
    company: "Studio Nebula",
    role: "Senior Frontend Engineer",
    dates: "Jan 2024 — Present",
    description:
      "Leading the frontend team building a design systems platform used by hundreds of product teams.",
    achievements: [
      "Architected a component library serving 12 product teams across the organization",
      "Reduced bundle size by 40% through code splitting and tree-shaking optimizations",
      "Mentored 4 junior engineers through structured pair programming and code reviews",
    ],
    tags: ["React", "TypeScript", "Storybook", "CSS Modules"],
  },
  {
    company: "Polaris Labs",
    role: "Full-Stack Developer",
    dates: "Jun 2022 — Dec 2023",
    description:
      "Built and maintained customer-facing SaaS products in the developer tools space.",
    achievements: [
      "Delivered a real-time collaboration feature using WebSockets and CRDTs",
      "Designed and implemented a REST + GraphQL API serving 50k+ daily requests",
      "Led migration from a monolith to a microservices architecture on AWS ECS",
    ],
    tags: ["Node.js", "React", "PostgreSQL", "Docker", "GraphQL"],
  },
  {
    company: "Rivet Software",
    role: "Junior Developer",
    dates: "Sep 2020 — May 2022",
    description:
      "Started my career building internal tooling and customer-facing dashboards.",
    achievements: [
      "Built an internal analytics dashboard adopted by the entire customer success team",
      "Automated CI/CD pipelines reducing deployment time from 30 minutes to 5 minutes",
      "Contributed to open-source libraries used by the broader developer community",
    ],
    tags: ["JavaScript", "Python", "React", "PostgreSQL"],
  },
];

export const projects = [
  {
    title: "Prism UI",
    status: "Active" as const,
    description:
      "An open-source React component library focused on accessibility and developer experience.",
    icon: "A",
  },
  {
    title: "Taskflow",
    status: "Sold" as const,
    description:
      "A lightweight project management tool for remote teams, built with Next.js and Prisma.",
    icon: "B",
  },
  {
    title: "Chartbird",
    status: "Active" as const,
    description:
      "A real-time data visualization playground for exploring CSV datasets in the browser.",
    icon: "C",
  },
  {
    title: "Void Mail",
    status: "Archived" as const,
    description:
      "A disposable email service with a clean web interface and ephemeral inboxes.",
    icon: "D",
  },
];

export const blogPosts = [
  { title: "Building accessible React components from scratch", source: "Medium" },
  { title: "Why I switched from Next.js to Astro for my portfolio", source: "Dev.to" },
  { title: "A practical guide to TypeScript generics", source: "Personal Blog" },
  { title: "Scaling PostgreSQL for SaaS applications", source: "Medium" },
  { title: "The art of writing maintainable CSS", source: "Dev.to" },
];

export const socialLinks = [
  { platform: "X (Twitter)" as const, url: "https://x.com/alexchen" },
  { platform: "LinkedIn" as const, url: "https://linkedin.com/in/alexchen" },
  { platform: "GitHub" as const, url: "https://github.com/alexchen" },
];
