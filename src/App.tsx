import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import { authRoutes } from './routes';
import Podcast from './podcast/Podcast';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Navbar } from './components/Navbar/Navbar';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: { 500: '#5fd496' },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <div style={{ marginTop: '88px' }}>
            <Route exact path={authRoutes.home} component={Home} />
            <Route exact path={authRoutes.podcast} component={Podcast} />
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
