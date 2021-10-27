import React, { FC } from 'react';
import classNames from 'classnames';
import './NoCardSelected.scss';
import Typography from '../../atoms/Typography/Typography';

interface NoCardSelectedProps {
  className?: string;
}

const NoCardSelected: FC<NoCardSelectedProps> = ({ className = '' }) => {
  const classProps = classNames('noCardSelected', className);

  return (
    <div className={classProps}>
      <Typography className="noCardSelected__text" variant="5">
        Select a chat to stary messaging
      </Typography>
    </div>
  );
};

export default NoCardSelected;
