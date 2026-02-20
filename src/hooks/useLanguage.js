import { useEffect, useState } from 'react';
import { getInitialLang, persistLang } from '../i18n/landing.js';

export function useLanguage() {
  const [lang, setLang] = useState('ru');

  useEffect(() => {
    setLang(getInitialLang());
  }, []);

  const switchLang = (value) => {
    setLang(value);
    persistLang(value);
  };

  return { lang, switchLang };
}
