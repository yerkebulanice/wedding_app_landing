import { Link } from 'react-router-dom';
import { messages } from '../i18n/landing.js';
import { useLanguage } from '../hooks/useLanguage.js';
import { useSeo } from '../hooks/useSeo.js';

export default function PrivacyPage() {
  const { lang, switchLang } = useLanguage();
  const t = messages[lang];

  useSeo({
    lang,
    title: t.seo.privacy.title,
    description: t.seo.privacy.description,
    path: '/privacy'
  });

  return (
    <main className="min-h-screen bg-[#0b0c12] px-4 py-10 text-white md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
          <Link to="/" className="text-sm text-white/80 hover:text-white">{t.legal.backHome}</Link>
          <div className="flex rounded-full border border-white/20 bg-white/5 p-1">
            <button type="button" onClick={() => switchLang('ru')} className={`lang-btn ${lang === 'ru' ? 'lang-btn-active' : ''}`}>RU</button>
            <button type="button" onClick={() => switchLang('kz')} className={`lang-btn ${lang === 'kz' ? 'lang-btn-active' : ''}`}>KZ</button>
          </div>
        </div>
        <article className="premium-card p-6 md:p-10">
          <h1 className="text-3xl font-semibold text-white">{t.legal.privacyTitle}</h1>
          <p className="mt-2 text-sm text-white/45">{t.legal.updated}: 2026-02-20</p>
          <p className="mt-6 text-white/75">{t.legal.privacyText}</p>
        </article>
      </div>
    </main>
  );
}
