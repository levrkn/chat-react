import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './assets/styles/index.scss';
import Routes from './routes/index';
import 'react-toastify/dist/ReactToastify.min.css';

const App: React.FC = () => (
  <Router>
    <Routes />
    <ToastContainer />
  </Router>
);
export default App;
