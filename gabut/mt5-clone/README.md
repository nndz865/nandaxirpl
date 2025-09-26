# mt5-clone

## Overview
The mt5-clone project is an application that replicates the functionality of MetaTrader 5, providing a platform for trading financial instruments. This project includes both a desktop application built with Electron and a web application, allowing users to access trading features from multiple platforms.

## Features
- **Real-time Market Data**: Fetch and display live market data for various financial instruments.
- **Trading Functionality**: Execute trades, manage orders, and track account balances.
- **Charting Tools**: Visualize market trends with interactive financial charts.
- **Custom Indicators**: Implement and use custom trading indicators.
- **Plugin Support**: Extend the application's functionality with plugins.
- **API Integration**: Connect with various brokers and market feeds.

## Project Structure
- **src/**: Contains the source code for the application.
  - **client/**: The client-side code for both Electron and web applications.
  - **server/**: The server-side code, including API endpoints and database interactions.
  - **core/**: Core functionalities, including the trading engine and indicators.
  - **scripts/**: Trading strategies written in MQL.
  - **shared/**: Shared types and interfaces used across the application.
- **integrations/**: Contains integrations with brokers and market feeds.
- **plugins/**: Directory for example and custom plugins.
- **tests/**: Unit and integration tests for the application.
- **tools/**: Build and CI scripts.
- **docs/**: Documentation related to the architecture and usage of the application.

## Getting Started
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mt5-clone.git
   ```
2. Navigate to the project directory:
   ```
   cd mt5-clone
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the application:
   - For the Electron app:
     ```
     npm run start:electron
     ```
   - For the web app:
     ```
     npm run start:web
     ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.