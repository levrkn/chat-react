import React from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import Typography from '../../atoms/Typography/Typography';
import './Card.scss';

interface CardProps {
  className?: string;
  avatar: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ className, avatar, title, subtitle }) => {
  const classProps = `card ${className}`;
  return (
    <div className={classProps}>
      <Avatar className="card__avatar" src={avatar} />
      <div>
        <Typography className="card__title" variant="4">
          {title}
        </Typography>
        <Typography className="card__text" variant="6">
          {subtitle}
        </Typography>
      </div>
    </div>
  );
};

Card.defaultProps = {
  className: '',
};

export default Card;
