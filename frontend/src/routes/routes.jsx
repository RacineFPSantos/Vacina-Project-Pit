import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routesList from './routesList';

const routes = routesList;

const Routes = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        {routes.map(({ path, component }) => (
          <Route key={path} exact path={path} component={component} />
        ))}
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
