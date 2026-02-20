import { useEffect } from 'react';

const SITE_URL = 'https://neketime.kz';

function setMeta(attributeName, attributeValue, content) {
  if (!content) return;
  const selector = `meta[${attributeName}="${attributeValue}"]`;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attributeName, attributeValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function useSeo({ lang, title, description, path = '/' }) {
  useEffect(() => {
    document.documentElement.lang = lang === 'kz' ? 'kk' : 'ru';
    document.title = title;

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', `${SITE_URL}${path}`);
    setMeta('property', 'og:site_name', 'Neketime');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`);
  }, [description, lang, path, title]);
}
