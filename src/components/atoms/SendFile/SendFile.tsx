import React from 'react';
import './SendFile.scss';
import sendfile from '../../../assets/images/sendfile.svg';

interface SendFileProps {
  className?: string;
}

const SendFile: React.FC<SendFileProps> = ({ className }) => {
  const classProps = `sendFile ${className}`;
  return (
    <>
      <button className={classProps} type="button">
        <img src={sendfile} alt="file" />
      </button>
    </>
  );
};

SendFile.defaultProps = {
  className: '',
};

export default SendFile;
