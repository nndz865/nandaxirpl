import { Request, Response } from 'express';
import { TradeService } from '../services/trade-service';

const tradeService = new TradeService();

export const createTrade = async (req: Request, res: Response) => {
    try {
        const tradeData = req.body;
        const newTrade = await tradeService.createTrade(tradeData);
        res.status(201).json(newTrade);
    } catch (error) {
        res.status(500).json({ message: 'Error creating trade', error });
    }
};

export const getTrades = async (req: Request, res: Response) => {
    try {
        const trades = await tradeService.getTrades();
        res.status(200).json(trades);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving trades', error });
    }
};

export const getTradeById = async (req: Request, res: Response) => {
    try {
        const tradeId = req.params.id;
        const trade = await tradeService.getTradeById(tradeId);
        if (trade) {
            res.status(200).json(trade);
        } else {
            res.status(404).json({ message: 'Trade not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving trade', error });
    }
};