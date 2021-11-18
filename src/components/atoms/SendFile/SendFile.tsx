import React, { FC } from 'react';
import './SendFile.scss';
import classNames from 'classnames';
import { errorAlert } from '../../../utils/functions';

interface SendFileProps {
  className?: string;
  onChange: (file: File) => void;
}

const SendFile: FC<SendFileProps> = ({ className = '', onChange }) => {
  const classProps = classNames('sendFile', className);

  const handleFile = (file: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const currentFile = file.target.files![0];
      const ext = currentFile.type;
      if (currentFile.size > 2097152) {
        errorAlert('the file must be less than 2MB');
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
        onChange(currentFile);
      } else {
        errorAlert('valid file permissions: mp4/ogg/webm/mpeg/jpg/gif/png/svg');
      }
    } catch (error) {
      errorAlert('could not read the file');
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
