import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/routes';

import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <ToastContainer position="top-right" />
    <Routes />
  </>,
  document.getElementById('root'),
);
