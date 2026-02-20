import { useState } from 'react';

export default function FaqSection({ t }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-wrap scroll-mt-20" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl">
        <div data-reveal className="section-header">
          <h2 id="faq-title">{t.faq.title}</h2>
        </div>
        <div className="mt-8 space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = index === open;
            return (
              <article key={item.q} data-reveal className="faq-item">
                <h3>
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </h3>
                {isOpen ? <p className="faq-answer">{item.a}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
