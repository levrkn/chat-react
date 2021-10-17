import React from 'react';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import './Field.scss';

interface TextProps {
  title: string;
}

const Field: React.FC<TextProps> = ({ title }: TextProps) => (
  <>
    <Label htmlFor={title}>{title[0].toUpperCase() + title.slice(1)}</Label>
    <Input id={title} placeholder={`Input ${title}`} />
  </>
);

export default Field;
