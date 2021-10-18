import React from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import Text from '../../atoms/Text/Text';
import './Card.scss';

interface CardProps {
  className?: string;
  avatar: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  Card.defaultProps = {
    className: '',
  };
  const { className, avatar, title, text } = props;
  return (
    <div className={`card ${className}`}>
      <Avatar src={avatar} />
      <Text variant="4">{title}</Text>
      <Text variant="6">{text}</Text>
    </div>
  );
};

export default Card;
