import classNames from 'classnames';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { $currentСhatId, updateCurrentId } from '../../../store';
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
}

const Card: FC<CardProps> = ({
  className = '',
  id,
  avatar,
  title,
  subtitle,
}) => {
  const currentСhatId = useStore($currentСhatId);
  const classProps = classNames('card', className, {
    active: currentСhatId === id,
  });

  return (
    <button
      className={classProps}
      type="button"
      onClick={() => updateCurrentId(id)}
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
