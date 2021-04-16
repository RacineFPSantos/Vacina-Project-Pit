import React from 'react';

import Input from './formTypes/input';
import DatePicker from './formTypes/datePicker';

const formikController = ({ control, ...rest }) => {
  switch (control) {
    case 'input': {
      return <Input {...rest} />;
    }
    case 'date': {
      return <DatePicker {...rest} />;
    }
    default: {
      return null;
    }
  }
};

export default formikController;
