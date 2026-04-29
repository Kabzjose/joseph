import { useEffect, useState } from "react";
import image from "../assets/image.jpeg";

const TITLES = ["Full-Stack Developer", "Database Administrator", "UI/UX Designer"];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;

    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 80);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [deleting, typed, titleIndex]);

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_8%_12%,rgba(16,185,129,0.18),transparent_36%),radial-gradient(circle_at_88%_72%,rgba(14,165,233,0.2),transparent_32%),linear-gradient(160deg,#dfe9f5_0%,#e9eef5_45%,#dde5f2_100%)] px-6 pt-24 dark:bg-[radial-gradient(circle_at_8%_12%,rgba(16,185,129,0.15),transparent_35%),radial-gradient(circle_at_88%_72%,rgba(59,130,246,0.18),transparent_30%),linear-gradient(160deg,#020617_0%,#0b1327_45%,#111827_100%)]"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/80 bg-slate-100 px-4 py-1 font-mono text-[11px] tracking-[0.24em] text-emerald-800 shadow-sm dark:border-emerald-300/20 dark:bg-emerald-500/10 dark:text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            OPEN TO WORK
          </span>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.28em] text-sky-800 dark:text-sky-300">Hi, I&apos;m</p>

          <h1 className="mt-2 font-[Syne] text-5xl font-extrabold leading-[0.95] text-slate-900 sm:text-6xl md:text-7xl dark:text-slate-100">
            Joseph <span className="text-emerald-600 dark:text-emerald-400">Ndungu</span>
          </h1>

          <p className="mt-4 min-h-8 font-mono text-sm tracking-wider text-sky-800 dark:text-sky-300">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-[#22c55e]" />
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-800 dark:text-slate-300">
            Specializing in scalable web systems, clean interfaces, AI integration, and database-backed applications that help businesses launch, grow, and operate smoothly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-emerald-600 px-6 py-3 font-mono text-xs tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              EXPLORE MY WORK
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-emerald-600/50 bg-slate-100 px-6 py-3 font-mono text-xs tracking-[0.14em] text-emerald-800 transition hover:-translate-y-0.5 hover:border-emerald-600 dark:border-emerald-300/40 dark:bg-slate-900/50 dark:text-emerald-200"
            >
              GET IN TOUCH
            </a>
          </div>

          <div className="mt-8 grid max-w-lg grid-cols-2 gap-3 text-xs sm:grid-cols-3">
            <div className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/70">
              <p className="font-mono tracking-wide text-slate-600 dark:text-slate-400">Focus</p>
              <p className="mt-1 text-slate-800 dark:text-slate-200">Full-Stack</p>
            </div>
            <div className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/70">
              <p className="font-mono tracking-wide text-slate-600 dark:text-slate-400">Stack</p>
              <p className="mt-1 text-slate-800 dark:text-slate-200">React + Node</p>
            </div>
            <div className="col-span-2 rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 sm:col-span-1 dark:border-slate-700 dark:bg-slate-900/70">
              <p className="font-mono tracking-wide text-slate-600 dark:text-slate-400">Location</p>
              <p className="mt-1 text-slate-800 dark:text-slate-200">Nairobi, KE</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-sky-500/30 to-emerald-500/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-3 shadow-2xl dark:border-slate-700 dark:bg-slate-900/70">
            <img
              src={image}
              alt="Joseph Ndungu profile"
              className="h-[420px] w-full rounded-[1.4rem] object-cover"
            />
            <div className="mt-3 rounded-xl border border-sky-300 bg-slate-100 p-3 dark:border-slate-700 dark:bg-slate-900/80">
              <p className="font-mono text-[11px] tracking-[0.18em] text-sky-800 dark:text-sky-300">CURRENT ROLE</p>
              <p className="mt-1 text-sm text-slate-800 dark:text-slate-300">Full-Stack Developer & Database Admin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
