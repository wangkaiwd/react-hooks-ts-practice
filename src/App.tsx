import React from 'react';
import routerConfig from '@/config/routerConfig';
import { Link } from 'react-router-dom';
import './App.scss';

const App: React.FC = (props) => {
  return (
    <div className="app">
      <ul className="menu">
        {routerConfig.map(item => (
          <li key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};
export default App;
