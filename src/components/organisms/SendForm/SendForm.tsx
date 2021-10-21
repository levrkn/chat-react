import React from 'react';
import SendButton from '../../atoms/SendButton/SendButton';
import SendFile from '../../atoms/SendFile/SendFile';
import SendInput from '../../atoms/SendInput/SendInput';
import './SendForm.scss';

interface SendFormProps {
  className?: string;
}

const SendForm: React.FC<SendFormProps> = (props: SendFormProps) => {
  const { className } = props;
  const classProps = `sendForm ${className}`;
  return (
    <>
      <form className={classProps}>
        <SendFile />
        <SendInput />
        <SendButton />
      </form>
    </>
  );
};

SendForm.defaultProps = {
  className: '',
};

export default SendForm;
