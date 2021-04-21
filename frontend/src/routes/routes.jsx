import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';

import Home from '../pages';
import Agendar from '../pages/agendar';
import ListaAgendados from '../pages/listaAgendados';

import { PatientListContext } from '../context/patientListContext';

const Routes = () => {
  const [patientsList, setPatientsList] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/agendar" component={Agendar} />
          <PatientListContext.Provider
            value={{ patientsList, setPatientsList }}
          >
            <Route exact path="/listaagendados" component={ListaAgendados} />
          </PatientListContext.Provider>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
