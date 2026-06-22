import FadeIn from "./FadeIn";
import { CURRENTLY_LEARNING, SKILLS } from "../data/portfolioData";

const WHAT_I_DO = [
  {
    title: "Software Development",
    description:
      "Building modern, responsive web applications with clean architecture and smooth user experience.",
    skills: SKILLS.Frontend.slice(0, 3),
  },
  {
    title: "Backend APIs",
    description:
      "Designing secure REST APIs, authentication flows, and production-ready server logic for web products.",
    skills: SKILLS.Backend.slice(0, 3),
  },
  {
    title: "Database Engineering",
    description:
      "Designing efficient database schemas, query optimization, and dependable data management workflows.",
    skills: SKILLS.Databases.slice(0, 3),
  },
  {
    title: "UI/UX Systems",
    description:
      "Translating product ideas into interfaces that are clear, responsive, and practical for real users.",
    skills: SKILLS["UI/UX"].slice(0, 3),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0a0f1f] px-6 py-28">
      <div className="mx-auto w-full max-w-6xl">
        <FadeIn>
          <div className="mb-14">
            <p className="font-[Montserrat] text-xs tracking-[0.32em] text-[#00FF7F]">02. WHAT I DO</p>
            <h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold text-[#FFD700]">Skills & Services</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
              Combining practical engineering skills with product thinking to build complete solutions from UI to API and database.
            </p>
          </div>
        </FadeIn>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {WHAT_I_DO.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[#00FF7F]/50">
                <h3 className="font-[Montserrat] text-2xl font-extrabold text-[#FFD700]">{item.title}</h3>
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

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(SKILLS).map(([category, items], index) => (
            <FadeIn key={category} delay={index * 0.08}>
              <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[#FFD700]/40">
                <h3 className="font-[Montserrat] text-xs font-bold tracking-[0.2em] text-[#00FF7F]">{category}</h3>
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

      </div>
    </section>
  );
}
