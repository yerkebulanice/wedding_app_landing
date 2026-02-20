import { whatsappLink } from '../../i18n/landing.js';

export default function PricingSection({ t }) {
  const activationLink = whatsappLink(`${t.whatsapp.activate}https://neketime.kz/demo`);

  return (
    <section id="pricing" className="section-wrap scroll-mt-20" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="section-header">
          <h2 id="pricing-title">{t.pricing.title}</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article data-reveal className="pricing-card">
            <p className="text-sm uppercase tracking-[0.18em] text-white/60">{t.pricing.demoName}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{t.pricing.demoValue}</h3>
            <p className="mt-2 text-3xl font-semibold text-[#f4d29f]">{t.pricing.demoPrice}</p>
            <p className="mt-4 text-white/70">{t.pricing.demoText}</p>
          </article>
          <article data-reveal className="pricing-card pricing-card-accent">
            <p className="text-sm uppercase tracking-[0.18em] text-white/70">{t.pricing.fullName}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{t.pricing.fullValue}</h3>
            <p className="mt-2 text-3xl font-semibold text-[#f4d29f]">{t.pricing.fullPrice}</p>
            <p className="mt-4 text-white/80">{t.pricing.fullText}</p>
            <a href={activationLink} target="_blank" rel="noreferrer" className="btn-primary-lg mt-6">
              {t.pricing.contactActivation}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
