import { ProjectSchema, type Project } from "@/domain/project";

const raw = [
  {
    slug: "portfolio-rebuild",
    title: "Rebuilt personal site with Next.js",
    description: "A clean marketing portfolio with content schemas and shadcn/ui.",
    tags: ["Next.js", "shadcn/ui", "TypeScript"],
    featured: true,
    href: "https://example.com",
  },
] satisfies unknown[];

export const projects: Project[] = raw.map((p) => ProjectSchema.parse(p));
