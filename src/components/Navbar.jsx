import { useEffect, useState } from "react";
import { NAV_LINKS, RESUME_PATH } from "../data/portfolioData";

export default function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800/80 bg-[#090D16]/90 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => scrollTo("about")}
          className="group flex items-center gap-2 font-[Montserrat] text-lg font-extrabold tracking-wider text-[#FFD700] transition hover:text-[#10B981]"
        >
          <span className="h-2 w-2 rounded-full bg-[#10B981] group-hover:scale-125 transition-transform" />
          <span>Joseph Ndungu</span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`border-b-2 pb-1 font-[Montserrat] text-xs font-semibold tracking-[0.2em] uppercase transition ${
                active === link.label
                  ? "border-[#10B981] text-[#10B981]"
                  : "border-transparent text-slate-300 hover:text-[#FFD700]"
              }`}
            >
              {link.label}
            </button>
          ))}

          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noreferrer"
            download="Joseph_Ndungu_CV.pdf"
            className="rounded-lg border border-slate-700 bg-slate-900/60 px-3.5 py-1.5 font-[Montserrat] text-xs font-semibold tracking-wider text-slate-200 transition hover:border-[#FFD700] hover:text-[#FFD700] hover:bg-slate-800"
          >
            RESUME
          </a>

          <button
            onClick={() => window.open("https://github.com/Kabzjose", "_blank", "noreferrer")}
            className="rounded-lg border border-[#FFD700] bg-[#FFD700] px-4 py-1.5 font-[Montserrat] text-xs font-bold tracking-wider text-black transition hover:bg-[#FFE033]"
            aria-label="Open GitHub profile"
          >
            GITHUB ↗
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noreferrer"
            download="Joseph_Ndungu_CV.pdf"
            className="rounded-lg border border-[#FFD700]/50 bg-[#FFD700]/10 px-3 py-1 font-[Montserrat] text-[10px] font-bold text-[#FFD700]"
          >
            RESUME
          </a>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-slate-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-800 bg-[#090D16]/95 px-5 py-4 backdrop-blur-xl md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full border-b border-slate-800/60 py-3 text-left font-[Montserrat] text-xs font-semibold tracking-[0.2em] uppercase ${
                active === link.label ? "text-[#10B981]" : "text-slate-300"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              download="Joseph_Ndungu_CV.pdf"
              className="w-full rounded-xl border border-slate-700 bg-slate-900/70 py-3 text-center font-[Montserrat] text-xs font-bold tracking-wider text-slate-200"
            >
              DOWNLOAD RESUME (PDF)
            </a>
            <button
              onClick={() => window.open("https://github.com/Kabzjose", "_blank", "noreferrer")}
              className="w-full rounded-xl bg-[#FFD700] py-3 font-[Montserrat] text-xs font-bold tracking-wider text-black"
            >
              GITHUB PROFILE ↗
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
