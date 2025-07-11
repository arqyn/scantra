# Scantra

A mobile application that helps users identify potentially recalled products from their store receipts.

## Overview

Scantra allows users to scan their store receipts (paper or email) and automatically checks the products and companies against FDA recall data. If a match is found, users receive an instant alert with color-coded urgency:

- 🟡 **Company recall** - The company has issued some recalls
- 🟠 **Related Product flagged** - Similar products from this company have been recalled
- 🔴 **Exact Product Match** - Immediate attention needed, this exact product has been recalled

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Expo CLI

### Installation

1. Clone the repository

   ```
   git clone https://github.com/arqyn/recall-scanner.git
   cd recall-scanner
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Start the development server

   ```
   npm run dev
   ```

4. For the mobile app
   ```
   cd client
   npm start
   ```

## Contributors

See [CONTRIBUTORS](./CONTRIBUTORS.md) for a list of project contributors.

## License

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE) for more information.
