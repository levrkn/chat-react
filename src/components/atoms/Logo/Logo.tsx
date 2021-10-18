import React from 'react';
import logo from '../../../assets/images/logo.svg';
import './Logo.scss';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  Logo.defaultProps = {
    className: '',
  };
  const { className } = props;
  return <img className={`logo ${className}`} src={logo} alt="logo" />;
};

export default Logo;
