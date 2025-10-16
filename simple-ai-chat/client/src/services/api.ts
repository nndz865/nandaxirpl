import axios from 'axios';

const API_URL = 'http://localhost:5000/api/chat';

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(`${API_URL}/send`, { message });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const receiveMessages = async () => {
    try {
        const response = await axios.get(`${API_URL}/messages`);
        return response.data;
    } catch (error) {
        console.error('Error receiving messages:', error);
        throw error;
    }
};