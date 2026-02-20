export default function SocialProofSection({ t }) {
  return (
    <section className="section-wrap" aria-labelledby="social-proof-title">
      <div data-reveal className="premium-card mx-auto max-w-7xl p-6 md:p-10">
        <h2 id="social-proof-title" className="text-2xl font-semibold text-white md:text-3xl">
          {t.social.title}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.social.points.map((item) => (
            <p key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75 md:text-base">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
