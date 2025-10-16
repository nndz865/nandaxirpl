import { Router } from 'express';
import ChatController from '../controllers/chatController';

const router = Router();
const chatController = new ChatController();

router.post('/send', chatController.sendMessage);
router.post('/receive', chatController.receiveMessage);

export default router;