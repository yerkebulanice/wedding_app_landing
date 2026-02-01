export default function DetailsSection({ invite, t }) {
  return (
    <section className="section-pad bg-soft" id="details">
      <div className="section-title fade-up">
        <h2 className="font-display text-3xl">{t('detailsTitle')}</h2>
        <p>{invite.venue.name} — {t('detailsSubtitle')}</p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="card p-8 space-y-4 fade-up">
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500">{t('venueLabel')}</div>
            <div className="text-lg font-semibold">{invite.venue.name}</div>
            <div className="text-slate-600">{invite.venue.address}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500">{t('dressCode')}</div>
            <div className="text-lg font-semibold">{invite.dressCode}</div>
          </div>
        </div>
        <div className="card p-8 space-y-4 fade-up">
          <div className="text-xs uppercase tracking-widest text-slate-500">{t('contacts')}</div>
          <div className="space-y-3">
            {invite.contacts?.map((contact) => (
              <div key={contact.label} className="flex flex-col">
                <span className="text-sm text-slate-500">{contact.label}</span>
                <a className="font-semibold" href={`tel:${contact.phone}`}>{contact.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
