import React, { FC } from 'react';
import './SendFile.scss';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { sendFileFx } from '../../../store/chat';

interface SendFileProps {
  className?: string;
}

const SendFile: FC<SendFileProps> = ({ className = '' }) => {
  const classProps = classNames('sendFile', className);
  const params: { id: string } = useParams();

  const handleFile = (file: React.ChangeEvent<HTMLInputElement>) => {
    const currentFile = file.target.files![0];
    const ext = currentFile.type;
    if (currentFile.size > 2097152) {
      alert('the file must be less than 2MB');
    } else if (
      ext === 'video/mp4' ||
      ext === 'video/ogg' ||
      ext === 'video/webm' ||
      ext === 'audio/mpeg' ||
      ext === 'audio/ogg' ||
      ext === 'image/jpeg' ||
      ext === 'image/gif' ||
      ext === 'image/png' ||
      ext === 'image/svg+xml'
    ) {
      sendFileFx({ file: currentFile, id: Number(params.id) });
    }
  };

  return (
    <>
      <label className={classProps} htmlFor="upload-file">
        <input id="upload-file" type="file" onChange={handleFile} />
      </label>
    </>
  );
};

export default SendFile;
