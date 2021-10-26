import classNames from 'classnames';
import React, { FC } from 'react';
import logo from '../../../assets/images/logo.svg';
import './Logo.scss';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = '' }) => {
  const classProps = classNames('logo', className);

  return <img className={classProps} src={logo} alt="logo" />;
};

export default Logo;
