/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Agendar from './index';

test('Check if Agendar Form exist ', () => {
  render(<Agendar />);
  expect(screen.getByText('Nome')).toBeInTheDocument();
});
