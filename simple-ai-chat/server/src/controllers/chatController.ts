export class ChatController {
    private aiService: any;

    constructor(aiService: any) {
        this.aiService = aiService;
    }

    public async handleIncomingMessage(req: any, res: any): Promise<void> {
        const userMessage = req.body.message;
        try {
            const aiResponse = await this.aiService.getResponse(userMessage);
            res.json({ response: aiResponse });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while processing the message.' });
        }
    }
}