import classNames from 'classnames';
import { useStore } from 'effector-react';
import React, { FC, useState } from 'react';
import { $socket, $users, sendFileFx } from '../../../store/chat';
import Loader from '../../atoms/Loader/Loader';
import SendButton from '../../atoms/SendButton/SendButton';
import SendFile from '../../atoms/SendFile/SendFile';
import SendInput from '../../atoms/SendInput/SendInput';
import './SendForm.scss';
import { MessageType, userType } from '../../../types';

interface SendFormProps {
  className?: string;
  currentUser: userType;
}

const SendForm: FC<SendFormProps> = ({ className = '', currentUser }) => {
  const classProps = classNames('sendForm', className);
  const isLoading = useStore(sendFileFx.pending);
  const socket = useStore($socket);
  const users = useStore($users);
  const [values, setvalues] = useState<{
    file?: MessageType['file'];
    text?: string;
  }>({ text: '' });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.text || values.file) {
      socket.send(
        `"${JSON.stringify({
          ...values,
          from: users.filter((user) => user.you)[0].name,
          to: currentUser.name,
        })}"`,
      );
      setvalues({ text: '' });
    }
  };

  const handleFileChange = (f: File) => {
    sendFileFx({
      file: f,
      func: (href: string) =>
        setvalues((v) => ({
          ...v,
          file: { name: f.name, size: f.size, href },
        })),
    });
  };

  const handleInputChange = (t: string) => {
    setvalues((v) => ({ ...v, text: t }));
  };

  return (
    <>
      <form className={classProps} onSubmit={onSubmit}>
        {isLoading ? (
          <Loader className="sendForm__loader" />
        ) : (
          <>
            <SendFile onChange={handleFileChange} />
            {values.file?.name && (
              <span className="sendForm__fileName">{values.file.name}</span>
            )}
            <SendInput onChange={handleInputChange} value={values.text} />
            <SendButton />
          </>
        )}
      </form>
    </>
  );
};

export default SendForm;
