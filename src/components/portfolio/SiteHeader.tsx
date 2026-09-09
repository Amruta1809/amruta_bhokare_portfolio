import { contact, navLinks } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur ring-1 ring-ink/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold text-[15px] tracking-tight">
          Amruta <span className="text-ink/40">Bhokare</span>
        </a>
        <nav aria-label="Main" className="hidden md:flex items-center gap-8 text-sm text-ink/70">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={contact.resume}
          download
          className="hidden sm:inline-flex items-center rounded-full bg-ink text-paper text-sm font-medium px-4 py-2 ring-1 ring-ink hover:bg-ink-2 transition-colors"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
