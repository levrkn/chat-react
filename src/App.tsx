import React from 'react';
import './assets/styles/index.scss';
import LoginForm from './components/organisms/LoginForm/LoginForm';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <LoginForm onSubmit={() => 1} />
    </header>
  </div>
);

export default App;
