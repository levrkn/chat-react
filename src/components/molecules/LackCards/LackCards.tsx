import React, { FC } from 'react';
import classNames from 'classnames';
import './LackCards.scss';
import LackCardsIcon from '../../atoms/LackCardsIcon/LackCardsIcon';
import Typography from '../../atoms/Typography/Typography';

interface LackCardsProps {
  className?: string;
}

const LackCards: FC<LackCardsProps> = ({ className = '' }) => {
  const classProps = classNames('lackCards', className);

  return (
    <div className={classProps}>
      <LackCardsIcon />
      <Typography className="lackCards__text" variant="5">
        There is no other users yet
      </Typography>
    </div>
  );
};

export default LackCards;
