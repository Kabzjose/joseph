import FadeIn from "./FadeIn";
import { EXPERIENCE, CERTIFICATIONS, RESUME_PATH } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#080C15] px-6 py-28 border-t border-slate-900">
      <div className="mx-auto w-full max-w-4xl">
        <FadeIn>
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-[Montserrat] text-xs font-semibold tracking-[0.28em] text-[#10B981]">
                04. CAREER &amp; EDUCATION
              </p>
              <h2 className="mt-2.5 font-[Montserrat] text-4xl font-extrabold tracking-tight text-[#FFD700] sm:text-5xl">
                Experience &amp; Background
              </h2>
            </div>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              download="Joseph_Ndungu_CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-[#FFD700]/50 bg-[#FFD700]/10 px-5 py-2.5 font-[Montserrat] text-xs font-bold tracking-wider text-[#FFD700] transition hover:bg-[#FFD700] hover:text-black w-fit"
            >
              DOWNLOAD RESUME PDF ↗
            </a>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#FFD700] via-[#10B981] to-transparent" />

          {EXPERIENCE.map((item, index) => (
            <FadeIn key={item.role} delay={index * 0.1}>
              <article className="relative mb-10 pl-12 text-left">
                <span
                  className={`absolute left-[9px] top-6 h-3.5 w-3.5 rounded-full border-2 bg-slate-950 ${
                    item.type === "education"
                      ? "border-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                      : "border-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.5)]"
                  }`}
                />
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:border-[#FFD700]/40 hover:bg-slate-900/70">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-[Montserrat] text-xl font-bold text-[#FFD700]">{item.role}</h3>
                    <span className="rounded-full border border-slate-700/80 bg-slate-800/60 px-3 py-1 font-[Montserrat] text-xs font-semibold tracking-wider text-[#10B981]">
                      {item.duration}
                    </span>
                  </div>
                  <p className="mt-1 font-[Montserrat] text-xs font-medium tracking-[0.12em] text-slate-300 uppercase">
                    {item.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.desc}</p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-3">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-slate-300">
                          <span className="text-[#10B981]">✦</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Certifications & Additional Development */}
        <FadeIn delay={0.25}>
          <div className="mt-14 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-8 text-left backdrop-blur-sm">
            <div className="mb-6">
              <p className="font-[Montserrat] text-xs font-semibold tracking-[0.24em] text-[#10B981] uppercase">
                CREDENTIALS
              </p>
              <h3 className="mt-1 font-[Montserrat] text-2xl font-bold text-[#FFD700]">
                Certifications &amp; Development
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 transition hover:border-[#FFD700]/40"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block rounded-full bg-[#10B981]/15 border border-[#10B981]/30 px-2.5 py-0.5 font-[Montserrat] text-[10px] font-bold text-[#10B981]">
                        {cert.status}
                      </span>
                      {cert.verifyUrl && (
                        <span className="text-[10px] font-medium text-[#10B981]">Official ↗</span>
                      )}
                    </div>
                    <h4 className="mt-2.5 font-[Montserrat] text-sm font-bold text-white">
                      {cert.title}
                    </h4>
                    <p className="mt-1 font-[Montserrat] text-[11px] text-slate-400">{cert.issuer}</p>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-300">{cert.desc}</p>
                  </div>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-[#10B981]/40 bg-[#10B981]/10 px-3 py-1.5 font-[Montserrat] text-[11px] font-semibold text-[#10B981] transition hover:bg-[#10B981] hover:text-slate-950 w-fit"
                    >
                      <span>Verify Credential</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
