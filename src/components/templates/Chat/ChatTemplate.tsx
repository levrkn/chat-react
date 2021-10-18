import React from 'react';
import CardList from '../../organisms/CardList/CardList';
import Header from '../../organisms/Header/Header';
import './ChatTemplate.scss';

interface ChatTemplateProps {
  className?: string;
}

const ChatTemplate: React.FC<ChatTemplateProps> = (
  props: ChatTemplateProps,
) => {
  ChatTemplate.defaultProps = {
    className: '',
  };
  const { className } = props;
  return (
    <>
      <Header className={`chat ${className}`}>template</Header>
      <main>
        <CardList />
      </main>
    </>
  );
};

export default ChatTemplate;
