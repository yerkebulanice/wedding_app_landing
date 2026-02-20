import { useState } from 'react';
import { formatDate, formatTime } from '../lib/format.js';

export default function HeroSection({ invite, t }) {
  const [copied, setCopied] = useState(false);
  const heroImage = invite.gallery?.[0]?.url;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <header className="relative min-h-[80vh] flex items-center justify-center text-center text-white">
      {heroImage ? (
        <img
          src={heroImage}
          alt={invite.gallery?.[0]?.alt || 'Wedding'}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200 via-amber-100 to-rose-300" />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 section-pad max-w-3xl space-y-6 fade-up">
        <span className="tracking-[0.4em] uppercase text-xs">{t('inviteLabel')}</span>
        <h1 className="font-display text-4xl md:text-6xl">{invite.couple.groomName} &amp; {invite.couple.brideName}</h1>
        <p className="text-base md:text-lg text-white/90">{invite.inviteText}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="card bg-white/90 text-ink px-6 py-3">
            <div className="font-semibold">{formatDate(invite.event.date, invite.event.time)}</div>
            <div className="text-sm text-slate-500">{formatTime(invite.event.time)} {invite.event.timezone || ''}</div>
          </div>
          <button className="btn-primary" onClick={() => document.getElementById('guest-list')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('rsvp')}
          </button>
          <button className="btn-outline" onClick={handleCopy}>
            {copied ? t('copied') : t('copyLink')}
          </button>
        </div>
      </div>
    </header>
  );
}
