import React from 'react';
import './Avatar.scss';

interface AvatarProps {
  className?: string;
  src: string;
}

const Avatar: React.FC<AvatarProps> = ({ className, ...rest }) => {
  const classProps = `avatar ${className}`;
  return (
    <>
      <img className={classProps} alt="avatar" {...rest} />
    </>
  );
};

Avatar.defaultProps = {
  className: '',
};

export default Avatar;
