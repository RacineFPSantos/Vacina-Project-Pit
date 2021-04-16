import React from 'react';

import Input from './formTypes/input';
import DatePicker from './formTypes/datePicker';
import TimePicker from './formTypes/timePicker';

const formikController = ({ control, ...rest }) => {
  switch (control) {
    case 'input': {
      return <Input {...rest} />;
    }
    case 'date': {
      return <DatePicker {...rest} />;
    }
    case 'time': {
      return <TimePicker {...rest} />;
    }
    default: {
      return null;
    }
  }
};

export default formikController;
