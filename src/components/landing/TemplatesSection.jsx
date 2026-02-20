import { useMemo, useState } from 'react';
import budgetImage from '../../../assets/budget.png';
import guestsImage from '../../../assets/guests.png';
import heroImage from '../../../assets/hero.png';
import tasksImage from '../../../assets/tasks.png';

const PREVIEW_IMAGES = [
  heroImage,
  guestsImage,
  tasksImage,
  budgetImage,
  heroImage,
  guestsImage,
  tasksImage,
  budgetImage,
  heroImage
];

const FILTERS = ['all', 'classic', 'minimal', 'lux', 'modern', 'traditional'];

export default function TemplatesSection({ t }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const cards = useMemo(
    () => t.templatesData.map((item, index) => ({ ...item, image: PREVIEW_IMAGES[index] })),
    [t.templatesData]
  );

  const visibleCards = cards.filter((card) => activeFilter === 'all' || card.style === activeFilter);

  return (
    <section id="templates" className="section-wrap scroll-mt-20" aria-labelledby="templates-title">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="section-header">
          <h2 id="templates-title">{t.templates.title}</h2>
          <p>{t.templates.subtitle}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`filter-chip ${activeFilter === filter ? 'filter-chip-active' : ''}`}
            >
              {t.templates.filters[filter]}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCards.map((card) => (
            <article key={`${card.title}-${card.style}`} data-reveal className="template-card group">
              <img src={card.image} alt={card.title} loading="lazy" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="template-overlay">
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">{t.templates.filters[card.style]}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{card.title}</h3>
                <a href="/demo" className="mt-4 inline-flex rounded-full border border-white/40 px-4 py-2 text-sm text-white hover:bg-white/10">
                  {t.templates.openDemo}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
