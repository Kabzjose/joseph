import { useState } from "react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="projects" className="bg-slate-100 px-6 py-28 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-6xl">
        <FadeIn>
          <div className="mb-14">
            <p className="font-mono text-xs tracking-[0.32em] text-[#22c55e]">03. PROJECTS</p>
            <h2 className="mt-3 font-[Syne] text-4xl font-extrabold text-slate-900 dark:text-slate-100">Featured Work</h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const isOpen = index === activeIndex;
            const isDockerized = project.tech.includes("Docker");

            return (
              <FadeIn key={project.title} delay={index * 0.08}>
                <article
                  className="relative overflow-hidden rounded-2xl border border-slate-300 bg-slate-100 p-6 shadow-sm transition dark:border-slate-800 dark:bg-slate-900"
                  style={{ boxShadow: isOpen ? `0 12px 35px ${project.color}20` : "none", borderTop: "3px solid #22c55e" }}
                >
                  <div
                    className="absolute left-0 top-0 h-1 w-full"
                    style={{ background: `linear-gradient(to right, transparent, ${project.color}, transparent)` }}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-[Syne] text-2xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
                        {isDockerized && (
                          <span className="rounded-full border border-emerald-300 bg-emerald-100 px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-500/10 dark:text-emerald-300">
                            Dockerized
                          </span>
                        )}
                      </div>
                      <p className="mt-1 font-mono text-xs tracking-[0.14em]" style={{ color: project.color }}>
                        {project.tagline}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-xs tracking-wide text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                        >
                          GitHub Repo
                        </a>
                      )}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg px-3 py-2 font-mono text-xs tracking-wide text-white"
                        style={{ backgroundColor: project.color }}
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-800 dark:text-slate-300">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-300 bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="rounded-md border border-slate-400 bg-slate-100 px-3 py-1.5 font-mono text-xs tracking-wide text-slate-900 transition hover:border-slate-500 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                    >
                      {isOpen ? "Hide Details" : "View Details"}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-200/70 p-4 dark:border-slate-700 dark:bg-slate-950/60">
                      <p className="font-mono text-xs tracking-[0.18em]" style={{ color: project.color }}>
                        KEY FEATURES
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="rounded-full border bg-slate-100/90 px-3 py-1 text-xs dark:bg-slate-900/80"
                            style={{ borderColor: `${project.color}66`, color: project.color }}
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
