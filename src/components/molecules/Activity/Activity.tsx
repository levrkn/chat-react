import React from 'react';
import Typography from '../../atoms/Typography/Typography';
import './Activity.scss';

interface ActivityProps {
  className?: string;
}

const Activity: React.FC<ActivityProps> = ({ className }) => {
  const classProps = `activity ${className}`;
  return (
    <>
      <div className={classProps}>
        <Typography className="activity__title" variant="3">
          Marinha Joe
        </Typography>
        <Typography className="activity__subtitle" variant="5">
          Last seen 3 minutes ago
        </Typography>
      </div>
    </>
  );
};

Activity.defaultProps = {
  className: '',
};

export default Activity;
