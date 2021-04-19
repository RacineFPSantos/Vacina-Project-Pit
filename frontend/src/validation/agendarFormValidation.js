import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Preencha esse dado.'),
  birthdate: Yup.date().required('Preencha esse dado.').nullable(),
  dateVaccine: Yup.date().required('Preencha esse dado.').nullable(),
  timeVaccine: Yup.string().required('Preencha esse dado.').nullable(),
});

export default validationSchema;
