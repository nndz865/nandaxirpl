export type Trade = {
    id: string;
    symbol: string;
    volume: number;
    price: number;
    type: 'buy' | 'sell';
    timestamp: Date;
};

export type MarketData = {
    symbol: string;
    bid: number;
    ask: number;
    last: number;
    volume: number;
    timestamp: Date;
};

export type User = {
    id: string;
    username: string;
    email: string;
    balance: number;
};

export type Order = {
    id: string;
    userId: string;
    tradeId: string;
    status: 'pending' | 'completed' | 'canceled';
    createdAt: Date;
    updatedAt: Date;
};