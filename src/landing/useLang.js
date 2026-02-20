import { useEffect, useState } from 'react';
import { translations } from './translations.js';

const STORAGE_KEY = 'neketime_lang';

export function useLang() {
  const [lang, setLang] = useState('kz');

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'ru' || saved === 'kz') setLang(saved);
  }, []);

  const switchLang = (next) => {
    setLang(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return { lang, t: translations[lang], switchLang };
}
