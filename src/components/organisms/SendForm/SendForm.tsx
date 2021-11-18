import classNames from 'classnames';
import { useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import React, { FC, useState } from 'react';
import { addMessage, sendFileFx } from '../../../store/chat';
import Loader from '../../atoms/Loader/Loader';
import SendButton from '../../atoms/SendButton/SendButton';
import SendFile from '../../atoms/SendFile/SendFile';
import SendInput from '../../atoms/SendInput/SendInput';
import './SendForm.scss';
import { MessageType } from '../../../types';

interface SendFormProps {
  className?: string;
}

const SendForm: FC<SendFormProps> = ({ className = '' }) => {
  const classProps = classNames('sendForm', className);
  const isLoading = useStore(sendFileFx.pending);
  const params: { id: string } = useParams();
  const [values, setvalues] = useState<{
    file?: MessageType['file'];
    text?: string;
  }>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.keys(values)[0]) {
      addMessage({ ...values, id: Number(params.id) });
      setvalues({});
    }
    console.log(values);
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
            {values.file?.name}
            <SendInput onChange={handleInputChange} value={values.text} />
            <SendButton />
          </>
        )}
      </form>
    </>
  );
};

export default SendForm;
