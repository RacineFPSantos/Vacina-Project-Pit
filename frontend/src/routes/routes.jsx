import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';

import Home from '../pages/home';
import Agendar from '../pages/agendar';
import ListaAgendados from '../pages/listaAgendados';

import { PatientsListContext } from '../context/patientsListContext';

const Routes = () => {
  const [patientsList, setPatientsList] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/agendar" component={Agendar} />
          <PatientsListContext.Provider
            value={{ patientsList, setPatientsList }}
          >
            <Route exact path="/listaagendados" component={ListaAgendados} />
          </PatientsListContext.Provider>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
