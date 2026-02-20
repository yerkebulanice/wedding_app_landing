import { Link } from 'react-router-dom';
import { whatsappLink } from '../../i18n/landing.js';

export default function Footer({ t }) {
  return (
    <footer id="contacts" className="mt-12 border-t border-white/10 bg-[#0d0f16] scroll-mt-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-xl font-semibold text-white">{t.common.logo}</p>
          <p className="mt-3 text-sm text-white/65">
            {t.footer.tagline}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">{t.footer.contacts}</p>
          <div className="mt-3 space-y-2 text-sm text-white/80">
            <a href={whatsappLink(t.whatsapp.connect)} target="_blank" rel="noreferrer" className="block hover:text-white">
              WhatsApp: +7 747 178 9004
            </a>
            <a href="mailto:hello@neketime.kz" className="block hover:text-white">
              Email: hello@neketime.kz
            </a>
            <a href="https://instagram.com/neketime.kz" target="_blank" rel="noreferrer" className="block hover:text-white">
              Instagram: @neketime.kz
            </a>
          </div>
        </div>
        <div className="space-y-2 text-sm text-white/80">
          <Link to="/privacy" className="block hover:text-white">{t.footer.privacy}</Link>
          <Link to="/terms" className="block hover:text-white">{t.footer.terms}</Link>
          <p className="pt-3 text-white/45">© {new Date().getFullYear()} Neketime. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
