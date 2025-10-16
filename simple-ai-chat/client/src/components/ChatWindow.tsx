import React, { useState, useEffect } from 'react';
import Message from './Message';
import { sendMessage, receiveMessages } from '../services/api';
import { MessageType } from '../types';

const ChatWindow: React.FC = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            const initialMessages = await receiveMessages();
            setMessages(initialMessages);
        };

        fetchMessages();
    }, []);

    const handleSend = async () => {
        if (input.trim()) {
            const newMessage: MessageType = { sender: 'User', content: input };
            setMessages([...messages, newMessage]);
            setInput('');
            await sendMessage(newMessage);
        }
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((msg, index) => (
                    <Message key={index} sender={msg.sender} content={msg.content} />
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatWindow;