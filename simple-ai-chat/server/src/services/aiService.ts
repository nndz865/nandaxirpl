import axios from 'axios';

const AI_API_URL = 'http://localhost:5000/api/chat';

export const sendMessageToAI = async (message: string): Promise<string> => {
    try {
        const response = await axios.post(AI_API_URL, { message });
        return response.data.reply;
    } catch (error) {
        console.error('Error sending message to AI:', error);
        throw new Error('Failed to get response from AI');
    }
};

export const processUserInput = (input: string): string => {
    // Basic processing of user input can be done here
    return input.trim();
};