import classNames from 'classnames';
import React, { FC } from 'react';
import { ChatType } from '../../../types';
import Card from '../../molecules/Card/Card';
import LackCards from '../../molecules/LackCards/LackCards';
import './CardList.scss';

interface CardListProps {
  className?: string;
  chats: ChatType[];
  isLoading: boolean;
}

const CardList: FC<CardListProps> = ({ className = '', chats, isLoading }) => {
  const classProps = classNames('cardList', className);
  const content = chats[0] ? (
    chats.map((el: ChatType) => (
      <React.Fragment key={el.id}>
        <Card
          avatar={el.avatar}
          title={el.name}
          subtitle={el.messages[el.messages.length - 1]}
          id={el.id}
        />
      </React.Fragment>
    ))
  ) : (
    <LackCards />
  );

  return <div className={classProps}>{!isLoading && content}</div>;
};

export default CardList;
