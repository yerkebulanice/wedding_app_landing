import { Link } from 'react-router-dom';
import { messages } from '../i18n/landing.js';
import { useLanguage } from '../hooks/useLanguage.js';
import { useSeo } from '../hooks/useSeo.js';

export default function DemoPage() {
  const { lang, switchLang } = useLanguage();
  const t = messages[lang];

  useSeo({
    lang,
    title: t.seo.demo.title,
    description: t.seo.demo.description,
    path: '/demo'
  });

  return (
    <main className="min-h-screen bg-[#0b0c12] px-4 py-10 text-white md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
          <Link to="/" className="text-sm text-white/80 hover:text-white">{t.demo.openMain}</Link>
          <div className="flex rounded-full border border-white/20 bg-white/5 p-1">
            <button type="button" onClick={() => switchLang('ru')} className={`lang-btn ${lang === 'ru' ? 'lang-btn-active' : ''}`}>RU</button>
            <button type="button" onClick={() => switchLang('kz')} className={`lang-btn ${lang === 'kz' ? 'lang-btn-active' : ''}`}>KZ</button>
          </div>
        </div>
        <section className="premium-card p-6 md:p-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">{t.demo.title}</h1>
          <p className="mt-3 text-white/70">{t.demo.subtitle}</p>
          <div className="mt-8 rounded-3xl border border-white/15 bg-[#171a24] p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {t.demo.blocks.map((block) => (
                <div key={block} className="rounded-2xl bg-white/5 p-4">
                  {block}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
