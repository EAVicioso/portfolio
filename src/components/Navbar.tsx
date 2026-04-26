import { useState, useEffect } from "react";
import type { PortfolioConfig } from "../types/portfolio";

interface NavbarProps {
  name: string;
  nav: PortfolioConfig["nav"];
}

export default function Navbar({ name, nav }: NavbarProps) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-base-100/80 backdrop-blur-md border-b border-base-content/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-lg font-bold tracking-tight text-base-content hover:text-accent transition-colors duration-300"
        >
          {name.split(" ")[0]}<span className="text-accent">.</span>
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-4 py-2 text-sm font-mono text-base-content/60 hover:text-accent transition-colors duration-300 rounded-lg hover:bg-accent/5"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-base-content transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-base-content transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-base-content transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-48" : "max-h-0"}`}>
        <nav className="px-6 pb-4 flex flex-col gap-1 bg-base-100/95 backdrop-blur-md border-b border-base-content/5">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="py-2 text-left font-mono text-sm text-base-content/70 hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
