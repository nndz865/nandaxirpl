import express from 'express';
import tradesController from './controllers/trades';

const apiRouter = express.Router();

// Define API endpoints
apiRouter.get('/trades', tradesController.getTrades);
apiRouter.post('/trades', tradesController.createTrade);

// Add more endpoints as needed

export default apiRouter;