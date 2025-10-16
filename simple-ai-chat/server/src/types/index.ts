export interface ChatMessage {
    id: string;
    sender: string;
    content: string;
    timestamp: Date;
}

export interface AIResponse {
    response: string;
    confidence: number;
}