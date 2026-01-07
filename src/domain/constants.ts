// route constants, labels, and other app-wide constants

import type { NavItem, NavGroup } from "./navigation";

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  KIND_WORDS: "/kind-words",
  CONTACT: "/contact",
  RESUME: "/resume",
  BLOG: "/blog",
} as const;

export const LABELS = {
  SITE_NAME: "Marketing Manager Portfolio",
  SITE_DESCRIPTION: "Showcasing marketing campaigns, content, and professional updates",
} as const;

// main navigation links
export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Projects", href: ROUTES.PROJECTS },
  { label: "Kind Words", href: ROUTES.KIND_WORDS },
];

// resources navigation group
export const RESOURCES_NAV: NavGroup = {
  title: "Resources",
  items: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mirunaen/", external: true },
    { label: "Resume", href: ROUTES.RESUME },
    { label: "Contact", href: ROUTES.CONTACT },
  ],
};
