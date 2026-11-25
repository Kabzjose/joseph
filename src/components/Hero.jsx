import { useEffect, useState } from "react";
import image from "../assets/image.jpeg";
import { RESUME_PATH } from "../data/portfolioData";

const TITLES = [
  "Backend & API Integrations",
  "Full-Stack Software Engineer",
  "Distributed Systems & Data",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;

    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 70);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1700);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 30);
    } else {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [deleting, typed, titleIndex]);

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-black bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(255,215,0,0.14),transparent_70%),radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(16,185,129,0.10),transparent_60%)] px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FFD700]/40 bg-[#FFD700]/10 px-3.5 py-1 font-[Montserrat] text-[11px] font-semibold tracking-wider text-[#FFD700] shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
              </span>
              OPEN TO WORK
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 font-[Montserrat] text-[10px] font-medium tracking-wider text-slate-300 backdrop-blur-sm">
              NAIROBI &bull; REMOTE FRIENDLY
            </span>
          </div>

          <p className="mt-7 font-[Montserrat] text-xs font-semibold uppercase tracking-[0.28em] text-[#10B981]">
            01. ABOUT ME &bull; HELLO, I&apos;M
          </p>

          <h1 className="mt-2.5 font-[Montserrat] text-5xl font-extrabold leading-[1.05] tracking-tight text-[#FFD700] sm:text-6xl md:text-7xl">
            Joseph{" "}
            <span className="text-white">
              Ndungu
            </span>
          </h1>

          {/* Typing dynamic subtitle */}
          <p className="mt-4 min-h-8 font-[Montserrat] text-sm font-semibold tracking-[0.16em] text-[#10B981] sm:text-base">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-[#10B981]" />
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
            Software Engineer specializing in backend APIs, relational data modeling, payment integrations (M-Pesa Daraja &amp; Stripe), and AI-enabled full-stack systems engineered for reliability and performance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-[#FFD700] px-6 py-3.5 font-[Montserrat] text-xs font-bold tracking-wider text-slate-950 shadow-lg shadow-[#FFD700]/25 transition hover:-translate-y-0.5 hover:bg-[#FFE033] active:translate-y-0"
            >
              EXPLORE CASE STUDIES
            </a>

            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              download="Joseph_Ndungu_CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3.5 font-[Montserrat] text-xs font-semibold tracking-wider text-slate-200 transition hover:-translate-y-0.5 hover:border-[#FFD700]/60 hover:text-[#FFD700] hover:bg-slate-800"
            >
              <svg className="h-4 w-4 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              RESUME (PDF)
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-transparent px-5 py-3.5 font-[Montserrat] text-xs font-semibold tracking-wider text-slate-300 transition hover:border-[#10B981] hover:text-[#10B981]"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-br from-[#FFD700]/20 to-[#10B981]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/70 p-3 shadow-2xl backdrop-blur-xl">
            <img
              src={image}
              alt="Joseph Ndungu profile"
              className="h-[410px] w-full rounded-[1.4rem] object-cover"
            />
            <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 p-3.5">
              <div>
                <p className="font-[Montserrat] text-[10px] font-bold tracking-[0.2em] text-[#10B981] uppercase">
                  CORE SPECIALIZATION
                </p>
                <p className="mt-0.5 font-[Montserrat] text-xs font-semibold text-slate-100">
                  Backend, APIs &amp; Data Systems
                </p>
              </div>
              <span className="rounded-lg border border-[#FFD700]/30 bg-[#FFD700]/10 px-2 py-1 text-[11px] font-bold text-[#FFD700]">
                TS &bull; SQL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
