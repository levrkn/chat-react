import React from 'react';
import avatar from '../../../assets/images/maleIcon.svg';
import Card from '../../molecules/Card/Card';
import './CardList.scss';

interface CardListProps {
  className?: string;
}

const CardList: React.FC<CardListProps> = ({ className }) => {
  const classProps = `cardList ${className}`;
  const chats = [
    {
      id: 1,
      avatar,
      title: 'Konstantin Konstantinopolski',
      text: 'You: How are you doing?',
    },
    {
      id: 2,
      avatar,
      title: 'Konstantin Konstantinopolski',
      text: 'You: How are you doing?',
    },
    {
      id: 3,
      avatar,
      title: 'Konstantin Konstantinopolski',
      text: 'You: How are you doing?',
    },
    {
      id: 4,
      avatar,
      title: 'Konstantin Konstantinopolski',
      text: 'You: How are you doing?',
    },
    {
      id: 5,
      avatar,
      title: 'Konstantin Konstantinopolski',
      text: 'You: How are you doing?',
    },
    {
      id: 6,
      avatar,
      title: 'Konstantin Konstantinopolski',
      text: 'You: How are you doing?',
    },
    {
      id: 7,
      avatar,
      title: 'Konstantin Konstantinopolski',
      text: 'You: How are you doing?',
    },
    {
      id: 8,
      avatar,
      title: 'Konstantin Konstantinopolski',
      text: 'You: How are you doing?',
    },
  ];
  return (
    <div className={classProps}>
      {chats.map(
        (el: { id: number; avatar: string; title: string; text: string }) => (
          <React.Fragment key={el.id}>
            <Card avatar={el.avatar} title={el.title} subtitle={el.text} />
          </React.Fragment>
        ),
      )}
    </div>
  );
};

CardList.defaultProps = {
  className: '',
};

export default CardList;
