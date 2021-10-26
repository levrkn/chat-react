import classNames from 'classnames';
import React, { FC } from 'react';
import { updateCurrentId } from '../../../store';
import { ChatType } from '../../../types';
import Card from '../../molecules/Card/Card';
import LackCards from '../../molecules/LackCards/LackCards';
import './CardList.scss';

interface CardListProps {
  className?: string;
  chats: ChatType[];
}

const CardList: FC<CardListProps> = ({ className = '', chats }) => {
  const classProps = classNames('cardList', className);

  const handleCurrentCard = (id: number) => {
    updateCurrentId(id);
  };
  return (
    <div className={classProps}>
      {chats[0] ? (
        chats.map(
          (el: ChatType) => (
            <React.Fragment key={el.id}>
              <Card
                avatar={el.avatar}
                title={el.name}
                subtitle={el.messages[el.messages.length - 1]}
                id={el.id}
                handleCurrentCard={handleCurrentCard}
              />
            </React.Fragment>
          ),
        )
      ) : (
        <LackCards />
      )}
    </div>
  );
};

export default CardList;
