import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../lib/api.js';

const initialState = {
  name: '',
  attendance: '',
  guestsCount: '1',
  comment: ''
};

export default function RsvpSection({ inviteId, t }) {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return t('validationName');
    if (!form.attendance) return t('validationAttendance');
    const guests = Number(form.guestsCount);
    if (!Number.isInteger(guests) || guests < 1 || guests > 10) {
      return t('validationGuests');
    }
    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setSubmitting(true);

    try {
      await apiFetch(`/public/invites/${inviteId}/rsvp`, {
        method: 'POST',
        body: JSON.stringify({
          name: form.name.trim(),
          attendance: form.attendance,
          guestsCount: Number(form.guestsCount),
          comment: form.comment.trim() || undefined
        })
      });
      navigate(`/i/${inviteId}/rsvp/success`);
    } catch (err) {
      setError(err?.message || t('errorGeneric'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section-pad bg-soft" id="rsvp">
      <div className="max-w-3xl mx-auto card p-8 md:p-12">
        <div className="section-title">
          <h2 className="font-display text-3xl">{t('rsvpTitle')}</h2>
          <p>{t('rsvpSubtitle')}</p>
        </div>
        <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">{t('nameLabel')}</label>
              <input
                className="input w-full"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">{t('guestsLabel')}</label>
              <input
                className="input w-full"
                type="number"
                name="guestsCount"
                min="1"
                max="10"
                value={form.guestsCount}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2">{t('attendanceLabel')}</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={form.attendance === 'yes'}
                  onChange={handleChange}
                  required
                />
                {t('attendYes')}
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={form.attendance === 'no'}
                  onChange={handleChange}
                  required
                />
                {t('attendNo')}
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2">{t('commentLabel')}</label>
            <textarea
              className="input w-full min-h-[120px]"
              name="comment"
              value={form.comment}
              onChange={handleChange}
            />
          </div>
          {error && (
            <div className="text-sm text-red-600">{error}</div>
          )}
          <button className="btn-primary w-full" type="submit" disabled={submitting}>
            {submitting ? t('submitting') : t('submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
