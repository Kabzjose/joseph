import FadeIn from "./FadeIn";
import { CONTACT_LINKS } from "../data/portfolioData";

export default function Contact() {
  const directLinks = CONTACT_LINKS.filter(
    (item) => item.label !== "GitHub" && item.label !== "LinkedIn",
  );
  const socialLinks = CONTACT_LINKS.filter(
    (item) => item.label === "GitHub" || item.label === "LinkedIn",
  );

  return (
    <section id="contact" className="bg-gradient-to-b from-sky-100 to-slate-50 px-6 py-28 dark:from-slate-950 dark:to-slate-950">
      <div className="mx-auto w-full max-w-3xl text-center">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.32em] text-sky-800 dark:text-sky-300">05. CONTACT</p>
          <h2 className="mt-3 font-[Syne] text-4xl font-extrabold text-slate-900 dark:text-slate-100">Ready To Start Your Next Project?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-800 dark:text-slate-300">
            Let&apos;s collaborate to build reliable web applications and systems that deliver real value for your users and business goals.
          </p>
          <a
            href="mailto:josekabz00@gmail.com"
            className="mt-7 inline-block rounded-lg bg-sky-600 px-6 py-3 font-mono text-xs tracking-[0.16em] text-white transition hover:bg-sky-500"
          >
            LET&apos;S WORK TOGETHER
          </a>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10">
          <div className="space-y-3 text-left">
            {directLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between gap-4 rounded-xl border border-slate-300 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <p className="font-mono text-xs tracking-[0.16em] text-blue-800 dark:text-blue-300">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-800 dark:text-slate-300">{item.value}</p>
                </div>
                <span className="font-mono text-xs text-slate-600">Open</span>
              </a>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-slate-300 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="font-mono text-xs tracking-[0.16em] text-blue-800 dark:text-blue-300">SOCIALS</p>
            <div className="mt-3 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-400 bg-slate-50 text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
                >
                  {item.label === "GitHub" ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.66-.22.66-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.88 1.55 2.32 1.1 2.88.84.09-.66.34-1.1.62-1.35-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.33 9.33 0 0 1 12 6.87c.85 0 1.72.12 2.52.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.41.21 2.45.11 2.71.64.72 1.03 1.64 1.03 2.76 0 3.94-2.33 4.81-4.56 5.06.36.31.67.93.67 1.87 0 1.35-.01 2.44-.01 2.77 0 .27.17.6.67.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M6.94 8.5H3.56v11h3.38v-11zM5.25 3C4.12 3 3.2 3.94 3.2 5.1c0 1.14.9 2.06 2.03 2.06h.02c1.15 0 2.04-.92 2.04-2.06C7.29 3.94 6.4 3 5.26 3h-.01zM20.8 13.2c0-3.31-1.75-4.84-4.09-4.84-1.89 0-2.73 1.05-3.2 1.79V8.5h-3.38c.05 1.09 0 11 0 11h3.38v-6.14c0-.33.02-.66.12-.9.26-.66.85-1.34 1.84-1.34 1.3 0 1.82 1 1.82 2.46v5.92h3.38V13.2z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
