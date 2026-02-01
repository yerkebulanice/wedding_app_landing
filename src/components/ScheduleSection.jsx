export default function ScheduleSection({ invite, t }) {
  return (
    <section className="section-pad bg-white">
      <div className="section-title fade-up">
        <h2 className="font-display text-3xl">{t('scheduleTitle')}</h2>
        <p>{t('scheduleSubtitle')}</p>
      </div>
      <div className="mt-8 max-w-3xl mx-auto space-y-4">
        {invite.schedule?.map((item, idx) => (
          <div key={`${item.time}-${idx}`} className="card p-6 flex items-center justify-between fade-up">
            <span className="text-lg font-semibold" style={{ color: 'var(--primary)' }}>{item.time}</span>
            <span className="text-slate-600">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
