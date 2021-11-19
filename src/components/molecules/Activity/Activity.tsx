import React, { FC } from 'react';
import classNames from 'classnames';
import Typography from '../../atoms/Typography/Typography';
import './Activity.scss';
import Avatar from '../../atoms/Avatar/Avatar';
import ArrowButton from '../../atoms/ArrowButton/ArrowButton';
import maleAvatar from '../../../assets/images/maleIcon.svg';
import femaleAvatar from '../../../assets/images/femaleIcon.svg';

interface ActivityProps {
  className?: string;
  title: string;
  subtitle: string;
  gender: 'male' | 'female';
}

const Activity: FC<ActivityProps> = ({
  className = '',
  title,
  subtitle,
  gender,
}) => {
  const classProps = classNames('activity', className);
  return (
    <div className={classProps}>
      <ArrowButton />
      <Avatar
        className="activity__avatar"
        src={gender === 'male' ? maleAvatar : femaleAvatar}
      />
      <div>
        <Typography className="activity__title" variant="3">
          {title}
        </Typography>
        <Typography className="activity__subtitle" variant="5">
          {subtitle}
        </Typography>
      </div>
    </div>
  );
};

export default Activity;
