import heroImage from '../../../assets/hero.png';

export default function Hero({ t, onCtaClick }) {
  const isKz = t.cta === 'Тойға шақыру жасау';
  const heroAlt = isKz ? 'Үйлену тойындағы жұп' : 'Свадебная пара';

  return (
    <section className="relative overflow-hidden">
      <div className="hero-blob hero-blob-a" aria-hidden="true" />
      <div className="hero-blob hero-blob-b" aria-hidden="true" />
      <div className="hero-blob hero-blob-c" aria-hidden="true" />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div data-reveal className="space-y-7">
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {t.heroTitle}
          </h1>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">{t.heroSubtitle}</p>
          <button
            type="button"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          >
            {t.cta}
          </button>
          <ul className="flex flex-wrap gap-2 pt-2">
            {t.stats.map((item) => (
              <li key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="hero-media relative mx-auto w-full max-w-[520px] transition-transform duration-300 hover:scale-[1.02]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-200/35 via-pink-200/30 to-amber-200/30 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-2.5 shadow-xl shadow-slate-900/10">
            <img
              src={heroImage}
              alt={heroAlt}
              loading="lazy"
              decoding="async"
              className="h-[420px] w-full rounded-2xl object-cover sm:h-[520px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/70 via-white/20 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
