import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const highlighted = Boolean(project.metrics);

  return (
    <article
      className={`group rounded-[min(1.2vw,14px)] ring-1 p-6 transition-transform duration-300 hover:-translate-y-1 ${
        highlighted ? "ring-accent/30 bg-paper-2/70" : "ring-ink/10 bg-paper-2/50"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="font-mono text-xs text-accent">{project.category}</p>
        {highlighted && (
          <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-accent/10 text-accent">
            Metrics
          </span>
        )}
      </div>
      <h3 className="mt-2 text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm text-ink/65 leading-relaxed text-pretty">{project.description}</p>

      {project.metrics ? (
        <dl className="mt-4 grid grid-cols-2 gap-2 font-mono text-xs">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded bg-ink/[0.03] p-2">
              <dt className="text-ink/40">{m.label}</dt>
              <dd className="text-base text-ink font-medium">{m.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-[11px] px-2 py-0.5 rounded bg-ink/5 text-ink/60">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors"
      >
        GitHub <span aria-hidden="true">→</span>
        <span className="sr-only">for {project.title}</span>
      </a>
    </article>
  );
}
