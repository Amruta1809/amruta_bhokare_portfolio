import resumeAsset from "@/assets/resume.pdf.asset.json";

export const contact = {
  email: "amrutabhokare4@gmail.com",
  phone: "+91 93591 60678",
  linkedin: "https://linkedin.com/in/amrutabhokare",
  github: "https://github.com/Amruta1809",
  resume: resumeAsset.url,
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const experience = {
  role: "Backend Developer Intern",
  company: "Applied AI Consulting (AAIC)",
  location: "Pune, India · On-site",
  period: "Dec 2025 — Jun 2026",
  points: [
    "Developed and enhanced full-stack web applications using Python, Django REST Framework, React.js and PostgreSQL.",
    "Built key features for Greywind (Inventory Management System) and Koza (Caregiver Management Platform), including user management, workflows and database operations.",
    "Contributed to OpsRabbit, an Agentic AI platform that monitors production systems, detects incidents, generates alerts, performs root-cause analysis and automates issue resolution.",
    "Integrated REST APIs, optimized backend services and supported deployment of scalable production-ready applications.",
  ],
};

export type Project = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    category: "Agentic AI",
    title: "Stock Research Agent",
    description:
      "A 4-agent LangChain + LangGraph pipeline (News Fetcher → Sentiment Analyzer → Pattern Analyzer → Report Generator) delivering BUY/HOLD/SELL research reports from live web data via yfinance and DuckDuckGo in under 20 seconds, with 5 interactive Plotly visualizations (candlesticks with MA overlays, RSI, sentiment gauge) on a Streamlit dashboard supporting NYSE and NSE tickers.",
    tags: [
      "Python",
      "LangChain",
      "LangGraph",
      "yfinance",
      "OpenRouter",
      "Plotly",
      "Streamlit",
    ],
    github: contact.github,
  },
  {
    category: "AI / RAG",
    title: "Indian Legal AI Assistant",
    description:
      "A RAG-based legal assistant for Indian law using pgvector semantic search plus keyword retrieval to generate structured, citation-backed answers via an OpenRouter LLM. Supports multilingual queries in regional Indian languages and includes a searchable laws explorer for browsing and filtering the indexed legal database.",
    tags: ["Python", "PostgreSQL", "pgvector", "OpenRouter", "Streamlit", "RAG"],
    github: contact.github,
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "SQL", "JavaScript"] },
  { title: "Frontend", items: ["HTML", "CSS", "React.js", "Bootstrap"] },
  {
    title: "Backend & APIs",
    items: [
      "Django REST Framework",
      "FastAPI",
      "REST APIs",
      "python-dotenv",
      "Mailparser",
    ],
  },
  {
    title: "AI / LLMs",
    items: [
      "LangChain",
      "LangGraph",
      "OpenRouter API",
      "Gemini API (2.0 Flash)",
      "OpenAI SDK",
      "Hugging Face",
      "Prompt Engineering",
      "n8n",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "pgvector", "Supabase", "Firebase"],
  },
  {
    title: "Cloud & Tools",
    items: [
      "Netlify",
      "Streamlit Cloud",
      "Docker",
      "yfinance",
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
    ],
  },
];

export const certifications = [
  "Claude Code 101 — Anthropic (June 2026)",
  "Claude 101 — Anthropic (May 2026)",
  "Python 3.4.3 — IIT Bombay (2023)",
];

export const education = {
  degree: "B.Tech — Computer Science & Engineering (AI & Data Science)",
  institute: "DKTE's Textile and Engineering Institute, Ichalkaranji",
  year: "Dec 2021 — 2025",
  cgpa: "CGPA 7.93 / 10",
};

export const profileSummary =
  "Python / AI developer with a B.Tech in CSE (AI & Data Science) and hands-on production experience building scalable backend systems and intelligent applications. During a six-month backend internship I shipped features across full-stack products using Python, Django REST Framework, React.js and PostgreSQL, and contributed to an Agentic AI incident-response platform. I am looking for opportunities as an AI Engineer, Python Developer or Backend Developer.";

export const legacyProfileSummary =
  "Computer Science graduate specializing in AI & Data Science with hands-on backend development experience. I recently completed a 6-month Backend Developer internship where I worked on real-time client projects involving Python, APIs, databases and AI-based platforms. I am passionate about building practical AI and backend solutions and currently looking for opportunities as an AI Engineer, Python Developer or Backend Developer.";
