import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage } from 'formik';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import brasizilianLocale from 'date-fns/locale/pt-BR';
import TextError from '../../textError';

const TimePicker = ({
  label,
  name,
  timeIntervals,
  timeCaption,
  minTime: { minHour, minMinutes },
  maxTime: { maxHour, maxMinutes },
  ...props
}) => (
  <div className="form-control">
    <label htmlFor={name}>{label}</label>
    <Field name={name}>
      {({ form, field }) => {
        const { setFieldValue } = form;
        const { value } = field;
        return (
          <DateView
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
          />
        );
      }}
    </Field>
    <ErrorMessage name={name} component={TextError} />
  </div>
);

export default TimePicker;
