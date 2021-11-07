import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/index.scss';
import Routes from './routes/index';

const App: React.FC = () => (
  <Router>
    <Routes />
  </Router>
);
export default App;
