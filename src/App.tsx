import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Thing from './home/Thing';
import { authRoutes } from './routes';
import Podcast from './podcast/Podcast';

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Route exact path={authRoutes.home} component={Home} />
        <Route exact path={authRoutes.thing} component={Thing} />
        <Route exact path={authRoutes.podcast} component={Podcast} />
      </Router>
    </div>
  );
};

export default App;
