import { CONTACT_LINKS, NAV_LINKS } from "../data/portfolioData";

const SERVICES = [
  "Software Development",
  "Backend API Development",
  "Database Architecture",
  "Technical Consulting",
];

export default function Footer() {
  const email = CONTACT_LINKS.find((item) => item.label === "Email");
  const phone = CONTACT_LINKS.find((item) => item.label === "Phone");
  const whatsapp = CONTACT_LINKS.find((item) => item.label === "WhatsApp");
  const socials = CONTACT_LINKS.filter(
    (item) => item.label === "GitHub" || item.label === "LinkedIn" || item.label === "WhatsApp",
  );

  return (
    <footer className="border-t border-slate-200 bg-slate-100 px-6 py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-[Syne] text-2xl font-bold text-slate-900 dark:text-slate-100">Joseph Ndungu</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Full-Stack Developer and Database Administrator focused on building practical digital products and scalable systems.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-sky-700 dark:text-sky-300">QUICK LINKS</p>
          <div className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-sm text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-sky-700 dark:text-sky-300">SERVICES</p>
          <div className="mt-4 space-y-2">
            {SERVICES.map((item) => (
              <p key={item} className="text-sm text-slate-600 dark:text-slate-300">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-sky-700 dark:text-sky-300">CONTACT INFO</p>
          <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {email && (
              <a href={email.href} className="block transition hover:text-sky-600 dark:hover:text-sky-300">
                {email.value}
              </a>
            )}
            {phone && (
              <a href={phone.href} className="block transition hover:text-sky-600 dark:hover:text-sky-300">
                {phone.value}
              </a>
            )}
            {whatsapp && (
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-sky-600 dark:hover:text-sky-300"
              >
                WhatsApp: {whatsapp.value}
              </a>
            )}
            <p>Nairobi, Kenya</p>
          </div>

          <div className="mt-4 flex items-center gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                title={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
              >
                {item.label === "GitHub" ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.66-.22.66-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.88 1.55 2.32 1.1 2.88.84.09-.66.34-1.1.62-1.35-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.33 9.33 0 0 1 12 6.87c.85 0 1.72.12 2.52.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.41.21 2.45.11 2.71.64.72 1.03 1.64 1.03 2.76 0 3.94-2.33 4.81-4.56 5.06.36.31.67.93.67 1.87 0 1.35-.01 2.44-.01 2.77 0 .27.17.6.67.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2z" />
                  </svg>
                ) : item.label === "LinkedIn" ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M6.94 8.5H3.56v11h3.38v-11zM5.25 3C4.12 3 3.2 3.94 3.2 5.1c0 1.14.9 2.06 2.03 2.06h.02c1.15 0 2.04-.92 2.04-2.06C7.29 3.94 6.4 3 5.26 3h-.01zM20.8 13.2c0-3.31-1.75-4.84-4.09-4.84-1.89 0-2.73 1.05-3.2 1.79V8.5h-3.38c.05 1.09 0 11 0 11h3.38v-6.14c0-.33.02-.66.12-.9.26-.66.85-1.34 1.84-1.34 1.3 0 1.82 1 1.82 2.46v5.92h3.38V13.2z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.84 11.84 0 0 0 12.07.01C5.5.01.15 5.34.15 11.91c0 2.1.55 4.16 1.6 5.97L.01 24l6.3-1.65a11.93 11.93 0 0 0 5.75 1.46h.01c6.57 0 11.9-5.34 11.9-11.91 0-3.17-1.24-6.15-3.45-8.42zM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.88 9.88 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7 2.9a9.84 9.84 0 0 1 2.91 7.01c0 5.48-4.45 9.93-9.93 9.93zm5.44-7.42c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.46-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.23-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.53.07-.8.38-.27.3-1.03 1.01-1.03 2.47 0 1.45 1.05 2.85 1.2 3.05.15.2 2.07 3.16 5.03 4.43.7.3 1.25.48 1.67.62.7.22 1.33.19 1.83.11.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.27-.2-.57-.35z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200 pt-6 text-center font-mono text-xs tracking-[0.16em] text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} JOSEPH NDUNGU. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
