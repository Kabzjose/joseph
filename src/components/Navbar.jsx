import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
          ? "border-b border-white/10 bg-[#070b14]/90 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => scrollTo("about")}
          className="font-[Montserrat] text-lg font-extrabold tracking-[0.14em] text-[#FFD700] transition hover:text-[#00FF7F]"
        >
          Joseph Ndungu
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`border-b-2 pb-1 font-[Montserrat] text-xs font-semibold tracking-[0.24em] uppercase transition ${
                active === link.label
                  ? "border-[#00FF7F] text-[#00FF7F]"
                  : "border-transparent text-white/75 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => window.open("https://github.com/kabzjose", "_blank", "noreferrer")}
            className="rounded-full border border-[#FFD700] bg-[#FFD700] px-4 py-2 font-[Montserrat] text-xs font-bold tracking-[0.22em] text-black transition hover:-translate-y-0.5 hover:bg-[#00FF7F]"
            aria-label="Open GitHub profile"
          >
            GITHUB
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md border border-white/20 bg-white/5 p-2 text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? "X" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#070b14]/95 px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full border-b border-white/10 py-3 text-left font-[Montserrat] text-xs tracking-[0.2em] uppercase ${
                active === link.label ? "text-[#00FF7F]" : "text-white/80"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => window.open("https://github.com/kabzjose", "_blank", "noreferrer")}
            className="mt-3 w-full rounded-full bg-[#FFD700] px-4 py-3 font-[Montserrat] text-xs font-bold tracking-[0.22em] text-black"
          >
            GITHUB
          </button>
        </div>
      )}
    </nav>
  );
}
