import classNames from 'classnames';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { $currentСhatId } from '../../../store';
import { MessageType } from '../../../types';
import Avatar from '../../atoms/Avatar/Avatar';
import Typography from '../../atoms/Typography/Typography';
import './Card.scss';

interface CardProps {
  className?: string;
  id: number;
  avatar: string;
  title: string;
  subtitle: MessageType;
  handleCurrentCard: (id: number) => void;
}

const Card: FC<CardProps> = ({
  className = '',
  id,
  avatar,
  title,
  subtitle,
  handleCurrentCard,
}) => {
  const currentCard = useStore($currentСhatId);
  const classProps = classNames('card', className, {
    active: currentCard === id,
  });

  return (
    <button
      className={classProps}
      type="button"
      onClick={() => handleCurrentCard(id)}
    >
      <Avatar className="card__avatar" src={avatar} />
      <div>
        <Typography className="card__title" variant="4">
          {title}
        </Typography>

        <Typography className="card__text" variant="6">
          {subtitle.type === 'right' && (
            <span className="card__text prev">You: </span>
          )}
          <span>{subtitle.messageText}</span>
        </Typography>
      </div>
    </button>
  );
};

export default Card;
