import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@/assets/styles/base.scss';
import routerConfig from '@/config/routerConfig';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

ReactDOM.render(
  <Router>
    <PageHome/>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
