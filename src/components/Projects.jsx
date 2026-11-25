import { useState, useEffect, useCallback } from "react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "../data/portfolioData";
import TechBadge from "./TechBadge";

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
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-zinc-800 bg-black shadow-[0_32px_80px_rgba(0,0,0,0.95)] text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-200 transition hover:bg-slate-700 hover:text-white"
        >
          ✕
        </button>

        {/* Thumbnail Preview */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl bg-slate-950">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            {project.featured && (
              <span className="rounded-full border border-[#10B981]/50 bg-slate-950/80 px-3 py-1 font-[Montserrat] text-[10px] font-bold tracking-wider text-[#10B981] backdrop-blur-md">
                FEATURED CASE STUDY
              </span>
            )}
            <span className="rounded-full border border-[#FFD700]/40 bg-slate-950/80 px-3 py-1 font-[Montserrat] text-[10px] font-medium tracking-wider text-[#FFD700] backdrop-blur-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <p className="font-[Montserrat] text-xs font-semibold tracking-[0.24em] text-[#10B981] uppercase">
              {project.tagline}
            </p>
            <h2 className="mt-1.5 font-[Montserrat] text-2xl sm:text-3xl font-extrabold text-[#FFD700]">
              {project.title}
            </h2>
          </div>

          {/* Overview */}
          <div>
            <h3 className="font-[Montserrat] text-xs font-bold tracking-[0.2em] text-[#10B981] uppercase">
              01. OVERVIEW &amp; PROBLEM SOLVED
            </h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-300">
              {project.description}
            </p>
          </div>

          {/* Architecture & Engineering Highlights */}
          {project.architecture && (
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="font-[Montserrat] text-xs font-bold tracking-[0.2em] text-[#FFD700] uppercase">
                02. SYSTEM ARCHITECTURE &amp; TECHNICAL CHALLENGES
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Key Features */}
          {project.features?.length > 0 && (
            <div>
              <h3 className="font-[Montserrat] text-xs font-bold tracking-[0.2em] text-[#10B981] uppercase">
                03. KEY ENGINEERING FEATURES
              </h3>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50 p-3 text-xs leading-relaxed text-slate-200"
                  >
                    <span className="text-[#10B981] font-bold">✦</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies with SVG TechBadges */}
          <div>
            <h3 className="font-[Montserrat] text-xs font-bold tracking-[0.2em] text-[#10B981] uppercase">
              04. TECHNOLOGY STACK
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <TechBadge key={t} name={t} size="sm" />
              ))}
            </div>
          </div>

          {/* Cold-start disclaimer */}
          <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 p-3.5 text-xs text-amber-200/90">
            ℹ️ <strong>Live Demo Note:</strong> Cloud backends on free instances (Render) sleep during inactivity. Please allow ~30 seconds on initial load for the server instance to wake up.
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#10B981] px-6 py-2.5 font-[Montserrat] text-xs font-bold tracking-wider text-slate-950 transition hover:bg-white"
              >
                LIVE DEMO ↗
              </a>
            )}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#FFD700] bg-transparent px-6 py-2.5 font-[Montserrat] text-xs font-bold tracking-wider text-[#FFD700] transition hover:bg-[#FFD700] hover:text-black"
              >
                GITHUB REPO ↗
              </a>
            ) : project.isPrivate ? (
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2.5 font-[Montserrat] text-xs font-medium text-slate-300">
                🔒 Private Client Codebase
              </span>
            ) : null}
            {project.api && (
              <a
                href={project.api}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-2.5 font-[Montserrat] text-xs font-semibold tracking-wider text-slate-300 transition hover:bg-slate-800"
              >
                API ENDPOINT ↗
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto rounded-xl border border-slate-800 px-5 py-2.5 font-[Montserrat] text-xs font-semibold tracking-wider text-slate-400 transition hover:text-white hover:border-slate-700"
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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50 transition duration-300 hover:-translate-y-1 hover:border-[#FFD700]/50 hover:bg-slate-900/70 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] text-left cursor-pointer backdrop-blur-sm"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent" />

        {project.featured && (
          <span className="absolute top-3 left-3 rounded-full border border-[#10B981]/50 bg-slate-950/80 px-2.5 py-0.5 font-[Montserrat] text-[10px] font-bold tracking-wider text-[#10B981] backdrop-blur-sm">
            FLAGSHIP
          </span>
        )}

        <div
          className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full"
          style={{
            backgroundColor: project.color || "#FFD700",
            boxShadow: `0 0 10px ${project.color || "#FFD700"}`,
          }}
        />
      </div>

      {/* Info Container */}
      <div className="flex flex-1 flex-col p-5">
        <p className="truncate font-[Montserrat] text-[10px] font-semibold tracking-[0.24em] text-[#10B981] uppercase">
          {project.tagline}
        </p>
        <h3 className="mt-1 line-clamp-1 font-[Montserrat] text-lg font-bold text-[#FFD700] transition group-hover:text-[#FFE033]">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-300">
          {project.description}
        </p>

        {/* Tech badges with SVGs */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {visibleTech.map((t) => (
            <TechBadge key={t} name={t} size="xs" />
          ))}
          {extraCount > 0 && (
            <span className="rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 px-2 py-0.5 font-[Montserrat] text-[10px] font-bold text-[#FFD700]">
              +{extraCount}
            </span>
          )}
        </div>

        <div className="flex-1" />

        {/* Action Buttons */}
        <div className="mt-5 flex items-center gap-2 pt-3 border-t border-slate-800/80">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
            className="flex-1 rounded-lg border border-slate-700 bg-slate-800/60 py-2 text-center font-[Montserrat] text-[10px] font-bold tracking-wider text-slate-200 transition hover:bg-slate-700 hover:text-white"
          >
            CASE STUDY
          </button>
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg border border-[#FFD700]/70 bg-transparent px-3 py-2 text-center font-[Montserrat] text-[10px] font-bold tracking-wider text-[#FFD700] transition hover:bg-[#FFD700] hover:text-black"
              title="GitHub Code"
            >
              CODE
            </a>
          ) : project.isPrivate ? (
            <span
              className="rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-2 text-center font-[Montserrat] text-[10px] font-medium tracking-wider text-slate-400"
              title="Private Client Codebase"
            >
              CLIENT
            </span>
          ) : null}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg bg-[#10B981] px-3 py-2 text-center font-[Montserrat] text-[10px] font-bold tracking-wider text-black transition hover:bg-white"
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
  { id: "all", label: "All Projects" },
  { id: "featured", label: "Featured Systems" },
  { id: "backend", label: "Fintech & Backend" },
  { id: "fullstack", label: "Full-Stack & Systems" },
  { id: "ai", label: "AI & Real-Time" },
  { id: "frontend", label: "Frontend & UI" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selected, setSelected] = useState(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === "featured") return p.featured;
    if (activeTab === "all") return true;
    if (activeTab === "backend") return p.category === "Backend & APIs" || p.category === "Fintech & Backend";
    if (activeTab === "fullstack") return p.category === "Full-Stack & Systems";
    if (activeTab === "ai") return p.category === "AI & Real-Time" || p.category === "Real-Time & Distributed";
    if (activeTab === "frontend") return p.category === "Frontend & UI";
    return true;
  });

  return (
    <>
      <section id="projects" className="relative bg-black px-6 py-28 border-t border-zinc-900">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="font-[Montserrat] text-xs font-semibold tracking-[0.28em] text-[#10B981]">
                  03. ENGINEERING PORTFOLIO
                </p>
                <h2 className="mt-2.5 font-[Montserrat] text-4xl font-extrabold tracking-tight text-[#FFD700] sm:text-5xl">
                  Featured Work &amp; Case Studies
                </h2>
                <p className="mt-3.5 max-w-2xl text-base leading-relaxed text-slate-300">
                  Production systems built with TypeScript, Node.js, PostgreSQL, payment gateways, and real-time architectures.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-lg px-4 py-2 font-[Montserrat] text-xs font-semibold tracking-wider transition ${
                      activeTab === tab.id
                        ? "bg-[#FFD700] text-black font-bold shadow-md shadow-[#FFD700]/25"
                        : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-[#FFD700]/40 hover:text-white"
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
