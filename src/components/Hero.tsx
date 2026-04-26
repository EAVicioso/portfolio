import type { PortfolioConfig } from "../types/portfolio";

const icons: Record<string, JSX.Element> = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.31 3.435 9.8 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  website: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
};

interface HeroProps {
  profile: PortfolioConfig["profile"];
  social: PortfolioConfig["social"];
}

export default function Hero({ profile, social }: HeroProps) {
  // const scrollTo = (id: string) =>
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6">
      <div className="absolute inset-0 hero-grid-bg opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full pt-24">
        <div className="hero-fade-in inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for work
        </div>

        <h1 className="hero-fade-in hero-delay-1 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-base-content mb-4">
          {profile.name.split(" ").map((word, i) => (
            <span key={i} className={i % 2 === 0 ? "block" : "block text-accent"}>
              {word}
            </span>
          ))}
        </h1>

        <p className="hero-fade-in hero-delay-2 font-mono text-base-content/40 text-sm sm:text-base mb-8 tracking-widest uppercase">
          — {profile.role}
        </p>

        <p className="hero-fade-in hero-delay-3 max-w-xl text-base-content/70 text-base sm:text-lg leading-relaxed mb-10">
          {profile.bio}
        </p>

        <div className="hero-fade-in hero-delay-4 flex flex-wrap items-center gap-6">
          {/* <a
            href={profile.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent btn-sm font-mono rounded-full px-6 hover:scale-105 transition-transform duration-200"
          >
            {profile.ctaLabel}
          </a> */}

          <div className="flex items-center gap-4">
            {social.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-base-content/40 hover:text-accent transition-colors duration-300 hover:-translate-y-0.5 transform inline-block"
              >
                {icons[link.icon]}
              </a>
            ))}
          </div>

          {profile.location && (
            <span className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-base-content/30">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {profile.location}
            </span>
          )}
        </div>

        {/* <button
          onClick={() => scrollTo("projects")}
          className="hero-fade-in hero-delay-5 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-base-content/20 hover:text-accent transition-colors duration-300 group"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <span className="w-px h-10 bg-gradient-to-b from-base-content/20 to-transparent group-hover:from-accent/50 transition-colors duration-300" />
        </button> */}
      </div>
    </section>
  );
}