import { useEffect, useMemo, useState } from 'react';
import heroImage from '../../../assets/hero.png';
import { whatsappLink } from '../../i18n/landing.js';

export default function HeroSection({ t }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waHref = useMemo(() => whatsappLink(t.whatsapp.connect), [t.whatsapp.connect]);

  return (
    <section className="hero-section overflow-hidden" aria-label="Hero">
      <div className="hero-bokeh" style={{ transform: `translateY(${offset * 0.08}px)` }} />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-16 pt-14 md:px-6 lg:grid-cols-2 lg:pb-24 lg:pt-20">
        <div data-reveal className="space-y-7">
          <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/80">
            {t.common.logo}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="max-w-2xl text-base text-white/75 md:text-lg">{t.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <a href={waHref} target="_blank" rel="noreferrer" className="btn-primary-lg">
              {t.common.createInvite}
            </a>
            <a href="/demo" className="btn-secondary-lg">
              {t.common.viewDemo}
            </a>
          </div>
          <ul className="flex flex-wrap gap-2">
            {t.hero.badges.map((badge) => (
              <li key={badge} className="chip">
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="relative">
          <div className="mockup-shell">
            <img
              src={heroImage}
              alt="Neketime invitation preview"
              loading="eager"
              className="h-[520px] w-full rounded-[1.8rem] object-cover object-center"
            />
          </div>
          <div className="pointer-events-none absolute -left-8 bottom-8 rounded-2xl border border-white/30 bg-black/40 px-4 py-3 text-xs text-white/80 backdrop-blur">
            {t.common.viewDemo}
          </div>
        </div>
      </div>
    </section>
  );
}
