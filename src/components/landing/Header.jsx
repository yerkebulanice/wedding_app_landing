import { useState } from 'react';

const NAV_ITEMS = [
  { key: 'features', href: '#features' },
  { key: 'how', href: '#how' },
  { key: 'templates', href: '#templates' },
  { key: 'reviews', href: '#reviews' },
  { key: 'pricing', href: '#pricing' },
  { key: 'faq', href: '#faq' },
  { key: 'contacts', href: '#contacts' }
];

export default function Header({ t, lang, onLangChange, createLink }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0f0f13]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="/" className="text-lg font-semibold tracking-wide text-white">
          {t.common.logo}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b07a]"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div role="group" aria-label={t.common.languageLabel} className="flex rounded-full border border-white/20 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => onLangChange('ru')}
              className={`lang-btn ${lang === 'ru' ? 'lang-btn-active' : ''}`}
            >
              RU
            </button>
            <button
              type="button"
              onClick={() => onLangChange('kz')}
              className={`lang-btn ${lang === 'kz' ? 'lang-btn-active' : ''}`}
            >
              KZ
            </button>
          </div>
          <a href={createLink} className="btn-primary-sm">
            {t.common.createInvite}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white lg:hidden"
          aria-label={t.common.menuLabel}
          aria-expanded={open}
        >
          <span className="text-xl leading-none">{open ? '×' : '≡'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#111218] px-4 py-4 lg:hidden">
          <div className="grid gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                {t.nav[item.key]}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between">
              <div role="group" aria-label={t.common.languageLabel} className="flex rounded-full border border-white/20 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => onLangChange('ru')}
                  className={`lang-btn ${lang === 'ru' ? 'lang-btn-active' : ''}`}
                >
                  RU
                </button>
                <button
                  type="button"
                  onClick={() => onLangChange('kz')}
                  className={`lang-btn ${lang === 'kz' ? 'lang-btn-active' : ''}`}
                >
                  KZ
                </button>
              </div>
              <a href={createLink} className="btn-primary-sm" onClick={() => setOpen(false)}>
                {t.common.createInvite}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
