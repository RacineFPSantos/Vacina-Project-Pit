import { format, differenceInCalendarYears } from 'date-fns';
import brazilianLocale from 'date-fns/locale/pt-BR';

const language = { locale: brazilianLocale };
const formatDate = (date) => format(date, 'dd/MM/yyyy', language);
const formatTime = (time) => format(time, 'HH:mm', language);

const formatDateForDatabase = (date, time) =>
  `${format(date, 'E MMM dd yyyy')} ${format(time, 'HH:mm:ss XXXX')}`;

const calculateAge = (date, dateOther) =>
  differenceInCalendarYears(date, dateOther);

export { formatDate, formatTime, formatDateForDatabase, calculateAge };