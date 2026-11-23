import { useState } from "react";
import FadeIn from "./FadeIn";
import { CONTACT_LINKS } from "../data/portfolioData";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formValues, setFormValues] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const directLinks = CONTACT_LINKS.filter(
    (item) => item.label !== "GitHub" && item.label !== "LinkedIn"
  );
  const socialLinks = CONTACT_LINKS.filter(
    (item) => item.label === "GitHub" || item.label === "LinkedIn"
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const name = formValues.name.trim();
    const email = formValues.email.trim();
    const subject = formValues.subject.trim() || `Portfolio Message from ${name}`;
    const message = formValues.message.trim();

    try {
      // Attempt sending via Web3Forms API
      const accessKey =
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "e4d2bfb2-6db7-44c1-a831-27d1a2fcfe56";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          subject: subject,
          message: message,
          from_name: `${name} (via Portfolio)`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully. I will get back to you shortly.");
        setFormValues(INITIAL_FORM);
      } else {
        throw new Error(data.message || "Failed to deliver message.");
      }
    } catch (err) {
      console.warn("API delivery encountered an issue, offering direct client fallback:", err);
      setStatus("error");
      setStatusMessage("Could not deliver via API. You can still send your message directly via email below:");
    }
  };

  const fallbackMailto = () => {
    const name = formValues.name.trim() || "Visitor";
    const email = formValues.email.trim();
    const subject = formValues.subject.trim() || `Portfolio message from ${name}`;
    const message = formValues.message.trim();
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:josekabz00@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-[#050816] px-6 py-28">
      <div className="mx-auto w-full max-w-6xl text-center">
        <FadeIn>
          <p className="font-[Montserrat] text-xs tracking-[0.32em] text-[#00FF7F]">05. CONTACT</p>
          <h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold text-[#FFD700]">
            Let&apos;s Build Something Dependable
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
            I am currently open to junior software engineer roles, backend development opportunities, and impactful full-stack projects.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* Contact Channels */}
          <FadeIn delay={0.2} className="text-left">
            <div className="space-y-3">
              {directLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  download={item.download || undefined}
                  target={item.href.startsWith("http") || item.download ? "_blank" : undefined}
                  rel={item.href.startsWith("http") || item.download ? "noreferrer" : undefined}
                  className={`flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 transition hover:-translate-y-0.5 ${
                    item.isResume
                      ? "border-[#00FF7F]/50 bg-[#00FF7F]/10 hover:border-[#00FF7F] hover:bg-[#00FF7F]/15"
                      : "border-white/10 bg-white/5 hover:border-[#00FF7F]/50"
                  }`}
                >
                  <div>
                    <p className="font-[Montserrat] text-xs tracking-[0.16em] text-[#00FF7F]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/90">{item.value}</p>
                  </div>
                  <span
                    className={`font-[Montserrat] text-xs font-semibold ${
                      item.isResume ? "text-[#00FF7F]" : "text-white/60"
                    }`}
                  >
                    {item.download ? "Download ↗" : "Open ↗"}
                  </span>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="font-[Montserrat] text-xs tracking-[0.16em] text-[#FFD700]">PROFILES</p>
              <div className="mt-3 flex items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-black/30 text-white transition hover:-translate-y-0.5 hover:border-[#FFD700] hover:text-[#FFD700]"
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

          {/* Submission Form */}
          <FadeIn delay={0.3}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-[Montserrat] text-xs tracking-[0.2em] text-[#00FF7F]">DIRECT INQUIRY</p>
                  <h3 className="mt-1 font-[Montserrat] text-2xl font-bold text-[#FFD700]">Send a Message</h3>
                </div>
                <span className="rounded-full border border-[#00FF7F]/30 bg-black/30 px-3 py-1 font-[Montserrat] text-[11px] tracking-[0.18em] text-[#00FF7F]">
                  FAST RESPONSE
                </span>
              </div>

              {status === "success" ? (
                <div className="my-8 rounded-2xl border border-[#00FF7F]/40 bg-[#00FF7F]/10 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#00FF7F] text-black text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="mt-4 font-[Montserrat] text-xl font-bold text-[#FFD700]">Message Received!</h4>
                  <p className="mt-2 text-sm text-white/90">{statusMessage}</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-full border border-white/20 bg-black/40 px-5 py-2 font-[Montserrat] text-xs font-semibold tracking-wider text-white transition hover:bg-white/10"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="font-[Montserrat] text-xs tracking-[0.16em] text-white/65">NAME</span>
                      <input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        required
                        disabled={status === "loading"}
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#00FF7F] focus:outline-none disabled:opacity-50"
                        placeholder="Your name or company"
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="font-[Montserrat] text-xs tracking-[0.16em] text-white/65">EMAIL</span>
                      <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                        disabled={status === "loading"}
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#00FF7F] focus:outline-none disabled:opacity-50"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <label className="mt-4 block space-y-2">
                    <span className="font-[Montserrat] text-xs tracking-[0.16em] text-white/65">SUBJECT</span>
                    <input
                      type="text"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#00FF7F] focus:outline-none disabled:opacity-50"
                      placeholder="Role inquiry, contract work, or collaboration"
                    />
                  </label>

                  <label className="mt-4 block space-y-2">
                    <span className="font-[Montserrat] text-xs tracking-[0.16em] text-white/65">MESSAGE</span>
                    <textarea
                      name="message"
                      value={formValues.message}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      rows="5"
                      className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#00FF7F] focus:outline-none disabled:opacity-50"
                      placeholder="Describe what you are looking for or the role you are hiring for."
                    />
                  </label>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-6 py-3 font-[Montserrat] text-xs font-bold tracking-[0.18em] text-black transition hover:bg-[#00FF7F] disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="h-3 w-3 animate-spin rounded-full border-2 border-black border-t-transparent" />
                          SENDING...
                        </>
                      ) : (
                        "SEND MESSAGE"
                      )}
                    </button>

                    <span className="text-[11px] text-white/50">
                      Direct inbox &bull; josekabz00@gmail.com
                    </span>
                  </div>

                  {status === "error" && (
                    <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs text-red-200">
                      <p>{statusMessage}</p>
                      <button
                        type="button"
                        onClick={fallbackMailto}
                        className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-red-400 bg-red-400/20 px-3 py-1.5 font-[Montserrat] text-xs font-bold text-white transition hover:bg-red-400/30"
                      >
                        ✉️ Open in Default Mail App
                      </button>
                    </div>
                  )}
                </>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
