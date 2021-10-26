import classNames from 'classnames';
import React, { FC } from 'react';
import './Avatar.scss';

interface AvatarProps {
  className?: string;
  src: string;
}

const Avatar: FC<AvatarProps> = ({ className = '', ...rest }) => {
  const classProps = classNames('avatar', className);

  return <img className={classProps} alt="avatar" {...rest} />;
};

export default Avatar;
