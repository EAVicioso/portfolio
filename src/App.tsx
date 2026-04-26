import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import ProjectCard  from "./components/ProjectCard";
import StackSection from "./components/StackSection";
import { config }   from "./data/config";

export default function App() {
  const { profile, social, projects, stack, nav } = config;

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar name={profile.name} nav={nav} />

      <Hero profile={profile} social={social} />

      {/* ── Projects ── */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end gap-6 mb-16">
            <div>
              <p className="font-mono text-xs text-base-content/30 tracking-widest uppercase mb-3">
                01 - Selected Work
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black text-base-content">
                Projects
              </h2>
            </div>
            <div className="flex-1 h-px bg-base-content/5 mb-3 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <StackSection stack={stack} />

      {/* ── Contact ── */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-base-200 border border-base-content/5 overflow-hidden p-10 md:p-16 text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-accent/10 blur-3xl rounded-full pointer-events-none" />
            <p className="relative font-mono text-xs text-base-content/30 tracking-widest uppercase mb-4">
              03 - Let's talk
            </p>
            <h2 className="relative font-display text-4xl md:text-6xl font-black text-base-content mb-6">
              Get In Touch
            </h2>
            <p className="relative text-base-content/60 max-w-md mx-auto mb-10 leading-relaxed">
              I'm always open to interesting projects and learning new things about tech.
            </p>
            <div className="relative flex flex-wrap justify-center gap-3">
              {social.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm font-mono rounded-full border-base-content/10 hover:border-accent hover:bg-accent hover:text-accent-content transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-6 border-t border-base-content/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-base-content/30">
            {profile.name.split(" ")[0]}<span className="text-accent">.</span>
          </span>
          <p className="text-xs font-mono text-base-content/20">
            Designed & Developed by Engels Vicioso | Built with React, Tailwind & DaisyUI | {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}