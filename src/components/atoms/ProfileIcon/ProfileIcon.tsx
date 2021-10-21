import React from 'react';
import './ProfileIcon.scss';
import image from '../../../assets/images/profileIcon.svg';

interface ProfileIconProps {
  className?: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ className }) => {
  const classProps = `profileIcon ${className}`;
  return (
    <div className={classProps}>
      <img src={image} alt="profile" />
    </div>
  );
};

ProfileIcon.defaultProps = {
  className: '',
};

export default ProfileIcon;
