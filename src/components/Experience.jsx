import FadeIn from "./FadeIn";
import { EXPERIENCE, CERTIFICATIONS, RESUME_PATH } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#050816] px-6 py-28">
      <div className="mx-auto w-full max-w-4xl">
        <FadeIn>
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-[Montserrat] text-xs tracking-[0.32em] text-[#00FF7F]">04. CAREER &amp; EDUCATION</p>
              <h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold text-[#FFD700]">Experience &amp; Background</h2>
            </div>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              download="Joseph_Ndungu_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[#00FF7F] bg-[#00FF7F]/10 px-5 py-2 font-[Montserrat] text-xs font-bold tracking-wider text-[#00FF7F] transition hover:bg-[#00FF7F] hover:text-black w-fit"
            >
              DOWNLOAD RESUME PDF ↗
            </a>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#00FF7F] via-[#FFD700] to-transparent" />

          {EXPERIENCE.map((item, index) => (
            <FadeIn key={item.role} delay={index * 0.1}>
              <article className="relative mb-10 pl-12 text-left">
                <span
                  className={`absolute left-[9px] top-6 h-3.5 w-3.5 rounded-full border-2 ${
                    item.type === "education"
                      ? "border-[#FFD700] bg-[#FFD700]/30"
                      : "border-[#00FF7F] bg-[#00FF7F]/30"
                  }`}
                />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:border-[#FFD700]/40">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-[Montserrat] text-xl font-bold text-[#FFD700]">{item.role}</h3>
                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 font-[Montserrat] text-xs tracking-wider text-[#00FF7F]">
                      {item.duration}
                    </span>
                  </div>
                  <p className="mt-1 font-[Montserrat] text-xs tracking-[0.12em] text-white/60 uppercase">
                    {item.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{item.desc}</p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2 border-t border-white/5 pt-3">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/75">
                          <span className="text-[#00FF7F]">✦</span>
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
        <FadeIn delay={0.3}>
          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 text-left">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="font-[Montserrat] text-xs tracking-[0.24em] text-[#00FF7F]">CREDENTIALS</p>
                <h3 className="mt-1 font-[Montserrat] text-2xl font-bold text-[#FFD700]">
                  Certifications &amp; Development
                </h3>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-[#00FF7F]/40"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block rounded-full bg-[#00FF7F]/20 px-2.5 py-0.5 font-[Montserrat] text-[10px] font-bold text-[#00FF7F]">
                        {cert.status}
                      </span>
                      {cert.verifyUrl && (
                        <span className="text-[10px] text-[#00FF7F]">Official ↗</span>
                      )}
                    </div>
                    <h4 className="mt-2 font-[Montserrat] text-sm font-bold text-white">
                      {cert.title}
                    </h4>
                    <p className="mt-1 font-[Montserrat] text-[11px] text-white/50">{cert.issuer}</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">{cert.desc}</p>
                  </div>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-[#00FF7F]/40 bg-[#00FF7F]/10 px-3 py-1.5 font-[Montserrat] text-[11px] font-bold text-[#00FF7F] transition hover:bg-[#00FF7F] hover:text-black w-fit"
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
