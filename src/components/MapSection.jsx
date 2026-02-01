export default function MapSection({ invite, t }) {
  const { venue } = invite;

  return (
    <section className="section-pad bg-white" id="location">
      <div className="section-title fade-up">
        <h2 className="font-display text-3xl">{t('mapTitle')}</h2>
        <p>{venue.name}</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card p-8 space-y-4 fade-up">
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500">{t('mapAddress')}</div>
            <div className="text-lg font-semibold">{venue.address}</div>
          </div>
          {venue.mapUrl && (
            <a className="btn-primary w-fit" href={venue.mapUrl} target="_blank" rel="noopener">
              {t('mapButton')}
            </a>
          )}
        </div>
        <div className="card overflow-hidden min-h-[240px] fade-up">
          {(venue.embedUrl || venue.mapUrl) ? (
            <iframe
              title="Map"
              src={venue.embedUrl || venue.mapUrl}
              className="w-full h-full"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              {t('mapSoon')}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
