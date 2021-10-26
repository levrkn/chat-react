import classNames from 'classnames';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { $currentСhatId, addMessage } from '../../../store';
import SendButton from '../../atoms/SendButton/SendButton';
import SendFile from '../../atoms/SendFile/SendFile';
import SendInput from '../../atoms/SendInput/SendInput';
import './SendForm.scss';

interface SendFormProps {
  className?: string;
}

const SendForm: FC<SendFormProps> = ({ className = '' }) => {
  const classProps = classNames('sendForm', className);
  const currentChatId = useStore($currentСhatId);
  const { register, handleSubmit, reset } = useForm({});
  const onSubmit = (data: { text: string }) => {
    addMessage({ ...data, id: currentChatId });
    reset();
  };
  return (
    <>
      <form className={classProps} onSubmit={handleSubmit(onSubmit)}>
        <SendFile />
        <SendInput {...register('text')} />
        <SendButton />
      </form>
    </>
  );
};

export default SendForm;
