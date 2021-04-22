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

export { formatDate, formatTime, calculateAge };
