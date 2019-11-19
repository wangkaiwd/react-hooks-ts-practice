import React, { useState } from 'react';
import './App.scss';
import ClassVsHooks, { ClassComponents } from '@/views/classVsHooks/ClassVsHooks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Counter from '@/views/myUseState/myUseState';

const App: React.FC = () => {
  const [nameConfig, setNameConfig] = useState({
    firstName: 'w',
    lastName: 'k',
  });
  const { lastName, firstName } = nameConfig;
  const changeName = (newFirstName: string): void => {
    nameConfig.firstName = newFirstName;
    setNameConfig({ ...nameConfig });
  };
  return (
    <Router>
      <div className="app">
        <div className="page-wrapper">
          <ul className="link-content">
            <li>
              <Link to={'/myUseState'}>myUseState</Link>
            </li>
            <li>
              <Link to={'/hooksComponent'}>hooksComponent</Link>
            </li>
            <li>
              <Link to={'/hooksComponent'}>hooksComponent</Link>
            </li>
          </ul>
          <div className="demo-content">
            <Switch>
              <Route path={'/myUseState'}>
                <Counter/>
              </Route>
              <Route path={'/hooksComponent'}>
                <ClassVsHooks/>
              </Route>
              <Route path={'/hooksComponent'}>
                <ClassComponents
                  firstName={firstName}
                  lastName={lastName}
                  onChange={changeName}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default App;
