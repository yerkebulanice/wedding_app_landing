import { AppStoreIcon, GooglePlayIcon } from './StoreIcons.jsx';

function StoreButton({ icon, title, actionText }) {
  return (
    <a
      href="https://neketime.kz"
      aria-label={title}
      className="store-tile group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-4 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
    >
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-800 group-hover:left-[130%] group-hover:opacity-100" />
      <div className="store-icon mb-3 flex items-center text-slate-900">{icon}</div>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs text-slate-500">Store</p>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
          {actionText}
          <span className="store-arrow inline-block">→</span>
        </span>
      </div>
    </a>
  );
}

export default function StoreLinks({ t }) {
  return (
    <section className="section-space">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div data-reveal className="store-shell relative overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-[#fbf7ff] via-[#f8fbff] to-[#fffaf5] p-[1px]">
          <div aria-hidden="true" className="store-blob store-blob-a pointer-events-none absolute -left-12 top-8 h-36 w-36 rounded-full bg-gradient-to-br from-brand-200 to-pink-200 blur-3xl" />
          <div aria-hidden="true" className="store-blob store-blob-b pointer-events-none absolute -right-10 bottom-2 h-32 w-32 rounded-full bg-gradient-to-br from-amber-200 to-brand-200 blur-3xl" />

          <div className="store-glass relative rounded-2xl border border-white/80 bg-white/90 p-6 backdrop-blur-md sm:p-8">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div className="space-y-2 [transition-delay:80ms]" data-reveal>
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{t.store.title}</h2>
                <p className="max-w-md text-slate-600">{t.store.subtitle}</p>
                <p className="text-sm text-slate-500">{t.store.note}</p>
              </div>

              <div className="grid gap-3 [transition-delay:160ms]" data-reveal>
                <StoreButton icon={<AppStoreIcon />} title="App Store" actionText={t.store.download} />
                <StoreButton icon={<GooglePlayIcon />} title="Google Play" actionText={t.store.download} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
