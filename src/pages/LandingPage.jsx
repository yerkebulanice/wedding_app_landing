import Header from '../components/landing/Header.jsx';
import HeroSection from '../components/landing/HeroSection.jsx';
import SocialProofSection from '../components/landing/SocialProofSection.jsx';
import FeaturesSection from '../components/landing/FeaturesSection.jsx';
import HowItWorksSection from '../components/landing/HowItWorksSection.jsx';
import TemplatesSection from '../components/landing/TemplatesSection.jsx';
import PricingSection from '../components/landing/PricingSection.jsx';
import TestimonialsSection from '../components/landing/TestimonialsSection.jsx';
import FaqSection from '../components/landing/FaqSection.jsx';
import FinalCtaSection from '../components/landing/FinalCtaSection.jsx';
import Footer from '../components/landing/Footer.jsx';
import { messages } from '../i18n/landing.js';
import { useLanguage } from '../hooks/useLanguage.js';
import { useSeo } from '../hooks/useSeo.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function LandingPage() {
  const { lang, switchLang } = useLanguage();
  const t = messages[lang];

  useSeo({
    lang,
    title: t.seo.home.title,
    description: t.seo.home.description,
    path: '/'
  });
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0b0c12]">
      <Header t={t} lang={lang} onLangChange={switchLang} createLink="/open" />
      <main>
        <HeroSection t={t} />
        <SocialProofSection t={t} />
        <FeaturesSection t={t} />
        <HowItWorksSection t={t} />
        <TemplatesSection t={t} />
        <PricingSection t={t} />
        <TestimonialsSection t={t} />
        <FaqSection t={t} />
        <FinalCtaSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
