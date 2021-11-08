import classNames from 'classnames';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { addMessage } from '../../../store/chat';
import SendButton from '../../atoms/SendButton/SendButton';
import SendFile from '../../atoms/SendFile/SendFile';
import SendInput from '../../atoms/SendInput/SendInput';
import './SendForm.scss';

interface SendFormProps {
  className?: string;
}

const SendForm: FC<SendFormProps> = ({ className = '' }) => {
  const classProps = classNames('sendForm', className);
  const params: {id: string} = useParams();
  const { register, handleSubmit, reset } = useForm({});
  const onSubmit = (data: { text: string }) => {
    addMessage({ ...data, author: 'user', type: 'text', id: Number(params.id) });
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
