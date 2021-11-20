import classNames from 'classnames';
import React, { FC } from 'react';
import { MessageType, userType } from '../../../types';
import Loader from '../../atoms/Loader/Loader';
import Card from '../../molecules/Card/Card';
import LackCards from '../../molecules/LackCards/LackCards';
import './CardList.scss';

interface CardListProps {
  className?: string;
  users: userType[];
  messages: MessageType[];
  isLoading: boolean;
}
const CardList: FC<CardListProps> = ({
  className = '',
  users,
  messages,
  isLoading,
}) => {
  const classProps = classNames('cardList', className);
  const content = users.filter((user) => !user.you)[0] ? (
    users
      .filter((user) => !user.you)
      .map((user) => {
        const message = messages.filter(
          (m) =>
            (m.from === user?.name &&
              m.to === users.filter((u) => u.you)[0]?.name) ||
            (m.from === users.filter((u) => u.you)[0]?.name &&
              m.to === user?.name),
        );
        const currentMessage = message[message.length - 1];

        return (
          <React.Fragment key={user.id}>
            <Card
              gender={user.gender}
              title={user.name}
              subtitle={
                currentMessage?.text
                  ? currentMessage?.text
                  : currentMessage?.file && 'file'
              }
              id={user.id}
              user={
                currentMessage &&
                currentMessage?.from === users.filter((u) => u.you)[0]?.name
              }
            />
          </React.Fragment>
        );
      })
  ) : (
    <LackCards />
  );

  return (
    <div className={classProps}>
      {isLoading ? <Loader className="cardList__loader" /> : content}
    </div>
  );
};

export default CardList;
