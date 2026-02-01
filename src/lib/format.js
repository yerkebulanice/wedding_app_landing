export function formatDate(dateString, timeString) {
  if (!dateString) return '';
  const date = new Date(`${dateString}T${timeString || '00:00'}:00`);
  return date.toLocaleDateString('kk-KZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatTime(timeString) {
  if (!timeString) return '';
  return timeString;
}

export function getEventDateTime(date, time, timeZone) {
  if (!date || !time) return null;
  if (!timeZone) return new Date(`${date}T${time}:00`);

  const [year, month, day] = date.split('-').map(Number);
  const [hour, minute] = time.split(':').map(Number);

  const utcGuess = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  const tzDate = new Date(utcGuess.toLocaleString('en-US', { timeZone }));
  const offset = tzDate.getTime() - utcGuess.getTime();
  return new Date(Date.UTC(year, month - 1, day, hour, minute, 0) - offset);
}

export function formatCountdown(ms) {
  if (ms <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}
