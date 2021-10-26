import classNames from 'classnames';
import React, { FC } from 'react';
import Logo from '../../atoms/Logo/Logo';
import ProfileIcon from '../../atoms/ProfileIcon/ProfileIcon';
import './Header.scss';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = '' }) => {
  const classProps = classNames('header', className);
  return (
    <header className={classProps}>
      <Logo className="header__logo" />
      <ProfileIcon className="header__profileIcon" />
    </header>
  );
};

export default Header;
