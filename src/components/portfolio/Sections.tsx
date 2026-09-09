import { ProjectCard } from "./ProjectCard";
import {
  certifications,
  contact,
  education,
  experience,
  profileSummary,
  projects,
  skillGroups,
} from "@/data/portfolio";

export function Profile() {
  return (
    <section className="bg-paper" aria-labelledby="profile-heading">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8">
          <div className="anim-rise-1">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">About</p>
            <h2 id="profile-heading" className="mt-2 text-2xl font-semibold tracking-tight">
              Profile
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-ink/75 max-w-[60ch] text-pretty">
              {profileSummary}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/60 max-w-[60ch] text-pretty">
              I enjoy building practical technology projects and keep learning new AI tools and
              techniques. Outside of work you&apos;ll find me travelling, reading books or cooking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="bg-paper" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Experience</p>
        <h2 id="experience-heading" className="sr-only">
          Experience
        </h2>
        <div className="mt-5 relative pl-6">
          <div className="absolute left-1.5 top-2 bottom-2 w-px bg-ink/15" aria-hidden="true" />
          <div className="relative">
            <span
              className="absolute -left-[15px] top-2 size-3 rounded-full bg-accent ring-4 ring-paper"
              aria-hidden="true"
            />
            <div className="rounded-[min(1.2vw,14px)] ring-1 ring-ink/10 bg-paper-2/60 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-tight">{experience.role}</h3>
                <span className="font-mono text-xs text-ink/50">{experience.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent font-medium">{experience.company}</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-ink/70">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span
                      className="mt-2 size-1 rounded-full bg-ink/30 shrink-0"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="bg-paper" aria-labelledby="work-heading">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">
              Selected Work
            </p>
            <h2 id="work-heading" className="mt-2 text-3xl font-semibold tracking-tight text-balance">
              Projects
            </h2>
          </div>
          <span className="font-mono text-xs text-ink/40">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-ink-2 text-paper" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/40">Stack</p>
        <h2 id="skills-heading" className="mt-2 text-3xl font-semibold tracking-tight text-balance">
          Technical Skills
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className={`rounded-[min(1.2vw,14px)] ring-1 ring-white/10 bg-ink p-6 ${
                i === skillGroups.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent-2">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-2.5 py-1 rounded-full bg-white/5 ring-1 ring-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Credentials() {
  return (
    <section className="bg-paper" aria-labelledby="credentials-heading">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 id="credentials-heading" className="sr-only">
          Certifications and education
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Credential</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">Certifications</h3>
            <ul className="mt-6 space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-center justify-between gap-3 rounded-[min(1vw,12px)] ring-1 ring-ink/10 bg-paper-2/50 px-5 py-4"
                >
                  <span className="text-sm font-medium">{cert}</span>
                  <span className="font-mono text-xs text-ink/40">Cert.</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Education</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">Academic</h3>
            <div className="mt-6 rounded-[min(1.2vw,14px)] ring-1 ring-ink/10 bg-paper-2/50 p-6">
              <p className="text-base font-semibold tracking-tight">{education.degree}</p>
              <p className="mt-1 text-sm text-ink/60">{education.institute}</p>
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-ink/5 text-ink/60">{education.year}</span>
                <span className="px-2.5 py-1 rounded bg-accent/10 text-accent">
                  {education.cgpa}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">Get in touch</p>
          <h2
            id="contact-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-balance"
          >
            Let&apos;s build something intelligent.
          </h2>
          <p className="mt-4 text-paper/60 max-w-[50ch] mx-auto text-pretty">
            Open to AI Engineer, Python Developer and Backend roles. I enjoy practical projects and
            learning new AI technologies — alongside travelling, reading and cooking.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent text-paper text-sm font-medium px-5 py-2.5 ring-1 ring-accent hover:bg-accent/90 transition-colors"
            >
              Email
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full text-sm font-medium px-5 py-2.5 ring-1 ring-white/25 hover:bg-white/5 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full text-sm font-medium px-5 py-2.5 ring-1 ring-white/25 hover:bg-white/5 transition-colors"
            >
              GitHub
            </a>
            <a
              href={contact.resume}
              download
              className="inline-flex items-center gap-2 rounded-full text-sm font-medium px-5 py-2.5 ring-1 ring-white/15 hover:bg-white/5 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper/50">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
        <p className="font-mono text-xs">© 2025 Amruta Bhokare</p>
        <p className="font-mono text-xs">AI · Backend · Python</p>
      </div>
    </footer>
  );
}
