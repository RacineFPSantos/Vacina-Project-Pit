import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Field, ErrorMessage } from 'formik';
import brasizilianLocale from 'date-fns/locale/pt-BR';
import { Form } from 'react-bootstrap';
import TextError from '../../textError';

const DatePicker = ({ label, name, minDate, ...props }) => (
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
            locale={brasizilianLocale}
            dateFormat="d 'de' MMMM yyyy"
            selected={value}
            onChange={(val) => setFieldValue(name, val)}
            placeholderText="Mes Dia Ano"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            minDate={minDate}
            autoComplete="off"
          />
        );
      }}
    </Field>
    <ErrorMessage name={name} component={TextError} />
  </Form.Group>
);

export default DatePicker;
