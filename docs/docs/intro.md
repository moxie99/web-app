# Crypto Price Tracker Documentation

## Project Setup
1. Clone the repo: `git clone https://github.com/moxie99/web-app.git`
2. Install dependencies: `cd web-app && npm install`
3. Start the Next.js app: `npm run dev`
4. Go to `/docs` and run `npm run start` for documentation.



## API Integration
- We use [CoinGecko API](https://www.coingecko.com/en/api) to fetch live crypto prices.

## State Management
- Zustandn was used for state management, ensuring a simple and efficient global store.

## Challenges & Solutions
- **API Rate Limits** → Cached results for better performance.
- **UI Performance** → Optimized rendering using Zustand.