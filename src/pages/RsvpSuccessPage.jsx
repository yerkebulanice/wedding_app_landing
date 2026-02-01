import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStoredLanguage, getTranslator } from '../lib/i18n.js';

export default function RsvpSuccessPage() {
  const navigate = useNavigate();
  const { inviteId } = useParams();
  const [lang, setLang] = useState('kz');
  const t = getTranslator(lang);

  useEffect(() => {
    setLang(getStoredLanguage());
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center section-pad">
      <div className="card p-10 max-w-xl w-full text-center space-y-6">
        <h1 className="font-display text-4xl">{t('successTitle')}</h1>
        <p className="text-slate-600">{t('successText')}</p>
        <button
          className="btn-primary"
          onClick={() => navigate(`/i/${inviteId}`)}
        >
          {t('back')}
        </button>
      </div>
    </main>
  );
}
