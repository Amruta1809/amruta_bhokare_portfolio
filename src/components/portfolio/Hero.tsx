import { contact } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="relative overflow-hidden rounded-[min(1.5vw,20px)] ring-1 ring-white/10 bg-ink-2 p-8 lg:p-12">
          <div className="tech-grid absolute inset-0 opacity-70" aria-hidden="true" />
          <div
            className="absolute -right-10 -top-10 size-64 rounded-full bg-accent/10"
            aria-hidden="true"
          />
          <div className="relative grid lg:grid-cols-[1.35fr_1fr] gap-10 items-center">
            <div className="anim-rise">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
                Portfolio — 2025
              </p>
              <h1 className="mt-5 text-3xl lg:text-6xl font-semibold leading-tight tracking-tight max-w-[24ch] text-balance">
                Hi, I&apos;m Amruta Bhokare
              </h1>
              <p className="mt-4 text-lg lg:text-xl text-paper/80 max-w-[40ch] text-pretty">
                AI Engineer <span className="text-paper/40">|</span> Python Developer{" "}
                <span className="text-paper/40">|</span> Backend Developer
              </p>
              <p className="mt-4 text-sm lg:text-base text-paper/60 max-w-[46ch] text-pretty">
                Building intelligent applications and scalable backend solutions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-paper text-sm font-medium px-5 py-2.5 ring-1 ring-accent hover:bg-accent/90 transition-colors"
                >
                  View Projects
                </a>
                <a
                  href={contact.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full text-paper text-sm font-medium px-5 py-2.5 ring-1 ring-white/25 hover:bg-white/5 transition-colors"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full text-paper/70 text-sm font-medium px-5 py-2.5 ring-1 ring-white/15 hover:bg-white/5 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="hidden lg:block anim-rise-2" aria-hidden="true">
              <div className="relative mx-auto size-52 grid place-items-center">
                <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                <div className="absolute inset-5 rounded-full ring-1 ring-white/10 slow-spin" />
                <div className="absolute inset-10 rounded-full ring-1 ring-accent/30" />
                <div className="size-20 rounded-2xl bg-ink ring-1 ring-white/15 grid place-items-center font-mono text-accent-2 text-xs tracking-widest">
                  AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
