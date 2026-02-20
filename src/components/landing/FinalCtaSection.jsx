import { whatsappLink } from '../../i18n/landing.js';

export default function FinalCtaSection({ t }) {
  return (
    <section className="section-wrap" aria-labelledby="final-cta-title">
      <div data-reveal className="mx-auto max-w-7xl rounded-[2rem] border border-white/15 bg-gradient-to-r from-[#1d1e28] to-[#25273a] p-8 md:p-12">
        <h2 id="final-cta-title" className="max-w-2xl text-3xl font-semibold text-white md:text-5xl">
          {t.finalCta.title}
        </h2>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={whatsappLink(t.whatsapp.connect)} target="_blank" rel="noreferrer" className="btn-primary-lg">
            {t.common.createInvite}
          </a>
          <a href={whatsappLink(t.whatsapp.connect)} target="_blank" rel="noreferrer" className="btn-secondary-lg">
            {t.common.contactWhatsApp}
          </a>
        </div>
      </div>
    </section>
  );
}
