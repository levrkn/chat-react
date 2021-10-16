import React from 'react';
import logo from './dartweyder.jpg';
import './assets/styles/index.scss';
import Button from './components/atoms/Button/Button';
import Label from './components/atoms/Label/Label';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Button>Log In</Button>
      <Label>hjghj</Label>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
