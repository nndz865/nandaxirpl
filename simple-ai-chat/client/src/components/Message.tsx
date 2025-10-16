import React from 'react';

interface MessageProps {
  sender: string;
  content: string;
}

const Message: React.FC<MessageProps> = ({ sender, content }) => {
  return (
    <div className="message">
      <strong>{sender}:</strong> {content}
    </div>
  );
};

export default Message;