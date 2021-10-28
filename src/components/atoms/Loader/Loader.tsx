import classNames from 'classnames';
import React, { FC } from 'react';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className = '' }) => {
  const classNameProps = classNames('sk-fading-circle', className);

  return (
    <div className={classNameProps}>
      <div className="sk-circle1 sk-circle" />
      <div className="sk-circle2 sk-circle" />
      <div className="sk-circle3 sk-circle" />
      <div className="sk-circle4 sk-circle" />
      <div className="sk-circle5 sk-circle" />
      <div className="sk-circle6 sk-circle" />
      <div className="sk-circle7 sk-circle" />
      <div className="sk-circle8 sk-circle" />
      <div className="sk-circle9 sk-circle" />
      <div className="sk-circle10 sk-circle" />
      <div className="sk-circle11 sk-circle" />
      <div className="sk-circle12 sk-circle" />
    </div>
  );
};

export default Loader;
