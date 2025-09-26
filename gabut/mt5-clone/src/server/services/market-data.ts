import axios from 'axios';

interface MarketData {
    symbol: string;
    price: number;
    volume: number;
    timestamp: number;
}

class MarketDataService {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async fetchMarketData(symbol: string): Promise<MarketData> {
        try {
            const response = await axios.get(`${this.apiUrl}/market-data?symbol=${symbol}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching market data: ${error.message}`);
        }
    }

    async fetchAllMarketData(): Promise<MarketData[]> {
        try {
            const response = await axios.get(`${this.apiUrl}/market-data`);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching all market data: ${error.message}`);
        }
    }
}

export default MarketDataService;