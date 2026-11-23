import { useEffect, useState } from "react";
import image from "../assets/image.jpeg";
import { RESUME_PATH } from "../data/portfolioData";

const TITLES = [
  "Software Developer",
  "Backend & API Integrations",
  "Full-Stack Engineer",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;

    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 75);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [deleting, typed, titleIndex]);

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,127,0.14),transparent_28%),linear-gradient(160deg,#050816_0%,#0a0f1f_45%,#050816_100%)] px-6 pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FFD700]/40 bg-white/5 px-4 py-1 font-[Montserrat] text-[11px] tracking-[0.28em] text-white/80 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#00FF7F]" />
              OPEN TO WORK
            </span>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 font-[Montserrat] text-[10px] tracking-[0.16em] text-white/60">
              NAIROBI, KENYA • REMOTE FRIENDLY
            </span>
          </div>

          <p className="mt-6 font-[Montserrat] text-xs uppercase tracking-[0.34em] text-[#00FF7F]">
            01. ABOUT ME &bull; HELLO, I&apos;M
          </p>

          <h1 className="mt-2 font-[Montserrat] text-5xl font-extrabold leading-[0.95] text-[#FFD700] sm:text-6xl md:text-7xl">
            Joseph <span className="text-white">Ndungu</span>
          </h1>

          <p className="mt-4 min-h-8 font-[Montserrat] text-sm tracking-[0.22em] text-[#00FF7F]">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-[#00FF7F]" />
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-white/85">
            Software Engineer specializing in backend APIs, relational data modeling, payment integrations (M-Pesa Daraja &amp; Stripe), and AI-enabled full-stack systems built for reliability and scale.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-[#FFD700] px-6 py-3 font-[Montserrat] text-xs font-bold tracking-[0.18em] text-black transition hover:-translate-y-0.5 hover:bg-[#00FF7F]"
            >
              EXPLORE MY WORK
            </a>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              download="Joseph_Ndungu_CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-[#00FF7F] bg-[#00FF7F]/10 px-6 py-3 font-[Montserrat] text-xs font-bold tracking-[0.18em] text-[#00FF7F] transition hover:-translate-y-0.5 hover:bg-[#00FF7F] hover:text-black"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              DOWNLOAD CV / RESUME
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-[Montserrat] text-xs font-bold tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:border-[#00FF7F] hover:text-[#00FF7F]"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#FFD700]/20 to-[#00FF7F]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
            <img
              src={image}
              alt="Joseph Ndungu profile"
              className="h-[420px] w-full rounded-[1.4rem] object-cover"
            />
            <div className="mt-3 rounded-xl border border-white/10 bg-black/40 p-3">
              <p className="font-[Montserrat] text-[11px] tracking-[0.24em] text-[#00FF7F]">PRIMARY FOCUS</p>
              <p className="mt-1 font-[Montserrat] text-sm text-white">Backend Systems, APIs &amp; Full-Stack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
