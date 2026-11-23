import dukaImage from "../assets/Duka.png";
import mediCareImage from "../assets/MediCare.png";
import paymentSystemImage from "../assets/paymentsystem.png";
import vChatImage from "../assets/v-chat.png";
import wildlifeTrackerImage from "../assets/wildlifetracker.png";
import reelwiseImage from "../assets/reelwise.png";
import urlShortenerImage from "../assets/url-shortener.png";
import jobTrackerImage from "../assets/jobtracker.png";
import classReminderImage from "../assets/classreminder.png";
import summitImage from "../assets/summit.png";
import peachStateImage from "../assets/peachstate.png";

export const RESUME_PATH = "/Joseph_Ndungu_CV.pdf";

export const NAV_LINKS = [
  { id: "about", label: "ABOUT ME" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "contact", label: "CONTACT" },
];

export const SKILLS = {
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Zod / Joi Validation",
    "Rate Limiting",
    "Centralized Error Handling",
    "Nodemailer",
    "Bcrypt",
    "Passport",
  ],
  Databases: [
    "PostgreSQL",
    "Relational Schema Design",
    "Database Migrations",
    "Redis (Caching & Queues)",
    "Prisma ORM",
    "Supabase",
    "Neon DB",
    "MongoDB",
    "SQL Queries & Indexing",
  ],
  Frontend: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Vite",
    "HTML5",
    "CSS3",
    "React Router",
    "Responsive Design",
  ],
  "Tools & Delivery": [
    "Git",
    "GitHub",
    "Docker",
    "Docker Compose",
    "GitHub Actions (CI/CD)",
    "Postman",
    "Linux",
    "Vercel",
    "Render",
  ],
  "Integration & AI": [
    "M-Pesa (Daraja API)",
    "Stripe Payments & Webhooks",
    "Paystack",
    "Socket.io (WebSockets)",
    "Google Gemini API",
    "Supabase Auth",
    "TMDB API",
    "Hugging Face AI",
  ],
};

