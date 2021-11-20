import React from 'react';
import './RegistrationTemplate.scss';
import Logo from '../../atoms/Logo/Logo';
import Typography from '../../atoms/Typography/Typography';
import RegistrationForm from '../../organisms/RegistrationForm/RegistrationForm';

const RegistrationTemplate: React.FC = () => (
  <main className="registration">
    <div className="registration__inner">
      <Logo className="registration__logo" />
      <Typography variant="1">
        <span>Sign Up to </span>
        <span className="registration__titleBlue">Chatty</span>
        <span className="registration__titleLightBlue">!</span>
      </Typography>
      <Typography className="registration__subtitle" variant="2">
        Registration
      </Typography>
      <RegistrationForm />
    </div>
    <span className="registration__span" />
  </main>
);

export default RegistrationTemplate;
