import FadeIn from "./FadeIn";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#070b14] px-6 py-28">
      <div className="mx-auto w-full max-w-6xl">
        <FadeIn>
          <div className="mb-14">
            <p className="font-[Montserrat] text-xs tracking-[0.32em] text-[#00FF7F]">03. PROJECTS</p>
            <h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold text-[#FFD700]">Featured Work</h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:border-[#00FF7F]/50">
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/25 to-transparent" />
                </div>

                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="font-[Montserrat] text-2xl font-extrabold text-[#FFD700]">{project.title}</h3>
                    <p className="mt-1 font-[Montserrat] text-xs tracking-[0.24em] text-[#00FF7F]">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm leading-7 text-white/80">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-black/30 px-3 py-1 font-[Montserrat] text-[11px] tracking-[0.08em] text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[#FFD700] px-4 py-2 font-[Montserrat] text-xs font-bold tracking-[0.18em] text-[#FFD700] transition hover:bg-[#FFD700] hover:text-black"
                      >
                        GITHUB
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[#00FF7F] bg-[#00FF7F] px-4 py-2 font-[Montserrat] text-xs font-bold tracking-[0.18em] text-black transition hover:bg-white"
                    >
                      LIVE DEMO
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
