import React from 'react';
import logo from '../../../assets/images/logo.svg';
import './Logo.scss';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const classProps = `logo ${className}`;
  return <img className={classProps} src={logo} alt="logo" />;
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
