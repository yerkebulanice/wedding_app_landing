export default function GallerySection({ invite, t }) {
  const images = invite.gallery || [];

  if (!images.length) return null;

  return (
    <section className="section-pad bg-soft">
      <div className="section-title fade-up">
        <h2 className="font-display text-3xl">{t('galleryTitle')}</h2>
        <p>{t('gallerySubtitle')}</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {images.map((photo, idx) => (
          <div key={`${photo.url}-${idx}`} className="overflow-hidden rounded-3xl fade-up">
            <img
              src={photo.url}
              alt={photo.alt || 'Gallery'}
              className="w-full h-56 md:h-64 object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
