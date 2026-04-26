import type { TechItem } from "../types/portfolio";

interface StackSectionProps {
  stack: TechItem[];
}

const CATEGORY_LABELS: Record<TechItem["category"], string> = {
  language:  "Languages",
  framework: "Frameworks & Runtimes",
  tool:      "Tools & Platforms",
  cloud:     "Cloud & Deployment",
  database:  "Databases",
};

const CATEGORY_ORDER: TechItem["category"][] = [
  "language", "framework", "tool", "cloud", "database",
];

export default function StackSection({ stack }: StackSectionProps) {
  const grouped = CATEGORY_ORDER.reduce(
    (acc, cat) => {
      const items = stack.filter((t) => t.category === cat);
      if (items.length > 0) acc[cat] = items;
      return acc;
    },
    {} as Partial<Record<TechItem["category"], TechItem[]>>,
  );

  return (
    <section id="stack" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end gap-6 mb-16">
          <div>
            <p className="font-mono text-xs text-base-content/30 tracking-widest uppercase mb-3">
              02 - Expertise
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-base-content">
              Tech Stack
            </h2>
          </div>
          <div className="flex-1 h-px bg-base-content/5 mb-3 hidden sm:block" />
        </div>

        <div className="space-y-12">
          {(Object.entries(grouped) as [TechItem["category"], TechItem[]][]).map(
            ([category, items]) => (
              <div key={category}>
                <p className="font-mono text-xs text-base-content/30 tracking-widest uppercase mb-4">
                  {CATEGORY_LABELS[category]}
                </p>
                <div className="flex flex-wrap gap-3">
                  {items.map((tech) => (
                    <div
                      key={tech.name}
                      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-base-200 border border-base-content/5 hover:border-[var(--tc)]/30 hover:bg-[var(--tc)]/5 transition-all duration-300 cursor-default"
                      style={{ ["--tc" as string]: tech.color ?? "#3b82f6" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: tech.color ?? "#3b82f6" }}
                      />
                      <span className="text-sm font-mono text-base-content/70 group-hover:text-base-content transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
