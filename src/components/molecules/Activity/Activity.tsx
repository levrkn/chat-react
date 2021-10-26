import React, { FC } from 'react';
import classNames from 'classnames';
import Typography from '../../atoms/Typography/Typography';
import './Activity.scss';

interface ActivityProps {
  className?: string;
  title: string;
  subtitle: string;
}

const Activity: FC<ActivityProps> = ({ className = '', title, subtitle }) => {
  const classProps = classNames('activity', className);

  return (
    <div className={classProps}>
      <Typography className="activity__title" variant="3">
        {title}
      </Typography>
      <Typography className="activity__subtitle" variant="5">
        Last seen {subtitle}
      </Typography>
    </div>
  );
};

export default Activity;
