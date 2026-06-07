import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { NAV_LINKS } from "./data/portfolioData";

export default function App() {
  const [activeNav, setActiveNav] = useState("ABOUT ME");

  const cursorRef = useRef(null);

  useEffect(() => {
    // don't enable on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return;

    let el = cursorRef.current || document.getElementById("cursor-glow");
    let created = false;

    if (!el) {
      el = document.createElement("div");
      el.id = "cursor-glow";
      document.body.appendChild(el);
      created = true;
    }

    // remember ref
    cursorRef.current = el;

    const onMove = (e) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (created && el && el.parentNode) el.parentNode.removeChild(el);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_LINKS.map((link) => ({
        name: link.label,
        element: document.getElementById(link.id),
      }));

      for (const { name, element } of sections.reverse()) {
        if (element && window.scrollY >= element.offsetTop - 120) {
          setActiveNav(name);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-white transition-colors">
      <div id="cursor-glow" ref={cursorRef} />
      <div className="relative z-10">
        <Navbar active={activeNav} setActive={setActiveNav} />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
