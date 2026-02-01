export default function FooterSection({ invite, t }) {
  return (
    <footer className="section-pad bg-[#1e1612] text-white/80">
      <div className="flex flex-wrap gap-6 items-center justify-between">
        <div>
          <div className="font-display text-2xl text-white">{invite.couple.groomName} &amp; {invite.couple.brideName}</div>
          <p className="text-sm">{t('footerWait')}</p>
        </div>
        <div className="space-y-1">
          <div className="text-sm uppercase tracking-widest">{t('contacts')}</div>
          {invite.contacts?.map((contact) => (
            <div key={contact.phone}>
              <span className="text-sm text-white/60">{contact.label}:</span> {contact.phone}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 text-xs text-white/50">© 2026 Shaqyrtu</div>
    </footer>
  );
}
