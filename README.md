# keeper-ui

This is a supporting repository for the [Keeper project](https://github.com/chronologic/keeper-service).

## Repository overview

This repository holds the UI for Keeper. Created with `create-react-app`.

## Environment variables

This repo uses [`dotenv`](https://www.npmjs.com/package/dotenv) to load environment variables.

An `.env` file should be created based on the `.env.example` template file. The `.env` file should never be commited.

| Name                            | Type     | Default                 | Description                                                                                                                   |
| ------------------------------- | -------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `REACT_APP_CHAIN_ID`            | `number` | `1`                     | Ethereum chain id; 1 - mainnet / 3 - ropsten / ...                                                                            |
| `REACT_APP_API_URL`             | `string` | `http://localhost:3001` | URL of the REST API                                                                                                           |
| `REACT_APP_MIN_BALANCE_ETH`     | `number` | `0.5`                   | User minimum account balance (below this their deposits will not be protected); here it's just for visual feedback purposes   |
| `REACT_APP_WARNING_BALANCE_ETH` | `number` | `0.75`                  | User warning account balance (below this notifications will be sent to the user); here it's just for visual feedback purposes |
| `REACT_APP_MIN_PAYMENT_ETH`     | `number` | `1`                     | Minimum amount of ETH that user can deposit into their account                                                                |

## Deployment

You may deploy this repo to e.g. https://www.netlify.com/

## Building

Run `npm run build`.

## Development

Run `npm start`.
