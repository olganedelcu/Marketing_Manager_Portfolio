import { ProjectSchema, type Project } from "@/domain/project";

const raw = [
  {
    slug: "santander-x-explorer",
    title: "Santander X Explorer",
    description: "A 12-week entrepreneurship program focused on developing a business idea aimed at bringing programming education to villages with limited access to technology. The project evolved into a market-ready initiative, presented and sold to several town halls, supported by a marketing strategy that attracted multiple sponsors and over a hundred interested customers.",
    tags: [
      "Entrepreneurship",
      "Entrepreneurial Studies",
      "Business Development",
      "Marketing Strategy",
      "Education"
    ],
    href: "https://www.santanderx.com",
    featured: false,
    logos: [
      {
        src: "/assets/logos/santander.jpg",
        alt: "Santander X logo"
      }
    ]
  },
  {
    slug: "marketing-geeks-in-ai",
    title: "Marketing Geeks in AI",
    description: "Founder of a marketing community created to bridge the gap between AI theory and practical application for marketers. The initiative provides actionable insights, tools, and strategies to help professionals adapt to AI-driven changes. Built Berlin's largest marketing community, hosting in-person events and featuring renowned AI speakers and industry experts.",
    tags: [
      "AI Marketing",
      "Community Building",
      "Event Management",
      "Leadership",
      "Project Management",
      "Artificial Intelligence"
    ],
    featured: true
  }
] satisfies unknown[];

export const projects: Project[] = raw.map((p) => ProjectSchema.parse(p));
