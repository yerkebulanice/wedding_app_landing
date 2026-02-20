import { useEffect, useRef, useState } from 'react';
import Header from '../landing/components/Header.jsx';
import Hero from '../landing/components/Hero.jsx';
import StoreReveal from '../landing/components/StoreReveal.jsx';
import Testimonials from '../landing/components/Testimonials.jsx';
import StoreLinks from '../landing/components/StoreLinks.jsx';
import Support from '../landing/components/Support.jsx';
import Footer from '../landing/components/Footer.jsx';
import { useLang } from '../landing/useLang.js';
import { useReveal } from '../landing/useReveal.js';

export default function HomePage() {
  const { lang, t, switchLang } = useLang();
  const [storeOpen, setStoreOpen] = useState(false);
  const revealRef = useRef(null);

  useReveal();

  useEffect(() => {
    document.documentElement.lang = lang === 'kz' ? 'kk' : 'ru';
    document.title = t.seoTitle;

    const setMeta = (name, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let node = document.head.querySelector(selector);
      if (!node) {
        node = document.createElement('meta');
        node.setAttribute(isProperty ? 'property' : 'name', name);
        document.head.appendChild(node);
      }
      node.setAttribute('content', content);
    };

    setMeta('description', t.seoDescription);
    setMeta('og:title', t.seoTitle, true);
    setMeta('og:description', t.seoDescription, true);
    setMeta('twitter:title', t.seoTitle);
    setMeta('twitter:description', t.seoDescription);
  }, [lang, t.seoDescription, t.seoTitle]);

  const handleHeroCta = () => {
    setStoreOpen(true);
    requestAnimationFrame(() => {
      revealRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="min-h-screen bg-milk">
      <Header siteName={t.siteName} lang={lang} onLangChange={switchLang} />
      <main>
        <Hero t={t} onCtaClick={handleHeroCta} />
        <StoreReveal t={t} open={storeOpen} innerRef={revealRef} />
        <Testimonials t={t} />
        <StoreLinks t={t} />
        <Support t={t} />
      </main>
      <Footer t={t} siteName={t.siteName} />
    </div>
  );
}
