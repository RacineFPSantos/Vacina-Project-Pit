import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage } from 'formik';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import brasizilianLocale from 'date-fns/locale/pt-BR';
import { Form } from 'react-bootstrap';
import TextError from '../../textError';

const TimePicker = ({
  label,
  name,
  timeConfig: {
    timeIntervals,
    timeCaption,
    minTime: { minHour, minMinutes },
    maxTime: { maxHour, maxMinutes },
  },
  ...props
}) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <br />
    <Field name={name}>
      {({ form, field }) => {
        const { setFieldValue } = form;
        const { value } = field;
        return (
          <DateView
            className="form-control"
            id={name}
            {...field}
            {...props}
            showTimeSelect
            showTimeSelectOnly
            minTime={setHours(setMinutes(new Date(), minMinutes), minHour)}
            maxTime={setHours(setMinutes(new Date(), maxMinutes), maxHour)}
            timeCaption={timeCaption}
            timeIntervals={timeIntervals}
            timeFormat="HH:mm"
            dateFormat="HH:mm"
            locale={brasizilianLocale}
            selected={value}
            onChange={(val) => setFieldValue(name, val)}
            autoComplete="off"
          />
        );
      }}
    </Field>
    <ErrorMessage name={name} component={TextError} />
  </Form.Group>
);
export default TimePicker;
