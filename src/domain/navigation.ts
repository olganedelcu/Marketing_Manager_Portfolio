import { z } from "zod";

export const NavItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  external: z.boolean().optional(),
});

export type NavItem = z.infer<typeof NavItemSchema>;

export const NavGroupSchema = z.object({
  title: z.string().optional(),
  items: z.array(NavItemSchema),
});

export type NavGroup = z.infer<typeof NavGroupSchema>;
