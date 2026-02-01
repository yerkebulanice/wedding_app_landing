import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStoredLanguage, getTranslator, setStoredLanguage } from '../lib/i18n.js';

export default function HomePage() {
  const [inviteId, setInviteId] = useState('');
  const [lang, setLang] = useState('kz');
  const navigate = useNavigate();
  const t = getTranslator(lang);

  useEffect(() => {
    setLang(getStoredLanguage());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inviteId.trim()) return;
    navigate(`/i/${inviteId.trim()}`);
  };

  const handleLanguage = (value) => {
    setLang(value);
    setStoredLanguage(value);
  };

  return (
    <main className="min-h-screen flex items-center justify-center section-pad">
      <div className="card p-10 max-w-lg w-full text-center space-y-6">
        <div className="flex justify-center gap-2 text-sm">
          <button
            type="button"
            onClick={() => handleLanguage('kz')}
            className={`px-3 py-1 rounded-full border ${lang === 'kz' ? 'bg-rose-100 border-rose-200' : 'border-slate-200'}`}
          >
            KZ
          </button>
          <button
            type="button"
            onClick={() => handleLanguage('ru')}
            className={`px-3 py-1 rounded-full border ${lang === 'ru' ? 'bg-rose-100 border-rose-200' : 'border-slate-200'}`}
          >
            RU
          </button>
        </div>
        <div className="space-y-3">
          <h1 className="font-display text-4xl">{t('homeTitle')}</h1>
          <p className="text-slate-600">{t('homeSubtitle')}</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="input w-full"
            placeholder="Invite ID"
            value={inviteId}
            onChange={(e) => setInviteId(e.target.value)}
          />
          <button className="btn-primary w-full" type="submit">{t('open')}</button>
        </form>
      </div>
    </main>
  );
}
