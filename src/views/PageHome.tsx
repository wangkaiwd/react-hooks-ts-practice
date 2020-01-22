import App from '@/App';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import routerConfig from '@/config/routerConfig';

const PageHome = () => {
  return (
    <App>
      <Switch>
        {routerConfig.map(route => (
          <Route path={route.path} key={route.path}>
            <route.component/>
          </Route>
        ))}
      </Switch>
    </App>
  );
};
export default PageHome;
