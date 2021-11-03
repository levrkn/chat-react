import React, { FC } from 'react';
import classNames from 'classnames';
import './ArrowButton.scss';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/images/arrow.svg';

interface ArrowButtonProps {
  className?: string;
}

const ArrowButton: FC<ArrowButtonProps> = ({ className = '' }) => {
  const classProps = classNames('arrowButton', className);

  return (
    <Link className={classProps} to="/chat">
      <img src={arrow} alt="arrow" />
    </Link>
  );
};

export default ArrowButton;
