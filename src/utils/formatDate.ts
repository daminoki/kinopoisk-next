export default function formatPremiereDate(premiereDate: Date) {
  const date = new Date(premiereDate);

  return new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
