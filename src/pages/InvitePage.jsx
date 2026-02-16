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

    apiFetch(`/public/invitations/${inviteId}`)
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

  if (data?.status === 'expired') {
    return (
      <main className="min-h-screen flex items-center justify-center section-pad">
        <div className="card p-10 text-center space-y-5 max-w-xl w-full">
          <h1 className="font-display text-3xl">Сайт не активирован</h1>
          <p className="text-slate-600">
            Демо-режим истек. Свяжитесь с менеджером, чтобы активировать сайт навсегда.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/77471789004"
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M20.52 3.48A11.9 11.9 0 0 0 12.03 0C5.4 0 0 5.4 0 12.03c0 2.12.55 4.2 1.6 6.04L0 24l6.11-1.6a12 12 0 0 0 5.92 1.51h.01C18.63 23.91 24 18.51 24 11.88c0-3.2-1.25-6.22-3.48-8.4ZM12.04 21.9h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.63.95.97-3.54-.24-.37A9.86 9.86 0 0 1 2.1 12.03c0-5.48 4.45-9.93 9.93-9.93 2.65 0 5.14 1.03 7.01 2.9a9.85 9.85 0 0 1 2.9 6.99c0 5.48-4.45 9.93-9.9 9.93Z"
                  fill="currentColor"
                />
                <path
                  d="M17.5 14.67c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5a9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.59-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.07 2.86 1.22 3.06.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.71.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
                  fill="currentColor"
                />
              </svg>
              Написать в WhatsApp
            </a>
          </div>
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
