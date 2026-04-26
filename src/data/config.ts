/**
 * config.ts
 * ✏️  EDITABLE — actualiza tus datos aquí. Ningún otro archivo necesita tocarse.
 */

import type { PortfolioConfig } from "../types/portfolio";

export const config: PortfolioConfig = {
  // ── PERFIL ───────────────────────────────────────
  profile: {
    name: "Engels Vicioso",
    role: "Full-Stack Developer",
    bio: `I'm a senior Software Engineering major at INTEC with a solid background
     in the full software development life cycle, specializing in Web 
    and Mobile applications. Passionate about modern infrastructure, I am currently 
    exploring and deepening my knowledge about DevOps and Platform Engineering principles.`,
    location: "Distrito Nacional, Rep. Dom.",
    ctaLabel: "View Resume →",
    ctaUrl: "https://github.com",
    // avatarUrl: "/avatar.jpg",
  },

  // ── REDES SOCIALES ───────────────────────────────
  social: [
    { label: "LinkedIn", url: "www.linkedin.com/in/engels-alejandro-vicioso-89ab13363",     icon: "linkedin" },
    { label: "Email",    url: "mailto:viciosorojas.engels@gmail.com",                icon: "mail"     },
  ],

  // ── PROYECTOS ────────────────────────────────────
  // Para añadir un proyecto: agrega un objeto a este array.
  projects: [
    {
      id: "proj-1",
      title: "INTEC Onsight Lens",
      tag: "Web App",
      description: "Part of a team building an academic system for INTEC. I specialized in engineering responsive web interfaces using React. I led the implementation of user-friendly forms and UI components with Tailwind CSS, ensuring a seamless experience across all device sizes.",
      stack: ["React","TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/IDS326-Construccion-de-Software/nov-ene-pf-seleccion-frontend.git",
      liveUrl: "",
      accentColor: "#e4002b",
      featured: true,
    },
    {
      id: "proj-2",
      title: "Coding Challenge",
      tag: "Web App",
      description: "Full-stack application for water quality tracking, featuring a secure Role-Based Access Control (RBAC) system. Aided in building both the intuitive UI and the server-side logic to ensure data integrity and scalable user management.",
      stack: ["React", "JavaScript", "Vite", "ASP.NET","C#", "MSSQL"],
      githubUrl: "https://github.com/Raimond123/Reto-desarrollow-web.git",
      liveUrl: "",
      accentColor: "#38bdf8",
      featured: true,
    },
  ],

  // ── TECH STACK ───────────────────────────────────
  stack: [
    { name: "TypeScript", category: "language",  color: "#349beb" },
    { name: "C#",       category: "language",  color: "#9234eb" },
    { name: "Dart",       category: "language",  color: "#1173cf" },
    { name: "React",      category: "framework", color: "#05cbf7" },
    { name: "Tailwind",      category: "framework", color: "#51abff" },
    { name: "DaisyUI",      category: "framework", color: "#f5cb22" },
    { name: "ASP.NET",    category: "framework", color: "#9234eb" },
    { name: "Flutter",    category: "framework", color: "#1173cf" },
    { name: "Node.js",    category: "framework", color: "#5fa04e" },
    { name: "Vite",       category: "tool",      color: "#bd34fe" },
    { name: "Docker",     category: "tool",      color: "#2496ed" },
    { name: "Git",        category: "tool",      color: "#f34f29" },
    { name: "Postman",      category: "tool",      color: "#fd671b" },
    { name: "Figma",      category: "tool",      color: "#a259ff" },
    { name: "Vercel",     category: "cloud",     color: "#ffffff" },
    { name: "Firebase",     category: "cloud",     color: "#f75205" },
    { name: "MSSQL", category: "database",  color: "#f70505" },
    { name: "MySQL", category: "database",  color: "#0b3185" },
  ],

  // ── NAVEGACIÓN ───────────────────────────────────
  nav: [
    { label: "Work",    id: "projects" },
    { label: "Stack",   id: "stack"    },
    { label: "Contact", id: "contact"  },
  ],
};
