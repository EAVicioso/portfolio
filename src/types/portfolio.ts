/**
 * portfolio.ts — Type definitions.
 * Edit src/data/config.ts to update visible content.
 */

export interface TechItem {
  name: string;
  icon?: string;
  color?: string;
  category: "language" | "framework" | "tool" | "cloud" | "database";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tag: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  accentColor?: string;
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "mail" | "website";
}

export interface PortfolioConfig {
  profile: {
    name: string;
    role: string;
    bio: string;
    avatarUrl?: string;
    location?: string;
    ctaLabel: string;
    ctaUrl: string;
  };
  social: SocialLink[];
  projects: Project[];
  stack: TechItem[];
  nav: { label: string; id: string }[];
}
