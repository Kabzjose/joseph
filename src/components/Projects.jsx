import { useState, useEffect, useCallback } from "react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "../data/portfolioData";

/* ─── Modal ─────────────────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  // close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // close on backdrop click
  const onBackdrop = useCallback(
    (e) => { if (e.target === e.currentTarget) onClose(); },
    [onClose]
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      onClick={onBackdrop}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(5,8,22,0.82)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(145deg, #0d1629 0%, #0a1020 100%)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: "1.75rem",
          width: "100%",
          maxWidth: "760px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute", top: "16px", right: "16px", zIndex: 10,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "50%", width: "36px", height: "36px",
            color: "#fff", fontSize: "18px", lineHeight: 1,
            cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", transition: "background 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
        >
          ✕
        </button>

        {/* Image */}
        <div style={{ height: "260px", overflow: "hidden", borderRadius: "1.75rem 1.75rem 0 0", position: "relative", background: "#0a1020" }}>
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0a1020 0%, transparent 55%)" }} />
        </div>

        {/* Body */}
        <div style={{ padding: "28px 32px 32px" }}>
          {/* Title & tagline */}
          <p style={{ fontFamily: "Montserrat,sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "#00FF7F", marginBottom: "6px" }}>
            {project.tagline}
          </p>
          <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "26px", fontWeight: 800, color: "#FFD700", margin: "0 0 16px" }}>
            {project.title}
          </h2>

          {/* Description */}
          <p style={{ fontSize: "14px", lineHeight: 1.75, color: "rgba(255,255,255,0.80)", marginBottom: "24px" }}>
            {project.description}
          </p>

          {/* Features */}
          {project.features?.length > 0 && (
            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#00FF7F", marginBottom: "12px" }}>
                KEY FEATURES
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {project.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>
                    <span style={{ color: "#00FF7F", flexShrink: 0, marginTop: "2px" }}>✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech */}
          <div style={{ marginBottom: "28px" }}>
            <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#00FF7F", marginBottom: "12px" }}>
              TECHNOLOGIES
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(0,0,0,0.30)",
                    padding: "4px 12px",
                    fontFamily: "Montserrat,sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.06em",
                    color: "rgba(255,255,255,0.80)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                style={{
                  borderRadius: "999px",
                  background: "#00FF7F",
                  border: "1px solid #00FF7F",
                  padding: "10px 24px",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "#000",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#fff"}
                onMouseLeave={e => e.currentTarget.style.background = "#00FF7F"}
              >
                LIVE DEMO
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                style={{
                  borderRadius: "999px",
                  border: "1px solid #FFD700",
                  padding: "10px 24px",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "#FFD700",
                  textDecoration: "none",
                  transition: "background 0.2s, color 0.2s",
                  background: "transparent",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#FFD700"; e.currentTarget.style.color = "#000"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#FFD700"; }}
              >
                GITHUB
              </a>
            )}
            <button
              onClick={onClose}
              style={{
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "10px 24px",
                fontFamily: "Montserrat,sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.55)",
                background: "transparent",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Card ───────────────────────────────────────────────────────────────── */
function ProjectCard({ project, onOpen }) {
  const MAX_TAGS = 4;
  const visibleTech = project.tech.slice(0, MAX_TAGS);
  const extraCount = project.tech.length - MAX_TAGS;

  return (
    <article
      onClick={onOpen}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "1.25rem",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.04)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease",
        boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "rgba(0,255,127,0.35)";
        e.currentTarget.style.boxShadow = "0 18px 48px rgba(0,0,0,0.40)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.25)";
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } }}
    >
      {/* Thumbnail — fixed 16/9 ratio */}
      <div style={{ position: "relative", paddingTop: "56.25%", background: "#0a1020", overflow: "hidden" }}>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
          className="card-thumb"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,11,20,0.85) 0%, transparent 55%)" }} />

        {/* Accent dot */}
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          width: "8px", height: "8px", borderRadius: "50%",
          background: project.color || "#00FF7F",
          boxShadow: `0 0 8px ${project.color || "#00FF7F"}`,
        }} />
      </div>

      {/* Info */}
      <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "16px 18px 18px" }}>
        {/* Category */}
        <p style={{
          fontFamily: "Montserrat,sans-serif",
          fontSize: "9px",
          letterSpacing: "0.28em",
          color: "#00FF7F",
          marginBottom: "5px",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>
          {project.tagline}
        </p>

        {/* Title */}
        <h3 style={{
          fontFamily: "Montserrat,sans-serif",
          fontSize: "16px",
          fontWeight: 800,
          color: "#FFD700",
          marginBottom: "12px",
          lineHeight: 1.3,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {project.title}
        </h3>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
          {visibleTech.map((t) => (
            <span
              key={t}
              style={{
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(0,0,0,0.28)",
                padding: "3px 9px",
                fontFamily: "Montserrat,sans-serif",
                fontSize: "10px",
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              {t}
            </span>
          ))}
          {extraCount > 0 && (
            <span style={{
              borderRadius: "999px",
              border: "1px solid rgba(255,215,0,0.25)",
              background: "rgba(255,215,0,0.07)",
              padding: "3px 9px",
              fontFamily: "Montserrat,sans-serif",
              fontSize: "10px",
              letterSpacing: "0.04em",
              color: "rgba(255,215,0,0.75)",
            }}>
              +{extraCount}
            </span>
          )}
        </div>

        {/* Spacer to push buttons down */}
        <div style={{ flex: 1 }} />

        {/* Buttons row */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <button
            onClick={e => { e.stopPropagation(); onOpen(); }}
            style={{
              flex: "1 1 0",
              minWidth: 0,
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.06)",
              padding: "7px 10px",
              fontFamily: "Montserrat,sans-serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "#fff",
              cursor: "pointer",
              transition: "background 0.2s, border-color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
          >
            VIEW DETAILS
          </button>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                flex: "1 1 0",
                minWidth: 0,
                borderRadius: "999px",
                border: "1px solid #00FF7F",
                background: "#00FF7F",
                padding: "7px 10px",
                fontFamily: "Montserrat,sans-serif",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: "#000",
                textDecoration: "none",
                textAlign: "center",
                transition: "background 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#fff"}
              onMouseLeave={e => e.currentTarget.style.background = "#00FF7F"}
            >
              LIVE DEMO
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                flex: "1 1 0",
                minWidth: 0,
                borderRadius: "999px",
                border: "1px solid #FFD700",
                background: "transparent",
                padding: "7px 10px",
                fontFamily: "Montserrat,sans-serif",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: "#FFD700",
                textDecoration: "none",
                textAlign: "center",
                transition: "background 0.2s, color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#FFD700"; e.currentTarget.style.color = "#000"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#FFD700"; }}
            >
              GITHUB
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="projects" className="bg-[#070b14] px-6 py-28">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn>
            <div className="mb-14">
              <p className="font-[Montserrat] text-xs tracking-[0.32em] text-[#00FF7F]">03. PROJECTS</p>
              <h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold text-[#FFD700]">Featured Work</h2>
            </div>
          </FadeIn>

          {/* 3-col responsive grid */}
          <div
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            }}
            className="projects-grid"
          >
            {PROJECTS.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.06}>
                <ProjectCard project={project} onOpen={() => setSelected(project)} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}

      {/* Responsive breakpoints via a style tag */}
      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 560px) {
          .projects-grid { grid-template-columns: repeat(1, minmax(0, 1fr)) !important; }
        }
        .card-thumb:hover { transform: scale(1.06); }
      `}</style>
    </>
  );
}
