import React from 'react';
import ChatWindow from './components/ChatWindow';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Simple AI Chat Application</h1>
      <ChatWindow />
    </div>
  );
};

export default App;