export default function HowItWorksSection({ t }) {
  return (
    <section id="how" className="section-wrap scroll-mt-20" aria-labelledby="how-title">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="section-header">
          <h2 id="how-title">{t.how.title}</h2>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {t.how.steps.map((step, index) => (
            <li key={step.title} data-reveal className="premium-card p-6">
              <span className="step-dot">{index + 1}</span>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
