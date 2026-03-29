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
    <section id="skills" className="bg-slate-100 px-6 py-28 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-6xl">
        <FadeIn>
          <div className="mb-14">
            <p className="font-mono text-xs tracking-[0.32em] text-sky-700 dark:text-sky-300">02. WHAT I DO</p>
            <h2 className="mt-3 font-[Syne] text-4xl font-extrabold text-slate-900 dark:text-slate-100">Skills & Services</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 dark:text-slate-300">
              Combining practical engineering skills with product thinking to build complete solutions from UI to API and database.
            </p>
          </div>
        </FadeIn>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {WHAT_I_DO.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-400 dark:border-slate-800 dark:bg-slate-950">
                <h3 className="font-[Syne] text-2xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-sky-300 bg-sky-100 px-2.5 py-1 font-mono text-xs text-sky-800 dark:border-sky-900/50 dark:bg-sky-500/10 dark:text-sky-200"
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
              <article className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 dark:border-slate-800 dark:bg-slate-950">
                <h3 className="font-mono text-xs tracking-[0.2em] text-emerald-800 dark:text-emerald-300">{category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-emerald-300 bg-emerald-100 px-3 py-1 font-mono text-xs text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-500/10 dark:text-emerald-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25} className="mt-8">
          <div className="rounded-2xl border border-sky-300 bg-sky-100 p-5 dark:border-sky-900/50 dark:bg-sky-500/10">
            <p className="font-mono text-xs tracking-[0.18em] text-sky-800 dark:text-sky-300">CURRENTLY LEARNING</p>
            <p className="mt-2 text-sm leading-7 text-sky-900 dark:text-sky-100">{CURRENTLY_LEARNING.join(" | ")}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
