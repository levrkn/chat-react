import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useStore } from 'effector-react';
import Typography from '../../atoms/Typography/Typography';
import './Activity.scss';
import Avatar from '../../atoms/Avatar/Avatar';
import ArrowButton from '../../atoms/ArrowButton/ArrowButton';
import maleAvatar from '../../../assets/images/maleIcon.svg';
import femaleAvatar from '../../../assets/images/femaleIcon.svg';
import { $users } from '../../../store/chat';

interface ActivityProps {
  className?: string;
  title: string;
  subtitle: string;
  gender: 'male' | 'female';
}

const Activity: FC<ActivityProps> = ({
  className = '',
  title,
  subtitle,
  gender,
}) => {
  const classProps = classNames('activity', className);
  const params: { id: string } = useParams();
  const users = useStore($users);
  const currentUser = users.filter((el) => el.id === Number(params.id))[0];
  return (
    <div className={classProps}>
      <ArrowButton />
      <Avatar
        className="activity__avatar"
        src={gender === 'male' ? maleAvatar : femaleAvatar}
      />
      <div>
        <Typography className="activity__title" variant="3">
          {currentUser.name}
        </Typography>
        <Typography className="activity__subtitle" variant="5">
          online
        </Typography>
      </div>
    </div>
  );
};

export default Activity;
