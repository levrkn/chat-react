import classNames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MessageType } from '../../../types';
import Typography from '../../atoms/Typography/Typography';
import fileIcon from '../../../assets/images/fileIcon.svg';
import './Message.scss';

interface MessageProps {
  className?: string;
  message: MessageType;
}

const Message: FC<MessageProps> = ({ className = '', message }) => {
  const classProps = classNames('message', className, {
    message__right: message.author === 'user',
  });
  return (
    <div className={classProps}>
      {message.type === 'text' ? (
        <Typography className="message__text" variant="5">
          {message.text}
        </Typography>
      ) : (
        <a className="message__text" href="http://109.194.37.212:93//files/rsd7bkb7kt4hb58ya86f.svg">
          <img className="message__image" src={fileIcon} alt="" />
          <div>
            <Typography variant="4">{message.name}</Typography>
            <Typography variant="6">
              {Number(message.size) / 1000000}MB
            </Typography>
          </div>
        </a>
      )}
    </div>
  );
};

export default Message;
