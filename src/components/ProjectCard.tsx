import type { Project } from "../types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
    <path d="M7 7h10v10M7 17 17 7" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.31 3.435 9.8 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
  </svg>
);

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const accent = project.accentColor ?? "#3b82f6";

  return (
    <article
      className="project-card group relative flex flex-col bg-base-200 border border-base-content/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        animationDelay: `${index * 80}ms`,
        ["--card-accent" as string]: accent,
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />

      {project.featured && (
        <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-mono bg-accent/10 text-accent border border-accent/20">
          Featured
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">
        <span className="text-xs font-mono text-base-content/30 tracking-widest uppercase">
          {project.tag}
        </span>

        <h3 className="font-display text-xl font-bold text-base-content group-hover:text-[var(--card-accent)] transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-base-content/60 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-base-content/5 text-base-content/50 border border-base-content/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 px-6 py-4 border-t border-base-content/5 bg-base-300/30">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-base-content/40 hover:text-[var(--card-accent)] transition-colors duration-200"
          >
            <GitHubIcon />
            Source
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-base-content/40 hover:text-[var(--card-accent)] transition-colors duration-200 ml-auto"
          >
            Live demo
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </article>
  );
}
