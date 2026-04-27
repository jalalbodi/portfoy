export type SkillLevel = "Good" | "Intermediate" | "Learning";

export type SkillCategory = {
  title: string;
  items: {
    name: string;
    level: SkillLevel;
  }[];
};

export type Project = {
  title: string;
  pitch: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  contribution: string;
  outcome: string;
};

export type ExperienceItem = {
  type: "Internship" | "Freelance" | "Open source" | "Assistantship";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
};

export const profile = {
  isSampleData: true,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  name: "Mert Kaya",
  role: "Computer Engineering Student",
  location: "Bitlis, Turkiye",
  email: "your.email@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  cvUrl: "/cv.pdf",
  pitch: [
    "I build small, reliable web applications and practice DevOps by shipping them like real products: typed code, containers, CI checks, and monitored health endpoints.",
    "My current focus is full-stack TypeScript, backend fundamentals, and deployment workflows that make projects easier to maintain after the demo day ends.",
  ],
  heroMetrics: [
    { label: "Primary stack", value: "Next.js + TypeScript" },
    { label: "DevOps focus", value: "Docker, CI/CD, scans" },
    { label: "Availability", value: "Internship / junior roles" },
  ],
  projects: [
    {
      title: "Campus Task Tracker",
      pitch:
        "A project board for student teams that need one place to track owners, deadlines, and review status without losing context in group chats.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      contribution:
        "Designed the data model, built the task workflow UI, and added basic access rules for team members and reviewers.",
      outcome:
        "Course-demo version completed end-to-end. Replace this with a real usage metric or jury feedback before publishing.",
    },
    {
      title: "Containerized Portfolio Pipeline",
      pitch:
        "A deployment-ready personal site that demonstrates Docker, health checks, CI gates, and production documentation in one repository.",
      stack: ["Next.js", "Docker", "GitHub Actions", "Trivy", "Semgrep"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      contribution:
        "Implemented the multi-stage Docker build, GitHub Actions pipeline, security scans, and deployment notes for Fly.io and Coolify.",
      outcome:
        "Provides a repeatable template for interview submissions and DevOps coursework, with replaceable profile content.",
    },
    {
      title: "Library Reservation API",
      pitch:
        "A REST-style backend concept for reserving study rooms, preventing duplicate bookings, and keeping cancellation rules explicit.",
      stack: ["Node.js", "Express", "SQLite", "Vitest"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      contribution:
        "Modeled reservation states, wrote validation logic, and documented endpoint behavior with practical examples.",
      outcome:
        "Validated the core booking rules with unit tests. Replace the placeholder URL with your repository when ready.",
    },
  ] satisfies Project[],
  skills: [
    {
      title: "Frontend",
      items: [
        { name: "HTML / CSS", level: "Good" },
        { name: "React", level: "Intermediate" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", level: "Intermediate" },
        { name: "REST APIs", level: "Intermediate" },
        { name: "Authentication basics", level: "Learning" },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "PostgreSQL", level: "Learning" },
        { name: "SQLite", level: "Intermediate" },
        { name: "Data modeling", level: "Learning" },
      ],
    },
    {
      title: "DevOps",
      items: [
        { name: "Docker", level: "Intermediate" },
        { name: "GitHub Actions", level: "Intermediate" },
        { name: "Linux server basics", level: "Learning" },
        { name: "Security scanning", level: "Learning" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", level: "Good" },
        { name: "VS Code", level: "Good" },
        { name: "Postman", level: "Intermediate" },
        { name: "Figma basics", level: "Learning" },
      ],
    },
  ] satisfies SkillCategory[],
  experienceIntro:
    "Academic & Personal Experience - edit these blocks with real roles as soon as you have them. Until then, they frame practical work honestly.",
  experience: [
    {
      type: "Internship",
      title: "Software Engineering Internship Block",
      organization: "Replace with company, lab, or department",
      period: "YYYY - YYYY",
      description:
        "Use this block for a real internship. Sample focus: supporting a small web feature, documenting an API, or fixing tracked bugs with mentor review.",
      highlights: [
        "Write what you shipped, tested, or documented.",
        "Mention technologies only when you actually used them.",
      ],
    },
    {
      type: "Freelance",
      title: "Freelance-style Client Brief",
      organization: "Academic or local business practice project",
      period: "Editable",
      description:
        "Frame practice work as a scoped brief: understand requirements, build the first version, collect feedback, and improve the handoff.",
      highlights: [
        "Good place for a real landing page, admin panel, or small automation.",
        "Keep outcomes concrete: time saved, forms processed, pages launched.",
      ],
    },
    {
      type: "Open source",
      title: "Open Source Learning Contributions",
      organization: "GitHub",
      period: "Editable",
      description:
        "Use for documentation fixes, issue reproduction, small pull requests, or published learning notes connected to an open repository.",
      highlights: [
        "Link to merged pull requests once available.",
        "Small but clear contributions are better than inflated claims.",
      ],
    },
    {
      type: "Assistantship",
      title: "Course / Lab Assistantship Block",
      organization: "Bitlis Eren University",
      period: "Editable",
      description:
        "Use if you support peers, labs, workshops, or study groups. If not, replace it with a practical academic project.",
      highlights: [
        "Mention topics helped with: algorithms, databases, web programming.",
        "Add the number of students or sessions only if accurate.",
      ],
    },
  ] satisfies ExperienceItem[],
  education: {
    school: "Bitlis Eren University",
    degree: "B.Sc. Computer Engineering",
    period: "2022 - 2026",
    gpa: "Editable, e.g. 3.20 / 4.00",
    courses: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  hobbies: [
    "Reading technical blogs with coffee",
    "Chess and logic puzzles",
    "Weekend walks and local travel",
    "Fitness routines",
    "Following product design breakdowns",
  ],
  seo: {
    description:
      "Production-ready personal portfolio for a computer engineering student, including projects, skills, education, Docker, CI/CD, health checks, and deployment documentation.",
    keywords: [
      "computer engineering student",
      "personal portfolio",
      "Next.js portfolio",
      "DevOps portfolio",
      "Docker",
      "GitHub Actions",
      "Bitlis Eren University",
    ],
  },
} as const;

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
] as const;
