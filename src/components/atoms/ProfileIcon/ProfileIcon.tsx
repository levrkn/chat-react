import React from 'react';
import './ProfileIcon.scss';
import image from '../../../assets/images/profileIcon.svg';

interface ProfileIconProps {
  className?: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = (props: ProfileIconProps) => {
  ProfileIcon.defaultProps = {
    className: '',
  };
  const { className } = props;
  return (
    <div className={`profileIcon ${className}`}>
      <img src={image} alt="profile" />
    </div>
  );
};

export default ProfileIcon;
