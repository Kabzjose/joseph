export const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

export const SKILLS = {
  Frontend: ["React", "TypeScript", "Vite", "Tailwind CSS","Bootstrap", "React Router", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Passport", "Nodemailer", "Bcrypt", "Joi"],
  Databases: ["PostgreSQL", "Redis", "MongoDB", "Supabase", "Neon DB", "SQL"],
  "Tools & Platforms": ["Git", "GitHub", "Linux", "Docker", "Vercel", "Render", "AWS","Postman"],
  "UI/UX": ["Figma", "Responsive Design", "AOS Animations", "Component Design"],
};

export const PROJECTS = [

  {
    title: "V-Chat",
    tagline: "Full-Stack Real-Time Chat Application",
    description:
      "A full-stack real-time chat app built with React, Vite, Express, PostgreSQL, Redis, JWT auth, Google OAuth, and Socket.IO. It supports protected rooms, live presence, typing indicators, and Dockerized deployment.",
    tech: ["React", "TypeScript", "Vite", "Express", "PostgreSQL", "Redis", "JWT", "Passport", "Socket.IO", "Docker"],
    live: "https://v-chat-smoky.vercel.app/",
    api: "https://v-chat-l3gp.onrender.com/",
    repo: "https://github.com/kabzjose/v-chat",
    features: ["JWT Authentication", "Google OAuth + Passport Sessions", "Real-time Messaging", "Typing + Presence Indicators", "Password-Protected Rooms", "Dockerized Setup"],
    color: "#8b5cf6",
  },
    {
    title: "Wildlife Tracker",
    tagline: "Full-Stack Conservation Platform",
    description:
      "A full-stack web app for tracking wildlife, managing observations, and supporting conservation decisions through real-time data and AI image analysis.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Leaflet", "Hugging Face AI"],
    live: "https://wildlife-tracker-1.onrender.com",
    api: "https://wildlife-tracker-qrv6.onrender.com",
    features: ["AI Image Analysis", "Interactive Maps", "Role-Based Access", "Admin Dashboard", "Real-time Tracking"],
    color: "#10b981",
  },
    {
    title: "URL Shortener",
    tagline: "Full-Stack URL Shortener with Analytics",
    description:
      "A full-stack URL shortener platform with click analytics and custom aliases. Shorten any long URL, create memorable custom links, track click counts, and instantly redirect to original URLs with real-time analytics.",
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Neon"],
    live: "https://url-shortener-ruddy-tau.vercel.app",
    api: "https://url-shortener-kxak.onrender.com",
    features: ["Shorten URLs", "Custom Aliases", "Click Analytics", "Delete Links", "Instant Redirects"],
    color: "#06b6d4",
  },
  {
    title: "Job Tracker",
    tagline: "Full-Stack Job Application Manager",
    description:
      "A complete job application tracking system with JWT auth, refresh token rotation, email-based password reset, and full CRUD for job listings.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT", "Nodemailer"],
    live: "https://job-tracker-wheat-kappa.vercel.app",
    api: "https://job-tracker-backend-u6xr.onrender.com",
    features: ["JWT + Refresh Tokens", "Email Reset Flow", "Job Stats Dashboard", "Filter by Status", "Protected Routes"],
    color: "#3b82f6",
  },
  {
    title: "Class Reminder App",
    tagline: "MERN Stack Timetable & Reminder System",
    description:
      "A full-stack class reminder application built with the MERN stack, allowing users to register, log in, and manage class schedules with reminders and a structured timetable view.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT", "bcryptjs"],
    live: "https://class-reminder-frontend.vercel.app/",
    features: ["JWT Authentication", "Protected Routes", "CRUD Class Management", "Timetable View", "User-Specific Data Isolation"],
    color: "#22c55e",
  },
  {
    title: "Summit Events",
    tagline: "Premium Event Management Landing Page",
    description:
      "A high-end, fully responsive landing page for a Nairobi-based event management firm. Features scroll-triggered animations, dynamic navbar, and luxury aesthetic.",
    tech: ["React", "Vite", "Tailwind CSS", "AOS Animations", "React Icons"],
    live: "https://summit-mauve.vercel.app/",
    features: ["Scroll Animations", "Mobile-First", "Dynamic Navbar", "Testimonials Grid", "Luxury Design"],
    color: "#f59e0b",
  },
  {
    title: "Peach State Drive",
    tagline: "Car Hire Company Website",
    description:
      "A modern, responsive car hire company website built with vanilla HTML, CSS, and JavaScript with a clean UI for fleet and booking information.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://kabzjose.github.io/peach-State-Drive-/",
    features: ["Responsive Design", "Fleet Showcase", "Clean UI", "Vanilla JS"],
    color: "#f97316",
  },

];

export const EXPERIENCE = [
  {
    role: "BSc Software Engineering",
    company: "Muranga University of Technology",
    duration: "2023 - 2026",
    desc: "Completed a Bachelor of Science degree in Software Engineering with focus on software architecture, full-stack development, databases, and real-world systems design.",
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance / Self-Employed",
    duration: "2025 - Present",
    desc: "Building full-stack web applications for clients from React frontends to Node.js APIs and PostgreSQL databases, and handling deployment on Vercel and Render.",
  },
  {
    role: "Database Administrator",
    company: "Personal & Client Projects",
    duration: "2023 - Present",
    desc: "Designing, optimizing, and administering PostgreSQL and MongoDB databases with efficient schemas, indexing, and query optimization strategies.",
  },
  {
    role: "UI/UX Designer",
    company: "Freelance",
    duration: "2022 - Present",
    desc: "Designing clean, user-friendly interfaces using Figma and implementing them with React and Tailwind CSS with a mobile-first focus.",
  },
];

export const CONTACT_LINKS = [
  { label: "Email", value: "josekabz00@gmail.com", href: "mailto:josekabz00@gmail.com" },
  { label: "Phone", value: "+254 718 047 199", href: "tel:+254718047199" },
  { label: "WhatsApp", value: "+254 718 047 199", href: "https://wa.me/254718047199" },
  { label: "GitHub", value: "github.com/kabzjose", href: "https://github.com/kabzjose" },
  { label: "LinkedIn", value: "https://www.linkedin.com/in/joseph-ndungu-ab21293aa/", href: "https://www.linkedin.com/in/joseph-ndungu-ab21293aa/" },
];

export const CURRENTLY_LEARNING = ["Docker & Containerization", "AWS / Cloud Deployment", "React Native", "AI Integration"];
