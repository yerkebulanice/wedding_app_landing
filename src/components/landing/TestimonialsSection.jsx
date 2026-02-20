export default function TestimonialsSection({ t }) {
  return (
    <section id="reviews" className="section-wrap scroll-mt-20" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="section-header">
          <h2 id="reviews-title">{t.testimonials.title}</h2>
          <p>{t.testimonials.subtitle}</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {t.testimonials.items.map((item, index) => (
            <article key={item} data-reveal className="premium-card p-6">
              <p className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                {t.testimonials.sampleLabel} {index + 1}
              </p>
              <p className="mt-4 text-white/85">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
