# Simple AI Chat Application

This project is a simple AI chat application that consists of a client-side React application and a server-side Node.js application. The client communicates with the server to send and receive chat messages, which are processed by an AI service.

## Project Structure

```
simple-ai-chat
├── client                # Client-side application
│   ├── src               # Source files for the React app
│   ├── package.json      # Client package configuration
│   └── tsconfig.json     # TypeScript configuration for the client
├── server                # Server-side application
│   ├── src               # Source files for the Node.js server
│   ├── package.json      # Server package configuration
│   └── tsconfig.json     # TypeScript configuration for the server
├── .gitignore            # Git ignore file
├── package.json          # Overall project package configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the client directory and install dependencies:

   ```
   cd simple-ai-chat/client
   npm install
   ```

3. Navigate to the server directory and install dependencies:

   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the server:

   ```
   cd simple-ai-chat/server
   npm start
   ```

2. In a new terminal, start the client:

   ```
   cd simple-ai-chat/client
   npm start
   ```

3. Open your browser and go to `http://localhost:3000` to access the chat application.

## Usage

- Type your message in the chat window and press enter to send it.
- The AI will respond based on the input provided.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for details.