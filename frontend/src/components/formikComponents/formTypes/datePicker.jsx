import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage } from 'formik';
import brasizilianLocale from 'date-fns/locale/pt-BR';
import TextError from '../../textError';

const DatePicker = ({ label, name, minDate, ...rest }) => (
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
            {...rest}
            locale={brasizilianLocale}
            dateFormat="d 'de' MMMM yyyy"
            selected={value}
            onChange={(val) => setFieldValue(name, val)}
            placeholderText="Mes Dia Ano"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            minDate={minDate}
          />
        );
      }}
    </Field>
    <ErrorMessage name={name} component={TextError} />
  </div>
);

export default DatePicker;
