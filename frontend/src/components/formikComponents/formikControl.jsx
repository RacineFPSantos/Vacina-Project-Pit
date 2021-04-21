import React from 'react';

import Input from './formTypes/input';
import TextArea from './formTypes/textArea';
import Checkbox from './formTypes/checkbox';
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
    case 'textarea': {
      return <TextArea {...rest} />;
    }
    case 'checkbox': {
      return <Checkbox {...rest} />;
    }
    default: {
      return null;
    }
  }
};

export default formikController;
