export type ProjectType = "video" | "code";

export interface Project {
  id: string;
  type: ProjectType;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  longDescription: string;
  metrics: string[];
  tags: string[];
  accentColor: string;
  featured: boolean;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  duration?: string;
  aspectRatio?: string;
}

export interface SkillCategory {
  title: string;
  type: "video" | "code" | "motion";
  subtitle: string;
  skills: { name: string; level: number; note: string }[];
}

export const PORTFOLIO_DATA = {
  hero: {
    name: "JOHISHKUMAR K C",
    shortName: "JO",
    title: "Game Developer & React Developer",
    tagline: "BUILDS | DESIGNS | CREATES",
    subtagline: "Builds clean code. Ships fast.",
    status: "Available for Creative Collaborations & Opportunities",
    timecode: "00:01:24:12",
    videoSkills: [
      { name: "UI Design", tag: "UX", color: "#ea77ff" },
      { name: "Figma", tag: "Design", color: "#f24e1e" },
      { name: "Wireframing", tag: "Proto", color: "#9999ff" },
      { name: "Visual Design", tag: "Visual", color: "#ffffff" },
    ],
    codeSkills: [
      { name: "React.js", tag: "UI", color: "#61dafb" },
      { name: "Node.js", tag: "Backend", color: "#68a063" },
      { name: "MongoDB", tag: "Database", color: "#47a248" },
      { name: "Tailwind CSS", tag: "Design", color: "#38bdf8" },
      { name: "JavaScript", tag: "Core", color: "#f7df1e" },
    ],
    narrative: [
      {
        progress: [0, 0.22],
        heading: "JOHISHKUMAR K C",
        subheading: "Game Developer & React Developer",
        details: "Passionate about transforming ideas into meaningful digital experiences through design, technology and creativity.",
        align: "center" as const,
      },
      {
        progress: [0.25, 0.48],
        heading: "TURNING IDEAS INTO EXPERIENCES.",
        subheading: "UI Design • UX Research • Interaction Design",
        details: "Crafting simple, useful and engaging interfaces with a deep focus on responsive design, visual storytelling and user empathy.",
        align: "left" as const,
      },
      {
        progress: [0.52, 0.75],
        heading: "BUILDING IDEAS INTO REAL SOLUTIONS.",
        subheading: "React.js • Node.js • MongoDB • Express",
        details: "Architecting full-stack web applications that solve real-world problems with clean code, AI integration and scalable backends.",
        align: "right" as const,
      },
      {
        progress: [0.80, 0.98],
        heading: "ONE MIND. LIMITLESS BUILDS.",
        subheading: "Design × Code × AI",
        details: "Ready to collaborate on game-changing products, interactive flagships, and innovative digital solutions.",
        align: "center" as const,
      },
    ],
  },
  stats: [
    { label: "Projects Shipped", value: "6+", detail: "Full Stack & AI Apps" },
    { label: "Tech Stack Mastery", value: "15+", detail: "Tools & Frameworks" },
    { label: "UI/UX Disciplines", value: "100%", detail: "Design & Code mastery" },
    { label: "AI Integrations", value: "3+", detail: "Gemini API & ML Models" },
  ],
  projects: [
    {
      id: "civic-report",
      type: "code" as ProjectType,
      title: "CIVICREPORT — SMART CIVIC PLATFORM",
      category: "AI-Powered Civic Tech / Full Stack",
      year: "2024",
      client: "Personal Project",
      description: "A platform connecting citizens, municipal officers and NGOs to report, track and resolve public infrastructure problems using AI-assisted reporting.",
      longDescription: "Built a full-stack civic issue reporting platform that bridges the gap between citizens and local authorities. Integrated AI-assisted issue categorization and priority scoring using Google Gemini API. Features real-time issue tracking, role-based dashboards for citizens, officers and NGOs, and Firebase for real-time data synchronization. Deployed on Vercel for global access.",
      metrics: ["AI-Assisted Reporting", "Role-Based Dashboards", "Firebase Real-Time Sync"],
      tags: ["React", "JavaScript", "Node.js", "Express", "Firebase", "AI", "Vercel"],
      accentColor: "#00e5ff",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johishkumar",
    },
    {
      id: "online-medical-store",
      type: "code" as ProjectType,
      title: "MEDSTORE — ONLINE MEDICAL PLATFORM",
      category: "Full Stack E-Commerce / Healthcare",
      year: "2024",
      client: "Personal Project",
      description: "A full-stack medicine shopping platform that allows users to search medicines, manage carts, place orders and access their accounts.",
      longDescription: "Developed a complete e-commerce solution tailored for the healthcare sector. Features include advanced medicine search with filters, cart management, secure order placement, and user authentication using JWT. Built RESTful APIs with Express and MongoDB for data persistence. Responsive UI designed with Bootstrap for cross-device compatibility.",
      metrics: ["JWT Authentication", "RESTful APIs", "MongoDB Data Persistence"],
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bootstrap"],
      accentColor: "#00f59b",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johishkumar",
    },
    {
      id: "uzhavar-agri-marketplace",
      type: "code" as ProjectType,
      title: "UZHAVAR — SMART AGRI MARKETPLACE",
      category: "Full Stack Marketplace / Agriculture",
      year: "2024",
      client: "Personal Project",
      description: "A digital marketplace designed to connect farmers directly with customers, supporting product discovery, online orders and fair pricing.",
      longDescription: "Designed and built a farmer-to-consumer digital marketplace aimed at eliminating middlemen and ensuring fair pricing. Features product discovery with category filters, online order management, and a clean React UI with Tailwind CSS. Backend powered by Node.js, Express, and MongoDB. The platform empowers local farmers with a modern digital storefront.",
      metrics: ["Farmer-to-Consumer Direct", "Tailwind UI", "MERN Stack"],
      tags: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      accentColor: "#38bdf8",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johishkumar",
    },
    {
      id: "cropai-advisory",
      type: "code" as ProjectType,
      title: "CROPAI — INTELLIGENT CROP ADVISOR",
      category: "AI & ML / Agriculture Tech",
      year: "2024",
      client: "Personal Project",
      description: "An AI-powered agriculture platform that recommends suitable crops using soil and weather information, with crop disease detection and market insights.",
      longDescription: "Engineered an intelligent agricultural advisory platform combining machine learning and computer vision. The platform analyzes soil parameters and weather data using Scikit-learn models to recommend optimal crops. Integrated computer vision for crop disease detection from leaf images. Provides real-time market price insights to help farmers make data-driven decisions.",
      metrics: ["ML Crop Recommendations", "Disease Detection CV", "Market Price Insights"],
      tags: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Python", "Scikit-learn", "Computer Vision"],
      accentColor: "#818cf8",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johishkumar",
    },
    {
      id: "max-fashion-ecommerce",
      type: "code" as ProjectType,
      title: "MAX FASHION — E-COMMERCE UI",
      category: "Frontend / E-Commerce",
      year: "2023",
      client: "Personal Project",
      description: "A responsive fashion shopping experience featuring product browsing, category filters, wishlist and interactive cart management.",
      longDescription: "Built a sleek, responsive fashion e-commerce frontend using React with Context API for global state management. Features include product browsing with category and price filters, wishlist functionality, and an interactive cart with real-time quantity management. Smooth routing with React Router and clean CSS for a premium shopping experience.",
      metrics: ["Context API State", "React Router Nav", "Responsive Design"],
      tags: ["React", "JavaScript", "HTML", "CSS", "React Router", "Context API"],
      accentColor: "#ff4d00",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johishkumar",
    },
    {
      id: "planet-play-sustainability",
      type: "code" as ProjectType,
      title: "PLANET PLAY — ECO GAMIFICATION",
      category: "Gamified Platform / Sustainability",
      year: "2023",
      client: "Personal Project",
      description: "An interactive platform that encourages eco-friendly activities through missions, experience points, user progression and leaderboards.",
      longDescription: "Designed and developed a gamified sustainability platform that motivates users to adopt eco-friendly habits through engaging game mechanics. Users complete environmental missions, earn experience points, and climb leaderboards. Features user progression tracking, Axios-powered API calls, and a full MERN stack backend supporting user accounts and mission data persistence.",
      metrics: ["Gamified Missions", "XP & Leaderboards", "MERN Stack"],
      tags: ["React", "Node.js", "Express", "MongoDB", "Axios", "Tailwind CSS"],
      accentColor: "#ff2200",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johishkumar",
    },
  ] as Project[],
  colorGradeDemo: {
    title: "DESIGN COMPARISON",
    subtitle: "From Wireframe Concept to Final UI Implementation",
    description: "Drag the slider to compare a raw wireframe concept with the final polished UI design — showcasing the full journey from idea to pixel-perfect implementation.",
    beforeLabel: "Wireframe",
    afterLabel: "Final UI",
  },
  terminalCommands: [
    {
      cmd: "whoami",
      output:
        "Johishkumar K C — React Developer & aspiring Interaction Designer.\n\nI'm passionate about transforming ideas into meaningful digital experiences.\nI love exploring the connection between design, technology and creativity.\nInterests: UI/UX Design · Web Development · AI · Real-World Problem Solving.\nI believe great design is not just about appearance — it's about creating\nexperiences that are simple, useful and engaging.",
    },
    {
      cmd: "skills",
      output:
        "Development:\n  HTML · CSS · JavaScript · React.js · Node.js · Express.js · MongoDB · Git & GitHub\n\nDesign:\n  UI Design · UX Design · Wireframing · Prototyping · Responsive Design\n  Visual Design · Typography · Color Theory\n\nAI & Tools:\n  Google Gemini API · AI Integration · Figma · VS Code · GitHub · Vercel",
    },
    {
      cmd: "projects",
      output:
        "Found 6 production projects:\n  01. CivicReport — Smart Civic Issue Reporting (AI + Firebase)\n  02. Online Medical Store — Full Stack Healthcare E-Commerce\n  03. Uzhavar — Smart Agriculture Marketplace (MERN)\n  04. CropAI — Intelligent Crop Advisory (ML + Computer Vision)\n  05. MAX Fashion — Responsive E-Commerce UI\n  06. Planet Play — Gamified Sustainability Platform",
    },
    {
      cmd: "contact",
      output:
        "Let's Connect!\nI'm always interested in creative collaborations, new opportunities and innovative ideas.\n\n  Email    : johish6383@gmail.com\n  GitHub   : https://github.com/johishkumar\n  LinkedIn : https://linkedin.com/in/johish-kumar-76b1b1321\n  Instagram: https://instagram.com/__johish.__\n  Location : Erode, Tamil Nadu, India",
    },
    {
      cmd: "status",
      output:
        "Available for creative collaborations, internships & full-time opportunities.\nOpen to Remote / Hybrid roles globally.",
    },
  ],
  capabilities: [
    {
      title: "Frontend Development",
      type: "code" as const,
      subtitle: "Modern, responsive, and interactive user interfaces",
      skills: [
        { name: "React.js & JavaScript (ES6+)", level: 92, note: "Hooks, Context API, React Router & state management" },
        { name: "HTML5 & CSS3", level: 95, note: "Semantic markup, Flexbox, Grid & animations" },
        { name: "Tailwind CSS & Bootstrap", level: 90, note: "Utility-first design & responsive layouts" },
        { name: "Git & GitHub", level: 88, note: "Version control, branching & open-source collaboration" },
        { name: "Vercel Deployment", level: 85, note: "CI/CD, edge functions & production deployments" },
      ],
    },
    {
      title: "Full Stack & Backend",
      type: "video" as const,
      subtitle: "Robust APIs, databases and scalable architectures",
      skills: [
        { name: "Node.js & Express.js", level: 88, note: "RESTful APIs, middleware & server architecture" },
        { name: "MongoDB & Database Design", level: 85, note: "Schema design, aggregation & data modeling" },
        { name: "JWT Authentication", level: 86, note: "Secure auth flows & role-based access control" },
        { name: "Firebase", level: 82, note: "Real-time database, Firestore & authentication" },
        { name: "AI Integration (Gemini API)", level: 80, note: "AI-assisted features & intelligent automation" },
      ],
    },
    {
      title: "Design & Creative Tech",
      type: "motion" as const,
      subtitle: "Where design thinking meets digital craftsmanship",
      skills: [
        { name: "UI/UX Design & Figma", level: 88, note: "Wireframing, prototyping & design systems" },
        { name: "Responsive & Visual Design", level: 90, note: "Cross-device layouts & typography" },
        { name: "Python & Machine Learning", level: 75, note: "Scikit-learn, computer vision & data models" },
        { name: "Interaction Design", level: 82, note: "Micro-animations, transitions & user flows" },
      ],
    },
  ] as SkillCategory[],
  experience: [
    {
      period: "2023 — Present",
      role: "React Developer & UI/UX Designer",
      studio: "Freelance & Personal Projects",
      description: "Designing and developing full-stack web applications — from AI-powered civic platforms to agriculture marketplaces — with a focus on clean code, meaningful UX and real-world impact.",
    },
    {
      period: "2022 — 2023",
      role: "Frontend Developer",
      studio: "Academic & Collaborative Projects",
      description: "Built responsive web interfaces using React, HTML, CSS and JavaScript. Collaborated with peers on e-commerce and social-impact projects during academic training.",
    },
    {
      period: "2021 — 2022",
      role: "UI Design & Web Foundations",
      studio: "Self-Learning & Open Source",
      description: "Learned the fundamentals of UI/UX design, visual design principles, Figma prototyping and core web development technologies through hands-on projects.",
    },
  ],
  socials: [
    { name: "GitHub", handle: "github.com/johishkumar", url: "https://github.com/johishkumar" },
    { name: "LinkedIn", handle: "linkedin.com/in/johish-kumar-76b1b1321", url: "https://www.linkedin.com/in/johish-kumar-76b1b1321/" },
    { name: "Instagram", handle: "@__johish.__", url: "https://www.instagram.com/__johish.__/" },
  ],
  contact: {
    email: "johish6383@gmail.com",
    telegram: "@johishkumar",
    location: "Erode, Tamil Nadu, India / Remote",
  },
};
