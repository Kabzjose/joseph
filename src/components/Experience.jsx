import FadeIn from "./FadeIn";
import { EXPERIENCE } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 px-6 py-28 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-4xl">
        <FadeIn>
          <div className="mb-14">
            <p className="font-mono text-xs tracking-[0.32em] text-blue-800 dark:text-blue-300">04. EXPERIENCE</p>
            <h2 className="mt-3 font-[Syne] text-4xl font-extrabold text-slate-900 dark:text-slate-100">Career Timeline</h2>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-transparent" />

          {EXPERIENCE.map((item, index) => (
            <FadeIn key={item.role} delay={index * 0.1}>
              <article className="relative mb-8 pl-12">
                <span className="absolute left-[9px] top-7 h-3.5 w-3.5 rounded-full border-2 border-blue-500 bg-white dark:bg-slate-900" />
                <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm transition hover:border-blue-400 dark:border-slate-800 dark:bg-slate-950">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-[Syne] text-xl font-semibold text-slate-900 dark:text-slate-100">{item.role}</h3>
                    <p className="font-mono text-xs tracking-wider text-blue-800 dark:text-blue-300">{item.duration}</p>
                  </div>
                  <p className="mt-2 font-mono text-xs tracking-[0.12em] text-sky-800 dark:text-sky-300">{item.company}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-800 dark:text-slate-300">{item.desc}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
