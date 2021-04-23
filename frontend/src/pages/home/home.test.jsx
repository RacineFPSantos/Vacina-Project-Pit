/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from './index';
import Routers from '../../routes/routes';

const leftClick = { button: 0 };

test('Check if agendar Button exist ', () => {
  render(<Home />);
  const agendarBtn = screen.queryByTitle('agendar-btn');
  expect(agendarBtn).toBeInTheDocument();
});

test('Check if enfermeiro Button exist ', () => {
  render(<Home />);
  const enfermeiroBtn = screen.queryByTitle('enfermeiro-btn');
  expect(enfermeiroBtn).toBeInTheDocument();
});

test('Agendar button navigation', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Routers />
    </Router>,
  );

  expect(screen.queryByTitle('agendar-btn')).toBeInTheDocument();
  fireEvent.click(screen.queryByTitle('agendar-btn'), leftClick);

  expect(screen.getByText('Nome')).toBeInTheDocument();
});

test('Enfermeiro button navigation', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Routers />
    </Router>,
  );
  expect(screen.getByText('#VacinaSIM')).toBeInTheDocument();
  fireEvent.click(screen.getByText('#VacinaSIM'), leftClick);

  expect(screen.queryByTitle('enfermeiro-btn')).toBeInTheDocument();
  fireEvent.click(screen.queryByTitle('enfermeiro-btn'), leftClick);

  expect(screen.getByTestId('list-wrapper')).toBeInTheDocument();
});
