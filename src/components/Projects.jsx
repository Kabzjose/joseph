import { useState, useEffect, useCallback } from "react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "../data/portfolioData";

/* ─── Case Study Modal ─────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const onBackdrop = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      onClick={onBackdrop}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-[#050816]/85 backdrop-blur-md"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1629] to-[#0a1020] shadow-[0_32px_80px_rgba(0,0,0,0.7)] text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
        >
          ✕
        </button>

        {/* Thumbnail Preview */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl bg-[#0a1020]">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1629] via-transparent to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            {project.featured && (
              <span className="rounded-full border border-[#00FF7F]/40 bg-black/60 px-3 py-1 font-[Montserrat] text-[10px] font-bold tracking-wider text-[#00FF7F] backdrop-blur-sm">
                FEATURED CASE STUDY
              </span>
            )}
            <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 font-[Montserrat] text-[10px] tracking-wider text-white/80 backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <p className="font-[Montserrat] text-xs tracking-[0.24em] text-[#00FF7F] uppercase">
              {project.tagline}
            </p>
            <h2 className="mt-1 font-[Montserrat] text-2xl sm:text-3xl font-extrabold text-[#FFD700]">
              {project.title}
            </h2>
          </div>

          {/* Overview */}
          <div>
            <h3 className="font-[Montserrat] text-xs font-bold tracking-[0.2em] text-[#00FF7F]">
              01. OVERVIEW &amp; PROBLEM SOLVED
            </h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/85">
              {project.description}
            </p>
          </div>

          {/* Architecture & Engineering Highlights */}
          {project.architecture && (
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 sm:p-5">
              <h3 className="font-[Montserrat] text-xs font-bold tracking-[0.2em] text-[#FFD700]">
                02. SYSTEM ARCHITECTURE &amp; TECHNICAL CHALLENGES
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Key Features */}
          {project.features?.length > 0 && (
            <div>
              <h3 className="font-[Montserrat] text-xs font-bold tracking-[0.2em] text-[#00FF7F]">
                03. KEY ENGINEERING FEATURES
              </h3>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/5 p-3 text-xs leading-relaxed text-white/85"
                  >
                    <span className="text-[#00FF7F] font-bold">✦</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="font-[Montserrat] text-xs font-bold tracking-[0.2em] text-[#00FF7F]">
              04. TECHNOLOGY STACK
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 font-[Montserrat] text-xs text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Cold-start disclaimer */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200/90">
            ℹ️ <strong>Live Demo Note:</strong> Free tier cloud services (e.g. Render) spin down during idle periods. Please allow ~30 seconds for the backend to wake up on the initial request.
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#00FF7F] px-6 py-2.5 font-[Montserrat] text-xs font-bold tracking-wider text-black transition hover:bg-white"
              >
                LIVE DEMO ↗
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#FFD700] bg-transparent px-6 py-2.5 font-[Montserrat] text-xs font-bold tracking-wider text-[#FFD700] transition hover:bg-[#FFD700] hover:text-black"
              >
                GITHUB REPO ↗
              </a>
            )}
            {project.api && (
              <a
                href={project.api}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-[Montserrat] text-xs font-semibold tracking-wider text-white/80 transition hover:bg-white/15"
              >
                API ENDPOINT ↗
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto rounded-full border border-white/15 px-5 py-2.5 font-[Montserrat] text-xs font-semibold tracking-wider text-white/60 transition hover:text-white hover:border-white/40"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Project Card ─────────────────────────────────────────────────────── */
function ProjectCard({ project, onOpen }) {
  const MAX_TAGS = 4;
  const visibleTech = project.tech.slice(0, MAX_TAGS);
  const extraCount = project.tech.length - MAX_TAGS;

  return (
    <article
      onClick={onOpen}
      role="button"
      tabIndex={0}
      aria-label={`View case study for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#00FF7F]/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)] text-left cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0a1020]">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />

        {project.featured && (
          <span className="absolute top-3 left-3 rounded-full border border-[#00FF7F]/40 bg-black/70 px-2.5 py-0.5 font-[Montserrat] text-[10px] font-bold tracking-wider text-[#00FF7F] backdrop-blur-sm">
            FLAGSHIP
          </span>
        )}

        <div
          className="absolute top-3 right-3 h-2 w-2 rounded-full"
          style={{
            backgroundColor: project.color || "#00FF7F",
            boxShadow: `0 0 10px ${project.color || "#00FF7F"}`,
          }}
        />
      </div>

      {/* Info Container */}
      <div className="flex flex-1 flex-col p-5">
        <p className="truncate font-[Montserrat] text-[10px] tracking-[0.24em] text-[#00FF7F] uppercase">
          {project.tagline}
        </p>
        <h3 className="mt-1 line-clamp-1 font-[Montserrat] text-lg font-extrabold text-[#FFD700]">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/70">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {visibleTech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 font-[Montserrat] text-[10px] text-white/75"
            >
              {t}
            </span>
          ))}
          {extraCount > 0 && (
            <span className="rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 px-2 py-0.5 font-[Montserrat] text-[10px] text-[#FFD700]">
              +{extraCount}
            </span>
          )}
        </div>

        <div className="flex-1" />

        {/* Action Buttons */}
        <div className="mt-5 flex items-center gap-2 pt-2 border-t border-white/5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
            className="flex-1 rounded-full border border-white/15 bg-white/5 py-2 text-center font-[Montserrat] text-[10px] font-bold tracking-wider text-white transition hover:bg-white/15"
          >
            CASE STUDY
          </button>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-full border border-[#FFD700] px-3 py-2 text-center font-[Montserrat] text-[10px] font-bold tracking-wider text-[#FFD700] transition hover:bg-[#FFD700] hover:text-black"
              title="GitHub Code"
            >
              CODE
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-full bg-[#00FF7F] px-3 py-2 text-center font-[Montserrat] text-[10px] font-bold tracking-wider text-black transition hover:bg-white"
              title="Live Demo"
            >
              DEMO ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ─── Projects Section ─────────────────────────────────────────────────── */
const TABS = [
  { id: "featured", label: "Featured Systems" },
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack & Systems" },
  { id: "ai", label: "AI & Real-Time" },
  { id: "backend", label: "Backend & APIs" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("featured");
  const [selected, setSelected] = useState(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === "featured") return p.featured;
    if (activeTab === "all") return true;
    if (activeTab === "fullstack") return p.category === "Full-Stack & Systems";
    if (activeTab === "ai") return p.category === "AI & Real-Time" || p.category === "Real-Time & Distributed";
    if (activeTab === "backend") return p.category === "Backend & APIs" || p.category === "Fintech & Backend";
    return true;
  });

  return (
    <>
      <section id="projects" className="bg-[#070b14] px-6 py-28">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="font-[Montserrat] text-xs tracking-[0.32em] text-[#00FF7F]">03. ENGINEERING PORTFOLIO</p>
                <h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold text-[#FFD700]">Featured Work &amp; Case Studies</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
                  Production systems built with TypeScript, Node.js, PostgreSQL, payment gateways, and real-time architectures.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-4 py-1.5 font-[Montserrat] text-xs font-semibold tracking-wider transition ${
                      activeTab === tab.id
                        ? "bg-[#00FF7F] text-black shadow-md"
                        : "border border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.05}>
                <ProjectCard project={project} onOpen={() => setSelected(project)} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
