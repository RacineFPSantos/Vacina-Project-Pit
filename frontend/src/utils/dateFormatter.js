import { format, differenceInCalendarYears } from 'date-fns';
import brazilianLocale from 'date-fns/locale/pt-BR';

const language = { locale: brazilianLocale };
const formatDate = (date) => format(date, 'dd/MM/yyyy', language);
const formatTime = (time) => format(time, 'HH:mm', language);

const calculateAge = (date) => {
  const from = date.split('/');
  const birthdate = new Date(from[2], from[1] - 1, from[0]);

  return differenceInCalendarYears(new Date(), birthdate);
};

const getPreviewsDay = (date) => {
  const yesterday = new Date(date);
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday;
};

const getNextDay = (date) => {
  const tomorrow = new Date(date);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};

export { formatDate, formatTime, calculateAge, getPreviewsDay, getNextDay };
