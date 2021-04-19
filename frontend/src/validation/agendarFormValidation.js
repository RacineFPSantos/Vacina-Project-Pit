import * as Yup from 'yup';
import { format } from 'date-fns';

const timerRange = (min, max, value) => {
  const maxHour = max;
  const minHour = min;

  if (value !== null) {
    const dateFormated = format(new Date(value), 'HH:mm');
    const dateSplit = dateFormated.split(':');
    const hour = parseInt(dateSplit[0], 10);

    if (hour <= maxHour && hour >= minHour) {
      if (dateSplit[1] === '30' || dateSplit[1] === '00') {
        return true;
      }
    }
  }

  return false;
};

const validationSchema = (min, max) =>
  Yup.object({
    name: Yup.string().required('Preencha esse dado.'),
    birthdate: Yup.date().required('Preencha esse dado.').nullable(),
    dateVaccine: Yup.date().required('Preencha esse dado.').nullable(),
    timeVaccine: Yup.string()
      .required('Preencha esse dado.')
      .test('timeRange', 'Horario incorreto', (value) =>
        timerRange(min, max, value),
      )
      .nullable(),
  });

export default validationSchema;
