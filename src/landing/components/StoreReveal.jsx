import { AppStoreIcon, GooglePlayIcon } from './StoreIcons.jsx';

function StoreCard({ label, actionText }) {
  return (
    <div className="store-card">
      <div className="mb-3 flex items-center justify-center text-slate-900">{label === 'App Store' ? <AppStoreIcon /> : <GooglePlayIcon />}</div>
      <div className="text-sm font-medium text-slate-900">{label}</div>
      <a
        href="https://neketime.kz"
        className="mt-3 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
      >
        {actionText}
      </a>
    </div>
  );
}

export default function StoreReveal({ t, open, innerRef }) {
  return (
    <section
      ref={innerRef}
      className={`mx-auto w-full max-w-6xl overflow-hidden px-4 transition-all duration-300 sm:px-6 ${open ? 'max-h-[420px] py-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
      aria-hidden={!open}
    >
      <div className={`rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 ${open ? 'translate-y-0' : '-translate-y-2'}`}>
        <h2 className="text-lg font-semibold text-slate-900">{t.openStoresTitle}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <StoreCard label="App Store" actionText={t.download} />
          <StoreCard label="Google Play" actionText={t.download} />
        </div>
        <p className="mt-4 text-sm text-slate-500">{t.appSoon}</p>
      </div>
    </section>
  );
}
