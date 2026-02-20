export default function Header({ siteName, lang, onLangChange }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="text-lg font-semibold tracking-tight text-slate-900">{siteName}</div>
        <div
          className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm"
          role="group"
          aria-label="Language switcher"
        >
          <button
            type="button"
            onClick={() => onLangChange('kz')}
            className={`lang-btn ${lang === 'kz' ? 'lang-btn-active' : ''}`}
            aria-pressed={lang === 'kz'}
          >
            KZ
          </button>
          <button
            type="button"
            onClick={() => onLangChange('ru')}
            className={`lang-btn ${lang === 'ru' ? 'lang-btn-active' : ''}`}
            aria-pressed={lang === 'ru'}
          >
            RU
          </button>
        </div>
      </div>
    </header>
  );
}
