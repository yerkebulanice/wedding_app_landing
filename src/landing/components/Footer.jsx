export default function Footer({ t, siteName }) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          {siteName} {new Date().getFullYear()} - {t.footerRights}
        </div>
        <div className="flex items-center gap-4">
          <a href="/privacy" className="hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
            {t.privacy}
          </a>
          <a href="/terms" className="hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
            {t.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
