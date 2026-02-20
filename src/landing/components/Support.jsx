function getWaLink(text) {
  return `https://wa.me/77066549004?text=${encodeURIComponent(text)}`;
}

export default function Support({ t }) {
  return (
    <section className="section-space">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div data-reveal className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{t.supportTitle}</h2>
          <p className="mt-2 text-slate-600">{t.supportSubtitle}</p>
          <a
            href={getWaLink(t.whatsappText)}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          >
            {t.supportCta}
          </a>
        </div>
      </div>
    </section>
  );
}
