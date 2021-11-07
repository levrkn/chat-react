import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import RegistrationTemplate from '../templates/Registration/RegistrationTemplate';

const Registration: FC = () => {
  const history = useHistory();
  return (
    <RegistrationTemplate
      onSubmit={() => {
        history.push('./chat');
      }}
    />
  );
};

export default Registration;
