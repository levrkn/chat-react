import React from 'react';
import avatar from '../../../assets/images/maleIcon.svg';
import Card from '../../molecules/Card/Card';
import './CardList.scss';

interface CardListProps {
  className?: string;
}

const CardList: React.FC<CardListProps> = (props: CardListProps) => {
  CardList.defaultProps = {
    className: '',
  };
  const { className } = props;
  const chats = [
    { id: 1, avatar, title: 'Hello ', text: 'World!' },
    { id: 2, avatar, title: 'Hello ', text: 'World!' },
  ];
  return (
    <div className="cardList">
      {chats.map(
        (el: { id: number; avatar: string; title: string; text: string }) => (
          <React.Fragment key={el.id}>
            <Card avatar={el.avatar} title={el.title} text={el.text} />
          </React.Fragment>
        ),
      )}
    </div>
  );
};

export default CardList;
