import React, { FC } from 'react';
import './SendFile.scss';
import classNames from 'classnames';
import sendfile from '../../../assets/images/sendfile.svg';

interface SendFileProps {
  className?: string;
}

const SendFile: FC<SendFileProps> = ({ className = '' }) => {
  const classProps = classNames('sendFile', className);
  return (
    <button className={classProps} type="button">
      <img src={sendfile} alt="file" />
    </button>
  );
};

export default SendFile;
