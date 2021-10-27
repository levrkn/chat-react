import React, { FC } from 'react';
import classNames from 'classnames';
import Typography from '../../atoms/Typography/Typography';
import './Activity.scss';
import Avatar from '../../atoms/Avatar/Avatar';
import ArrowButton from '../../atoms/ArrowButton/ArrowButton';

interface ActivityProps {
  className?: string;
  title: string;
  subtitle: string;
  avatar: string;
}

const Activity: FC<ActivityProps> = ({
  className = '',
  title,
  subtitle,
  avatar,
}) => {
  const classProps = classNames('activity', className);

  return (
    <div className={classProps}>
      <ArrowButton />
      <Avatar className="activity__avatar" src={avatar} />
      <div>
        <Typography className="activity__title" variant="3">
          {title}
        </Typography>
        <Typography className="activity__subtitle" variant="5">
          Last seen {subtitle}
        </Typography>
      </div>
    </div>
  );
};

export default Activity;
