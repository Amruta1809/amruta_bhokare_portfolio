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
    category: "AI / RAG",
    title: "Stock Research Agent",
    description:
      "An AI-powered research assistant that helps analyze and retrieve information related to stocks and financial data.",
    tags: ["Python", "AI", "APIs", "LLMs", "RAG"],
    github: contact.github,
  },
  {
    category: "AI / RAG",
    title: "Legal AI Chatbot",
    description:
      "A legal question-answering chatbot that retrieves from a legal knowledge base and uses an LLM to generate contextual answers.",
    tags: ["Python", "RAG", "LLM", "Embeddings", "Database"],
    github: contact.github,
  },
  {
    category: "NLP / ML",
    title: "NLP Facebook Caption Analysis",
    description:
      "An NLP application for extracting and analyzing Facebook captions and classifying text.",
    tags: ["Python", "NLP", "spaCy", "NLTK", "scikit-learn", "Flask"],
    github: contact.github,
    metrics: [
      { label: "Accuracy", value: "88%" },
      { label: "Precision", value: "85%" },
      { label: "Recall", value: "86%" },
      { label: "F1 Score", value: "85.5%" },
    ],
  },
  {
    category: "ML",
    title: "Loan Prediction",
    description:
      "A machine learning project that predicts loan approval based on applicant information.",
    tags: ["Python", "Pandas", "NumPy", "scikit-learn", "Machine Learning"],
    github: contact.github,
  },
  {
    category: "App",
    title: "Language Translator & Detector",
    description:
      "An application that detects the language of input text and translates text between languages.",
    tags: ["Python", "NLP", "APIs"],
    github: contact.github,
  },
  {
    category: "Data",
    title: "Rainfall Trend Analysis",
    description:
      "A data analysis project focused on analyzing rainfall patterns and long-term trends.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github: contact.github,
  },
];

export const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "Java", "SQL", "HTML", "CSS", "JavaScript"],
  },
  { title: "Backend", items: ["FastAPI", "Django REST Framework", "REST APIs"] },
  {
    title: "AI / ML",
    items: [
      "Machine Learning",
      "NLP",
      "Generative AI",
      "RAG",
      "LLMs",
      "Embeddings",
      "scikit-learn",
      "TensorFlow",
      "PyTorch",
    ],
  },
  { title: "Data", items: ["Pandas", "NumPy", "Matplotlib", "Power BI"] },
  { title: "Tools", items: ["Git", "GitHub", "Streamlit", "Flask", "Selenium"] },
];

export const certifications = [
  "Google Cloud Data Analytics Certificate",
  "Cisco Cybersecurity Certificate",
  "AWS Cloud Foundation Certificate",
];

export const education = {
  degree: "B.Tech — Computer Science & Engineering (AI & Data Science)",
  institute: "DKTE's Textile and Engineering Institute, Ichalkaranji",
  year: "Class of 2025",
  cgpa: "CGPA 7.93",
};

export const profileSummary =
  "Computer Science graduate specializing in AI & Data Science with hands-on backend development experience. I recently completed a 6-month Backend Developer internship where I worked on real-time client projects involving Python, APIs, databases and AI-based platforms. I am passionate about building practical AI and backend solutions and currently looking for opportunities as an AI Engineer, Python Developer or Backend Developer.";
