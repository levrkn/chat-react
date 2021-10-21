import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import ProfileIcon from '../../atoms/ProfileIcon/ProfileIcon';
import './Header.scss';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const classProps = `header ${className}`;
  return (
    <header className={classProps}>
      <Logo className="header__logo" />
      <ProfileIcon className="header__profileIcon" />
    </header>
  );
};

Header.defaultProps = {
  className: '',
};

export default Header;
