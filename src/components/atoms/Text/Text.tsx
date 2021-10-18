import React from 'react';
import './Text.scss';

interface TextProps {
  variant: '1' | '2' | '3' | '4' | '5' | '6';
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = (props: TextProps) => {
  Text.defaultProps = {
    className: '',
  };
  const { children, variant, className } = props;

  switch (variant) {
    case '1':
      return <h1 className={`title1 ${className}`}>{children}</h1>;
    case '2':
      return <h2 className={`title2 ${className}`}>{children}</h2>;
    case '3':
      return <h3 className={`title3 ${className}`}>{children}</h3>;
    case '4':
      return <h4 className={`title4 ${className}`}>{children}</h4>;
    case '5':
      return <p className={`text1 ${className}`}>{children}</p>;
    default:
      return <p className={`text2 ${className}`}>{children}</p>;
  }
};

export default Text;
