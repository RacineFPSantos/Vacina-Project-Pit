import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routesList from './routesList';

import Header from '../components/header';
import Footer from '../components/footer';

const routes = routesList;

const Routes = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        {routes.map(({ path, component }) => (
          <Route key={path} exact path={path} component={component} />
        ))}
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
