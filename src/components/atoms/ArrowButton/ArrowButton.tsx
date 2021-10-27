import React, { FC } from 'react';
import classNames from 'classnames';
import './ArrowButton.scss';
import arrow from '../../../assets/images/arrow.svg';
import { updateCurrentId } from '../../../store';

interface ArrowButtonProps {
  className?: string;
}

const ArrowButton: FC<ArrowButtonProps> = ({ className = '' }) => {
  const classProps = classNames('arrowButton', className);

  return (
    <button className={classProps} type="button" onClick={() => updateCurrentId(0)}>
      <img src={arrow} alt="arrow" />
    </button>
  );
};

export default ArrowButton;
