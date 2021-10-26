import React, { FC } from 'react';
import './ProfileIcon.scss';
import classNames from 'classnames';
import image from '../../../assets/images/profileIcon.svg';

interface ProfileIconProps {
  className?: string;
}

const ProfileIcon: FC<ProfileIconProps> = ({ className = '' }) => {
  const classProps = classNames('profileIcon', className);
  return (
    <div className={classProps}>
      <img src={image} alt="profile" />
    </div>
  );
};

export default ProfileIcon;
