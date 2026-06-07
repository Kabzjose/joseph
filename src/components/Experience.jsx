import FadeIn from "./FadeIn";
import { EXPERIENCE } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#050816] px-6 py-28">
      <div className="mx-auto w-full max-w-4xl">
        <FadeIn>
          <div className="mb-14">
            <p className="font-[Montserrat] text-xs tracking-[0.32em] text-[#00FF7F]">04. EXPERIENCE</p>
            <h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold text-[#FFD700]">Career Timeline</h2>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#00FF7F] to-transparent" />

          {EXPERIENCE.map((item, index) => (
            <FadeIn key={item.role} delay={index * 0.1}>
              <article className="relative mb-8 pl-12">
                <span className="absolute left-[9px] top-7 h-3.5 w-3.5 rounded-full border-2 border-[#00FF7F] bg-[#050816]" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:border-[#FFD700]/40">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-[Montserrat] text-xl font-semibold text-[#FFD700]">{item.role}</h3>
                    <p className="font-[Montserrat] text-xs tracking-wider text-[#00FF7F]">{item.duration}</p>
                  </div>
                  <p className="mt-2 font-[Montserrat] text-xs tracking-[0.12em] text-white/60">{item.company}</p>
                  <p className="mt-3 text-sm leading-7 text-white/80">{item.desc}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
