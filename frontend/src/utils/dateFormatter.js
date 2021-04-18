import { format, differenceInCalendarYears } from 'date-fns';
import brazilianLocale from 'date-fns/locale/pt-BR';

const language = { locale: brazilianLocale };
const formatDate = (date) => format(date, 'dd/MM/yyyy', language);
const formatTime = (time) => format(time, 'HH:mm', language);

const calculateAge = (date, dateOther) =>
  differenceInCalendarYears(date, dateOther);

export { formatDate, formatTime, calculateAge };
