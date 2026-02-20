function FeatureIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-[#f2c383]">
      <path
        fill="currentColor"
        d="M12 2a1 1 0 0 1 .89.55l2.24 4.53 5 .73a1 1 0 0 1 .55 1.7l-3.62 3.53.86 4.98a1 1 0 0 1-1.45 1.05L12 16.74l-4.47 2.35a1 1 0 0 1-1.45-1.05l.86-4.98L3.32 9.53a1 1 0 0 1 .55-1.7l5-.73 2.24-4.53A1 1 0 0 1 12 2Z"
      />
    </svg>
  );
}

export default function FeaturesSection({ t }) {
  return (
    <section id="features" className="section-wrap scroll-mt-20" aria-labelledby="features-title">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="section-header">
          <h2 id="features-title">{t.features.title}</h2>
          <p>{t.features.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((item) => (
            <article key={item.title} data-reveal className="feature-card">
              <div className="mb-4 flex items-center justify-between">
                <FeatureIcon />
                {item.soon ? <span className="tag-soon">{t.features.soon}</span> : null}
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
