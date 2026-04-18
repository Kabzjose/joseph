import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar({ active, setActive, darkMode, setDarkMode }) {
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
          ? "border-b border-slate-300 bg-slate-100/95 shadow-sm backdrop-blur-md dark:border-blue-200/10 dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => scrollTo("About")}
          className="font-mono text-base font-bold tracking-[0.24em] text-blue-700 transition hover:text-blue-600 dark:text-blue-300"
        >
          JN.dev
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`border-b-2 pb-1 font-mono text-xs tracking-[0.18em] uppercase transition ${
                active === link
                  ? "border-blue-600 text-blue-600 dark:border-blue-300 dark:text-blue-300"
                  : "border-transparent text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-lg border border-slate-400 bg-slate-100 px-3 py-1.5 font-mono text-xs tracking-wide text-slate-800 transition hover:border-slate-500 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle light and dark mode"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-md border border-slate-400 bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle light and dark mode"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md border border-slate-400 bg-slate-100 p-2 text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? "X" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-300 bg-slate-100/95 px-4 py-3 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`block w-full border-b border-slate-200 py-3 text-left font-mono text-xs tracking-[0.16em] uppercase dark:border-slate-800 ${
                active === link ? "text-blue-700 dark:text-blue-300" : "text-slate-700 dark:text-slate-300"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
