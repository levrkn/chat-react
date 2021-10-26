import React, { FC } from 'react';
import classNames from 'classnames';
import icon from '../../../assets/images/lackCardsIcon.svg';
import './LackCardsIcon.scss';

interface LackCardsIconProps {
  className?: string;
}

const LackCardsIcon: FC<LackCardsIconProps> = ({ className = '' }) => {
  const classProps = classNames('lackCardsIcon', className);

  return <img className={classProps} src={icon} alt="lack cards" />;
};

export default LackCardsIcon;
