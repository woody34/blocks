import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Thing from './home/Thing';
import { authRoutes } from './routes';

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Route exact path={authRoutes.home} component={Home} />
        <Route exact path={authRoutes.thing} component={Thing} />
      </Router>
    </div>
  );
};

export default App;