export const PROJECTS = [
  {
    title: "Duka",
    tagline: "Full-Stack Delivery & E-Commerce Platform",
    featured: true,
    category: "Full-Stack & Systems",
    description:
      "A production-grade delivery logistics platform with an integrated e-commerce storefront. Solves real-world supply chain and order tracking problems by pairing an online store with an automated rider dispatch engine, live GPS tracking, and a conflict-safe delivery state machine.",
    architecture:
      "Architected with a layered Express/TypeScript backend running on PostgreSQL via Prisma ORM, paired with a modern Next.js client. Employs transactional delivery state transitions to prevent race conditions during driver assignment, and integrates Socket.io for sub-second GPS coordinate broadcasts.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "M-Pesa (Daraja)",
      "Paystack",
      "JWT",
      "Zod",
      "GitHub Actions",
    ],
    live: "https://duka-ecommerce-three.vercel.app/",
    repo: "https://github.com/Kabzjose/Duka-Ecommerce",
    features: [
      "Multi-Role Dashboards (Customer, Rider & Operations Admin)",
      "Conflict-Safe Delivery State Machine (Prevents duplicate rider claims)",
      "Dual Payment Gateways (M-Pesa Daraja STK Push & Paystack Card)",
      "Real-Time Rider GPS Tracking via Socket.io WebSockets",
      "Zone-Based Delivery Distance & Pricing Engine",
      "Automated SMS Notifications for Dispatch and Delivery",
      "Secure JWT Authentication with Refresh Token Rotation",
      "Automated CI/CD Pipeline (GitHub Actions → Render)",
    ],
    color: "#10b981",
    image: dukaImage,
  },

  {
    title: "Payment System",
    tagline: "Fintech Payment Backend & Admin Dashboard",
    featured: true,
    category: "Fintech & Backend",
    description:
      "A resilient payment infrastructure and administrative dashboard built to handle real-world financial transactions safely. Supports international card payments via Stripe and Kenyan mobile money via M-Pesa STK push with robust reconciliation safeguards.",
    architecture:
      "Engineered with strict separation of concerns into middleware, service, and repository layers. Features an idempotent webhook processing pipeline with database transaction locks to guarantee zero double-charges even under concurrent retries or network dropouts.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Stripe API",
      "M-Pesa (Daraja)",
      "JWT",
      "Zod Validation",
      "React",
      "Tailwind CSS",
      "Vite",
    ],
    live: "https://payment-system-one-chi.vercel.app/",
    repo: "https://github.com/Kabzjose/payment-system",
    features: [
      "Idempotent Webhook Processing (Prevents duplicate charges)",
      "M-Pesa Daraja STK Push with Instant Callback Reconciliation",
      "Stripe PaymentIntents & Recurring Subscription Management",
      "Granular Admin Dashboard for Refunds, Plan Upgrades & Suspensions",
      "Strict Zod Request Validation & Centralized Error Middleware",
      "Structured Logging and Rate Limiting for Security",
    ],
    color: "#6366f1",
    image: paymentSystemImage,
  },

  {
    title: "MediCare+",
    tagline: "Healthcare Appointment & Scheduling Engine",
    featured: true,
    category: "Full-Stack & Systems",
    description:
      "A production-ready healthcare management and doctor appointment platform. Provides dedicated workflows for patients, practitioners, and clinic administrators, guaranteeing conflict-free scheduling and payment-gated bookings.",
    architecture:
      "Engineered with Node.js, Express, TypeScript, and PostgreSQL. Utilizes strict database-backed slot availability validation to prevent double-booking across timezones. Containerized with Docker and continuously verified through GitHub Actions CI/CD.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Stripe",
      "M-Pesa",
      "JWT Auth",
      "Zod",
      "Docker",
      "GitHub Actions",
    ],
    live: "https://healthcare-system-eta.vercel.app",
    repo: "https://github.com/Kabzjose/MediCare",
    features: [
      "Conflict-Safe Appointment Scheduling Algorithm",
      "Dedicated Doctor & Patient Portal Dashboards",
      "Integrated Stripe & M-Pesa Payment Checkout",
      "Automated SMS Reminders & Status Updates",
      "Zod Schema Validation & Role-Based Access Control",
      "Dockerized Local Development & Automated CI/CD",
    ],
    color: "#0ea5e9",
    image: mediCareImage,
  },

  {
    title: "Reelwise",
    tagline: "AI-Powered Movie Discovery & Recommendation Engine",
    featured: true,
    category: "AI & Real-Time",
    description:
      "An intelligent movie discovery and conversational recommendation platform. Users complete an interactive taste questionnaire and receive personalized recommendations powered by Google Gemini 1.5 Flash, with live streaming responses and catalogue filtering.",
    architecture:
      "Built with Next.js App Router, TypeScript, and Tailwind CSS. Employs Server-Sent Events (SSE) for low-latency, token-by-token LLM output streaming. Integrates Supabase for cross-device persistent watchlist synchronization with local-storage fallback.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini AI (1.5 Flash)",
      "Supabase",
      "TMDB API",
      "NextAuth.js",
      "Vercel",
    ],
    live: "https://movie-app-eta-ashy.vercel.app",
    repo: "https://github.com/kabzjose/movie-app",
    features: [
      "Streaming Token-by-Token AI Recommendations (Gemini 1.5 Flash)",
      "Conversational Follow-Up Refinements & Natural Language Search",
      "TMDB Catalogue Browsing with Dynamic Multi-Filter System",
      "Persistent Watchlist with Supabase Cloud & Local Storage Sync",
      "Google OAuth Authentication via NextAuth",
    ],
    color: "#ef4444",
    image: reelwiseImage,
  },

  {
    title: "V-Chat",
    tagline: "Distributed Real-Time WebSocket & Redis Chat",
    featured: true,
    category: "Real-Time & Distributed",
    description:
      "A scalable real-time messaging application designed for instant communication with high concurrency. Features password-protected private channels, persistent room histories, live presence, and typing indicators.",
    architecture:
      "Built with React, Express, PostgreSQL, Redis, and Socket.IO. Leverages Redis for distributed in-memory pub/sub and active user presence tracking. Packaged with Docker Compose for seamless container orchestration.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Express",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Passport Google OAuth",
      "JWT",
      "Docker Compose",
    ],
    live: "https://v-chat-smoky.vercel.app/",
    api: "https://v-chat-l3gp.onrender.com/",
    repo: "https://github.com/kabzjose/v-chat",
    features: [
      "Bi-Directional Real-Time Messaging via Socket.IO",
      "In-Memory Presence & Typing Tracking Powered by Redis",
      "Password-Protected Private Chat Rooms",
      "Dual Auth: JWT Authentication + Google OAuth via Passport",
      "Containerized Multi-Service Deployment with Docker Compose",
    ],
    color: "#8b5cf6",
    image: vChatImage,
  },

  {
    title: "Wildlife Tracker",
    tagline: "Full-Stack Conservation Platform with AI Vision",
    featured: false,
    category: "Full-Stack & Systems",
    description:
      "A conservation web platform enabling rangers and researchers to record wildlife observations, monitor endangered species, and leverage computer vision for species identification.",
    architecture:
      "React and Leaflet frontend connected to an Express/PostgreSQL API, with Supabase storage and Hugging Face inference models for automated animal species classification from photos.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Leaflet", "Hugging Face AI"],
    live: "https://wildlife-tracker-1.onrender.com",
    api: "https://wildlife-tracker-qrv6.onrender.com",
    features: [
      "AI Species Identification from Uploaded Images",
      "Interactive Geospatial Observation Map (Leaflet)",
      "Role-Based Access Control for Researchers & Admins",
      "Real-time Observation Logging & CSV Data Export",
    ],
    color: "#10b981",
    image: wildlifeTrackerImage,
  },

  {
    title: "URL Shortener & Analytics",
    tagline: "High-Performance Link Management Engine",
    featured: false,
    category: "Backend & APIs",
    description:
      "A fast link shortening engine with real-time click tracking, geolocation analytics, custom aliases, and zero-delay redirection.",
    architecture:
      "PostgreSQL-backed relational schema with indexed lookup tables for sub-millisecond redirect resolution. Built with Node.js, Express, and Neon serverless PostgreSQL.",
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Neon DB", "Tailwind CSS"],
    live: "https://url-shortener-ruddy-tau.vercel.app",
    api: "https://url-shortener-kxak.onrender.com",
    features: [
      "Fast Base62 Short URL Generation & Custom Slugs",
      "Real-Time Click Analytics & Referrer Tracking",
      "Indexed Database Schema for Ultra-Low Latency Redirects",
      "RESTful API with Rate Limiting",
    ],
    color: "#06b6d4",
    image: urlShortenerImage,
  },

  {
    title: "Job Tracker",
    tagline: "Full-Stack Job Application Pipeline Manager",
    featured: false,
    category: "Full-Stack & Systems",
    description:
      "A centralized application management system helping software engineers organize applications, interviews, offers, and follow-ups with pipeline status boards.",
    architecture:
      "Node.js/Express backend on PostgreSQL with Nodemailer for automated email password resets and refresh token rotation in secure HTTP-only cookies.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT", "Nodemailer"],
    live: "https://job-tracker-wheat-kappa.vercel.app",
    api: "https://job-tracker-backend-u6xr.onrender.com",
    features: [
      "Kanban-Style Application Status Pipeline",
      "Secure JWT with Refresh Token Rotation",
      "Automated Password Reset via Nodemailer",
      "Interactive Interview & Offer Metrics Dashboard",
    ],
    color: "#3b82f6",
    image: jobTrackerImage,
  },

  {
    title: "Class Reminder App",
    tagline: "MERN Stack Academic Timetable Manager",
    featured: false,
    category: "Full-Stack & Systems",
    description:
      "A timetable and academic task manager built for students to track lecture schedules, assignment deadlines, and exam dates with user data isolation.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT"],
    live: "https://class-reminder-frontend.vercel.app/",
    features: ["User-Isolated Schedules", "Timetable Visual Grid", "CRUD Task Management", "JWT Authentication"],
    color: "#22c55e",
    image: classReminderImage,
  },

  {
    title: "Summit Events",
    tagline: "High-Performance Event Management Landing Page",
    featured: false,
    category: "Frontend & UI",
    description:
      "A modern, responsive landing page for an event management enterprise featuring smooth scroll animations, mobile-first design, and conversion-optimized CTAs.",
    tech: ["React", "Vite", "Tailwind CSS", "AOS Animations"],
    live: "https://summit-mauve.vercel.app/",
    features: ["Smooth Scroll Interactions", "Dynamic Navigation", "Fully Responsive Across Viewports"],
    color: "#f59e0b",
    image: summitImage,
  },

  {
    title: "Peach State Drive",
    tagline: "Automotive Rental Showcase & Booking Portal",
    featured: false,
    category: "Frontend & UI",
    description:
      "A fast, lightweight car hire showcase platform built with semantic HTML5, CSS3, and vanilla JavaScript for clean vehicle catalog browsing.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://kabzjose.github.io/peach-State-Drive-/",
    features: ["Fleet Showcase Grid", "Zero-Dependency Vanilla Architecture", "Clean Mobile Layout"],
    color: "#f97316",
    image: peachStateImage,
  },
];

