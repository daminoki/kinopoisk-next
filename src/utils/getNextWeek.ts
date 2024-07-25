export default function getNextWeek() {
  const MS_IN_A_DAY = 24 * 60 * 60 * 1000;
  const DAYS_IN_A_WEEK = 7;

  const today = new Date();
  const nextWeek = new Date(today.getTime() + DAYS_IN_A_WEEK * MS_IN_A_DAY);

  const formatDate = (date: Date) =>
    date.toLocaleString('ru-RU', { timeZone: 'UTC' }).split(',')[0];

  return `${formatDate(today)}-${formatDate(nextWeek)}`;
}
