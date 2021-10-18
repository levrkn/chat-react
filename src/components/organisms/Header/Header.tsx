import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import ProfileIcon from '../../atoms/ProfileIcon/ProfileIcon';
import './Header.scss';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  Header.defaultProps = {
    className: '',
  };
  const { className } = props;
  return (
    <header className={`header ${className}`}>
      <Logo className="header__logo" />
      <ProfileIcon className="header__profileIcon" />
    </header>
  );
};

export default Header;
