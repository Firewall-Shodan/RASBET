import { dayjs } from '~/modules';

export const getSunday = (monday: string) => {
  const date = new Date(monday);
  return new Date(date.setDate(date.getDate() + 6)).toISOString().split('T')[0];
};

export function getMonday() {
  const date = new Date();
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);

  return new Date(date.setDate(diff)).toISOString().split('T')[0];
}

export function lastDay(day = 1) {
  return dayjs().subtract(day, 'day').format('YYYY-MM-DD');
}

export function getDate(date: string | Date) {
  return dayjs(date).format('YYYY-MM-DD');
}

export function formatDateAo(date: Date | string, format = 'DD-MM-YYYY') {
  return dayjs(date).format(format);
}
