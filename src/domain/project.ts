import { z } from "zod";

export const ProjectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  tags: z.array(z.string()).default([]),
  href: z.string().url().optional(),
  featured: z.boolean().default(false),
});

export type Project = z.infer<typeof ProjectSchema>;
