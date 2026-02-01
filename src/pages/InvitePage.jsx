import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiFetch } from '../lib/api.js';
import { getStoredLanguage, getTranslator, setStoredLanguage } from '../lib/i18n.js';
import HeroSection from '../components/HeroSection.jsx';
import CountdownSection from '../components/CountdownSection.jsx';
import DetailsSection from '../components/DetailsSection.jsx';
import ScheduleSection from '../components/ScheduleSection.jsx';
import GallerySection from '../components/GallerySection.jsx';
import MapSection from '../components/MapSection.jsx';
import RsvpSection from '../components/RsvpSection.jsx';
import FooterSection from '../components/FooterSection.jsx';

/**
 * @typedef {Object} Invite
 * @property {string} id
 * @property {{ groomName: string, brideName: string }} couple
 * @property {{ date: string, time: string, timezone?: string }} event
 * @property {string} inviteText
 * @property {{ name: string, address: string, mapUrl?: string, embedUrl?: string | null }} venue
 * @property {string} dressCode
 * @property {{ label: string, phone: string }[]} contacts
 * @property {{ time: string, title: string }[]} schedule
 * @property {{ url: string, alt?: string }[]} gallery
 * @property {{ primaryColor?: string }} theme
 */

export default function InvitePage() {
  const { inviteId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState('');
  const [lang, setLang] = useState('kz');
  const t = getTranslator(lang);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setNotFound(false);
    setError('');

    apiFetch(`/public/invites/${inviteId}`)
      .then((invite) => {
        if (!isMounted) return;
        setData(invite);
      })
      .catch((err) => {
        if (!isMounted) return;
        if (err?.notFound) {
          setNotFound(true);
        } else {
          setError(err?.message || 'Сервиске қосылу мүмкін болмады.');
        }
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [inviteId]);

  useEffect(() => {
    setLang(getStoredLanguage());
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [data]);

  const themeStyle = useMemo(() => {
    if (!data?.theme?.primaryColor) return undefined;
    return { '--primary': data.theme.primaryColor };
  }, [data]);

  const handleLanguage = (value) => {
    setLang(value);
    setStoredLanguage(value);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center section-pad">
        <div className="card p-10 text-center">
          <h1 className="font-display text-3xl">{t('loading')}</h1>
        </div>
      </main>
    );
  }

  if (notFound) {
    return (
      <main className="min-h-screen flex items-center justify-center section-pad">
        <div className="card p-10 text-center space-y-4">
          <h1 className="font-display text-3xl">{t('notFoundTitle')}</h1>
          <p className="text-slate-600">{t('notFoundText')}</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center section-pad">
        <div className="card p-10 text-center space-y-4">
          <h1 className="font-display text-3xl">{t('errorTitle')}</h1>
          <p className="text-slate-600">{error}</p>
        </div>
      </main>
    );
  }

  if (!data) return null;

  return (
    <div style={themeStyle} className="bg-soft">
      <div className="sticky top-4 z-20 flex justify-end px-6 md:px-12 lg:px-24">
        <div className="bg-white/90 backdrop-blur border border-white/70 rounded-full p-1 shadow-soft flex gap-1">
          <button
            type="button"
            onClick={() => handleLanguage('kz')}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${lang === 'kz' ? 'bg-rose-100 text-ink' : 'text-slate-500'}`}
          >
            KZ
          </button>
          <button
            type="button"
            onClick={() => handleLanguage('ru')}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${lang === 'ru' ? 'bg-rose-100 text-ink' : 'text-slate-500'}`}
          >
            RU
          </button>
        </div>
      </div>
      <HeroSection invite={data} t={t} />
      <CountdownSection invite={data} t={t} />
      <DetailsSection invite={data} t={t} />
      <ScheduleSection invite={data} t={t} />
      <GallerySection invite={data} t={t} />
      <MapSection invite={data} t={t} />
      <RsvpSection inviteId={inviteId} t={t} />
      <FooterSection invite={data} t={t} />
    </div>
  );
}
