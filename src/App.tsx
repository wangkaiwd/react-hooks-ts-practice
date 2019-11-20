import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import routerConfig from '@/config/routerConfig';

const App: React.FC = () => {
  // const [nameConfig, setNameConfig] = useState({
  //   firstName: 'w',
  //   lastName: 'k',
  // });
  // const { lastName, firstName } = nameConfig;
  // const changeName = (newFirstName: string): void => {
  //   nameConfig.firstName = newFirstName;
  //   setNameConfig({ ...nameConfig });
  // };
  return (
    <Router>
      <div className="app">
        <div className="page-wrapper">
          <ul className="link-content">
            {routerConfig.map(route => (
              <li key={route.path}>
                <Link to={route.path}>{route.title}</Link>
              </li>
            ))}
          </ul>
          <div className="demo-content">
            <Switch>
              {routerConfig.map(route => (
                <Route path={route.path} key={route.path}>
                  <route.component/>
                </Route>
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default App;
