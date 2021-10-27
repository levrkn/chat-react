import classNames from 'classnames';
import React, { FC } from 'react';
import './Typography.scss';

interface TypographyProps {
  variant: '1' | '2' | '3' | '4' | '5' | '6';
  children: React.ReactNode;
  className?: string;
}

const Typography: FC<TypographyProps> = ({
  className = '',
  children,
  variant,
}) => {
  switch (variant) {
    case '1':
      return <h1 className={classNames('title1', className)}>{children}</h1>;
    case '2':
      return <h2 className={classNames('title2', className)}>{children}</h2>;
    case '3':
      return <h3 className={classNames('title3', className)}>{children}</h3>;
    case '4':
      return <h4 className={classNames('title4', className)}>{children}</h4>;
    case '5':
      return <p className={classNames('text1', className)}>{children}</p>;
    default:
      return <p className={classNames('text2', className)}>{children}</p>;
  }
};

export default Typography;
