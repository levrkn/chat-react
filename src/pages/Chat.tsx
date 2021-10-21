import React from 'react';
import ChatTemplate from '../components/templates/Chat/ChatTemplate';

const Chat: React.FC = () => {
  const messages: {
    id: number;
    type: 'right' | 'left';
    messageText: string;
  }[] = [
    {
      id: 1,
      type: 'right',
      messageText:
        'SeSed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore veritatis et quasi architecto beatae vitae dictasunt explicabo. accusantium doloremque laudantium, totam re',
    },
    {
      id: 2,
      type: 'left',
      messageText:
        'SeSed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore veritatis et quasi architecto beatae vitae dictasunt explicabo. accusantium doloremque laudantium, totam re',
    },
    {
      id: 3,
      type: 'right',
      messageText:
        'SeSed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore veritatis et quasi architecto beatae vitae dictasunt explicabo. accusantium doloremque laudantium, totam re',
    },
    {
      id: 4,
      type: 'left',
      messageText:
        'SeSed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore veritatis et quasi architecto beatae vitae dictasunt explicabo. accusantium doloremque laudantium, totam re',
    },
    {
      id: 5,
      type: 'right',
      messageText:
        'SeSed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore veritatis et quasi architecto beatae vitae dictasunt explicabo. accusantium doloremque laudantium, totam re',
    },
    {
      id: 6,
      type: 'right',
      messageText:
        'SeSed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore veritatis et quasi architecto beatae vitae dictasunt explicabo. accusantium doloremque laudantium, totam re',
    },
    {
      id: 7,
      type: 'left',
      messageText:
        'SeSed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore veritatis et quasi architecto beatae vitae dictasunt explicabo. accusantium doloremque laudantium, totam re',
    },
  ];
  return <ChatTemplate messages={messages} />;
};

export default Chat;
