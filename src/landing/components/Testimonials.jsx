const REVIEWS = [
  {
    initial: 'A',
    rating: '5.0',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.',
    year: '2026'
  },
  {
    initial: 'B',
    rating: '5.0',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt. Cras dapibus.',
    year: '2026'
  }
];

export default function Testimonials({ t }) {
  return (
    <section className="section-space">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div data-reveal className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{t.testimonialsTitle}</h2>
          <p className="text-slate-600">{t.testimonialsSubtitle}</p>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {REVIEWS.map((review) => (
            <article key={review.initial} data-reveal className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
                  {review.initial}
                </div>
                <div className="text-sm font-medium text-slate-700">{review.rating}</div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{review.text}</p>
              <p className="mt-4 text-xs text-slate-400">{review.year}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
