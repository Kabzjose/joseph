import FadeIn from "./FadeIn";
import { CURRENTLY_LEARNING, SKILLS } from "../data/portfolioData";

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
    skills: ["M-Pesa (Daraja)", "Stripe", "Webhooks"],
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
    <section id="skills" className="bg-[#0a0f1f] px-6 py-28">
      <div className="mx-auto w-full max-w-6xl">
        <FadeIn>
          <div className="mb-14">
            <p className="font-[Montserrat] text-xs tracking-[0.32em] text-[#00FF7F]">02. TECHNICAL SKILLS</p>
            <h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold text-[#FFD700]">Core Competencies</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
              Hands-on experience developing dependable backend services, resilient database schemas, API integrations, and modern interactive frontends.
            </p>
          </div>
        </FadeIn>

        {/* Highlight Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {WHAT_I_DO.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[#00FF7F]/50">
                <h3 className="font-[Montserrat] text-xl font-extrabold text-[#FFD700]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/80">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#00FF7F]/30 bg-black/30 px-2.5 py-1 font-[Montserrat] text-xs text-white/85 transition hover:border-[#00FF7F] hover:text-[#00FF7F]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Detailed Skills Categories */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(SKILLS).map(([category, items], index) => (
            <FadeIn key={category} delay={index * 0.08}>
              <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[#FFD700]/40">
                <h3 className="font-[Montserrat] text-xs font-bold tracking-[0.2em] text-[#00FF7F] uppercase">{category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 font-[Montserrat] text-xs text-white/80 transition hover:border-[#FFD700] hover:text-[#FFD700]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Continuous Learning */}
        <FadeIn delay={0.3}>
          <div className="mt-12 rounded-[1.75rem] border border-[#00FF7F]/20 bg-black/40 p-6">
            <p className="font-[Montserrat] text-xs tracking-[0.24em] text-[#00FF7F]">CURRENTLY EXPANDING &amp; PRACTICING</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {CURRENTLY_LEARNING.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-[Montserrat] text-xs text-white/90"
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
