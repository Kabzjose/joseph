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
      className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,127,0.14),transparent_28%),linear-gradient(160deg,#050816_0%,#0a0f1f_45%,#050816_100%)] px-6 pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FFD700]/40 bg-white/5 px-4 py-1 font-[Montserrat] text-[11px] tracking-[0.28em] text-white/80 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#00FF7F]" />
            OPEN TO WORK
          </span>

          <p className="mt-6 font-[Montserrat] text-xs uppercase tracking-[0.34em] text-[#00FF7F]">HELLO, I&apos;M</p>

          <h1 className="mt-2 font-[Montserrat] text-5xl font-extrabold leading-[0.95] text-[#FFD700] sm:text-6xl md:text-7xl">
            Joseph <span className="text-white">Ndungu</span>
          </h1>

          <p className="mt-4 min-h-8 font-[Montserrat] text-sm tracking-[0.22em] text-[#00FF7F]">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-[#00FF7F]" />
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-white/85">
            Specializing in scalable web systems, clean interfaces, AI integration, and database-backed applications that help businesses launch, grow, and operate smoothly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-[#FFD700] px-6 py-3 font-[Montserrat] text-xs font-bold tracking-[0.18em] text-black transition hover:-translate-y-0.5 hover:bg-[#00FF7F]"
            >
              EXPLORE MY WORK
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
              <p className="font-[Montserrat] text-[11px] tracking-[0.24em] text-[#00FF7F]">CURRENT ROLE</p>
              <p className="mt-1 font-[Montserrat] text-sm text-white">Full-Stack Developer & Database Admin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
