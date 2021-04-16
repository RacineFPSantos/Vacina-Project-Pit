import React from 'react';

import Input from './formTypes/input';

const formikController = ({ control, ...rest }) => {
  switch (control) {
    case 'input': {
      return <Input {...rest} />;
    }
    default: {
      return null;
    }
  }
};

export default formikController;
