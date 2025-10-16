export interface Message {
    id: string;
    sender: string;
    content: string;
    timestamp: Date;
}

export interface User {
    id: string;
    name: string;
}