#include "rsi.h"

RSI::RSI(int period) : period(period) {}

double RSI::calculate(const std::vector<double>& prices) {
    if (prices.size() < period) {
        throw std::invalid_argument("Not enough data to calculate RSI");
    }

    double gain = 0.0;
    double loss = 0.0;

    for (size_t i = 1; i < period; ++i) {
        double change = prices[i] - prices[i - 1];
        if (change > 0) {
            gain += change;
        } else {
            loss -= change; // loss is negative, so we subtract
        }
    }

    gain /= period;
    loss /= period;

    if (loss == 0) {
        return 100; // RSI is 100 if there are no losses
    }

    double rs = gain / loss;
    return 100 - (100 / (1 + rs));
}