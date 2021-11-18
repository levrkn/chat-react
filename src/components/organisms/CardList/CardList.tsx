import classNames from 'classnames';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { $users } from '../../../store/chat';
import { ChatType } from '../../../types';
import Loader from '../../atoms/Loader/Loader';
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
  const users = useStore($users);
  const content = chats[0] ? (
    users.map((el) => (
      <React.Fragment key={el.id}>
        <Card
          gender={el.gender}
          title={el.name}
          subtitle={{
            id: 3,
            author: 'user',
            text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore veritatis et quasi architecto beatae vitae dictasunt explicabo. accusantium doloremque laudantium, totam re',
          }}
          id={el.id}
        />
      </React.Fragment>
    ))
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
