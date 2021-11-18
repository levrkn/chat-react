import classNames from 'classnames';
import React, { FC } from 'react';
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
      <div className="message__inner">
        {message.file && (
          <a className="message__file" href={message.file?.href}>
            <img className="message__image" src={fileIcon} alt="" />
            <div>
              <Typography variant="4">{message.file?.name}</Typography>
              <Typography variant="6">
                {Number(message.file?.size) / 1000000}MB
              </Typography>
            </div>
          </a>
        )}
        {message.text && (
          <Typography className="message__text" variant="5">
            {message.text}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Message;
