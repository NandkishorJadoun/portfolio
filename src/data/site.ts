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

export const openSourceRepos = [
  {
    name: "prism-ui",
    description:
      "A React component library focused on accessibility, theming, and developer experience. Used by teams at several startups.",
    stars: 1280,
    language: "TypeScript",
    url: "https://github.com/alexchen/prism-ui",
  },
  {
    name: "void",
    description:
      "Tiny, immutable state management library for TypeScript projects. Zero dependencies, 1 KB gzipped.",
    stars: 640,
    language: "TypeScript",
    url: "https://github.com/alexchen/void",
  },
  {
    name: "chisel",
    description:
      "A CLI tool for scaffolding and managing microservices. Generates boilerplate, Dockerfiles, and CI configs from a single YAML file.",
    stars: 310,
    language: "Go",
    url: "https://github.com/alexchen/chisel",
  },
  {
    name: "postcss-theme-switcher",
    description:
      "PostCSS plugin for runtime theme switching without CSS custom property overhead. Generates theme-specific stylesheets on build.",
    stars: 180,
    language: "JavaScript",
    url: "https://github.com/alexchen/postcss-theme-switcher",
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
