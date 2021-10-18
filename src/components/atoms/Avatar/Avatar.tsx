import React from 'react';
import './Avatar.scss';

interface AvatarProps {
  className?: string;
  src: string
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  Avatar.defaultProps = {
    className: '',
  };
  const { className, src } = props;
  return <img className={`avatar ${className}`} src={src} alt="avatar" />;
};

export default Avatar;