export const EXPERIENCE = [
  {
    type: "work",
    role: "Full-Stack & Systems Engineer",
    company: "Freelance & Technical Projects",
    duration: "2024 - Present",
    desc: "Architecting and deploying production-grade web applications and backend systems. Designing secure REST APIs with Node.js/Express and TypeScript, integrating payment gateways (Daraja M-Pesa STK Push, Stripe), implementing database schemas on PostgreSQL, and configuring automated CI/CD workflows.",
    highlights: [
      "Engineered conflict-safe state machines and real-time WebSocket pipelines.",
      "Implemented idempotent payment handling and webhook reconciliation.",
      "Optimized relational schemas, indexing, and Redis caching for high responsiveness.",
    ],
  },
  {
    type: "education",
    role: "BSc in Software Engineering",
    company: "Murang'a University of Technology, Kenya",
    duration: "2023 - 2028 (Expected)",
    desc: "Pursuing a comprehensive Bachelor of Science degree in Software Engineering. Core coursework and practical foundations include Software Architecture, Database Systems, Data Structures & Algorithms, Operating Systems, Computer Networks, and Distributed Systems Design.",
    highlights: [
      "Focus on software reliability, relational database modeling, and scalable system design.",
      "Applied academic engineering principles to production-grade web platforms.",
    ],
  },
  {
    type: "education",
    role: "Full-Stack Software Development",
    company: "Power Learn Project (PLP) Africa",
    duration: "2024 - Dec 2024 / Dec 2026",
    desc: "Intensive software development program covering modern full-stack web engineering, Python, relational database management, collaborative software delivery, and production deployment methodologies.",
    highlights: [
      "Mastered backend service architecture, request validation, and database migrations.",
      "Collaborated on agile development workflows and peer code reviews.",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    status: "Verified",
    verifyUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/Josekabz-1515/BCF89F59FBC021ED?sharingId=325156824C5803A3",
    desc: "Cloud architecture concepts, security, compliance, network isolation, and Azure compute & storage services.",
  },
  {
    title: "Microsoft AI Skills Fest — GitHub Copilot",
    issuer: "Microsoft",
    status: "Completed",
    desc: "AI-assisted software development, pair programming workflows, and automated test drafting.",
  },
  {
    title: "n8n Workflow Automation Specialist",
    issuer: "n8n Academy",
    status: "Verified",
    verifyUrl: "https://learn.n8n.io/certificates/a8785f5c060143e7802cdfb0e3b95116",
    desc: "Designing automated backend workflows, webhook integration, and event-driven automation pipelines.",
  },
];

export const CONTACT_LINKS = [
  {
    label: "Resume / CV",
    value: "Joseph Ndungu – CV (PDF)",
    href: RESUME_PATH,
    download: "Joseph_Ndungu_CV.pdf",
    isResume: true,
  },
  {
    label: "Email",
    value: "josekabz00@gmail.com",
    href: "mailto:josekabz00@gmail.com",
  },
  {
    label: "Phone",
    value: "+254 718 047 199",
    href: "tel:+254718047199",
  },
  {
    label: "WhatsApp",
    value: "+254 718 047 199",
    href: "https://wa.me/254718047199",
  },
  {
    label: "GitHub",
    value: "github.com/Kabzjose",
    href: "https://github.com/Kabzjose",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/joseph-ndungu-k",
    href: "https://www.linkedin.com/in/joseph-ndungu-k/",
  },
];

export const CURRENTLY_LEARNING = [
  "Distributed Transactions & Message Queues",
  "Cloud Infrastructure (Docker, Azure, CI/CD)",
  "Payment Reconciliation & Webhook Reliability",
  "AI Integration & LLM Streaming (Gemini API)",
];
