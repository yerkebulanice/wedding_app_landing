import { useEffect, useState } from 'react';
import { formatCountdown, getEventDateTime } from '../lib/format.js';

export default function CountdownSection({ invite, t }) {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = getEventDateTime(invite.event.date, invite.event.time, invite.event.timezone);
    if (!targetDate) return undefined;

    const tick = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      setCountdown(formatCountdown(diff));
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [invite.event]);

  return (
    <section className="section-pad bg-white">
      <div className="section-title fade-up">
        <h2 className="font-display text-3xl">{t('countdownTitle')}</h2>
        <p>{t('countdownSubtitle')}</p>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {[
          { label: t('days'), value: countdown.days },
          { label: t('hours'), value: countdown.hours },
          { label: t('minutes'), value: countdown.minutes },
          { label: t('seconds'), value: countdown.seconds }
        ].map((item) => (
          <div key={item.label} className="card p-6 text-center fade-up">
            <div className="text-3xl font-semibold" style={{ color: 'var(--primary)' }}>{item.value}</div>
            <div className="text-sm text-slate-500 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
