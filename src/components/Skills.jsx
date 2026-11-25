import FadeIn from "./FadeIn";
import { CURRENTLY_LEARNING, SKILLS } from "../data/portfolioData";
import TechBadge from "./TechBadge";

const WHAT_I_DO = [
  {
    title: "Backend & API Architecture",
    description:
      "Designing secure RESTful APIs, JWT authentication with token rotation, Zod request validation, and centralized error handling.",
    skills: ["Node.js", "Express", "TypeScript"],
  },
  {
    title: "Payment & External Integrations",
    description:
      "Integrating M-Pesa (Daraja API) STK Push, Stripe PaymentIntents, webhook listeners with idempotent processing, and automated SMS alerts.",
    skills: ["Stripe", "M-Pesa (Daraja)", "Webhooks"],
  },
  {
    title: "Database Engineering",
    description:
      "Relational schema modeling, index optimization, migrations with Prisma/SQL, and caching with Redis for fast, dependable data access.",
    skills: ["PostgreSQL", "Prisma", "Redis"],
  },
  {
    title: "Full-Stack & Real-Time Systems",
    description:
      "Building reactive Next.js & React interfaces powered by Socket.io WebSockets, AI model streaming (Gemini 1.5 Flash), and Docker deployments.",
    skills: ["Next.js", "Socket.io", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-black px-6 py-28 border-t border-zinc-900">
      <div className="mx-auto w-full max-w-6xl">
        <FadeIn>
          <div className="mb-14">
            <p className="font-[Montserrat] text-xs font-semibold tracking-[0.28em] text-[#10B981]">
              02. TECHNICAL SKILLS
            </p>
            <h2 className="mt-2.5 font-[Montserrat] text-4xl font-extrabold tracking-tight text-[#FFD700] sm:text-5xl">
              Core Competencies &amp; Services
            </h2>
            <p className="mt-3.5 max-w-2xl text-base leading-relaxed text-slate-300">
              Hands-on experience developing dependable backend services, resilient database schemas, API integrations, and modern interactive frontends.
            </p>
          </div>
        </FadeIn>

        {/* Highlight Cards */}
        <div className="mb-14 grid gap-6 md:grid-cols-2">
          {WHAT_I_DO.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="group rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#FFD700]/50 hover:bg-slate-900/70">
                <h3 className="font-[Montserrat] text-xl font-bold text-[#FFD700] transition group-hover:text-[#FFE033]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} size="sm" />
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Detailed Skills Categories with TechBadges */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(SKILLS).map(([category, items], index) => (
            <FadeIn key={category} delay={index * 0.07}>
              <article className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition hover:border-[#FFD700]/40">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <h3 className="font-[Montserrat] text-xs font-bold tracking-[0.2em] text-[#10B981] uppercase">
                    {category}
                  </h3>
                  <span className="font-[Montserrat] text-[10px] text-slate-400">
                    {items.length} skills
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <TechBadge key={skill} name={skill} size="sm" />
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Continuous Learning */}
        <FadeIn delay={0.25}>
          <div className="mt-12 rounded-2xl border border-[#FFD700]/25 bg-[#FFD700]/[0.04] p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FFD700]" />
              <p className="font-[Montserrat] text-xs font-semibold tracking-[0.2em] text-[#FFD700] uppercase">
                Currently Expanding &amp; Practicing
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {CURRENTLY_LEARNING.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 font-[Montserrat] text-xs font-medium text-slate-200"
                >
                  ⚡ {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
