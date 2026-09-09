import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Hero } from "@/components/portfolio/Hero";
import {
  Contact,
  Credentials,
  Experience,
  Profile,
  SiteFooter,
  Skills,
  Work,
} from "@/components/portfolio/Sections";

const title = "Amruta Bhokare — AI Engineer & Python Developer";
const description =
  "Portfolio of Amruta Bhokare, AI Engineer and Python/Backend Developer building RAG, LLM and FastAPI projects. Projects, skills, experience and contact.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Amruta Bhokare",
          jobTitle: "AI Engineer | Python Developer | Backend Developer",
          alumniOf: "DKTE's Textile and Engineering Institute, Ichalkaranji",
          knowsAbout: ["Python", "FastAPI", "Machine Learning", "NLP", "RAG", "LLMs"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Work />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
