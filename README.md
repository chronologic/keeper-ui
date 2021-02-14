# keeper-ui

This is a supporting repository for the [Keeper project](https://github.com/chronologic/keeper-service).

## Repository overview

This repository holds the UI for Keeper. Created with `create-react-app`.

The UI provides basic features that users need to use the service:

- signing up (via simply signing a message with their wallet)
- topping up their account with ETH
- providing Operator address that they want to be protected by the service
- providing email address for notifications
- viewing a list of relevant (i.e. redeemable or being processed by the service) deposits for their Operator Node

## Environment variables

This repo uses [`dotenv`](https://www.npmjs.com/package/dotenv) to load environment variables.

A `.env` file should be created based on the `.env.example` template file. The `.env` file should never be commited.

| Name                            | Type     | Default                 | Description                                                                                                                        |
| ------------------------------- | -------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `REACT_APP_CHAIN_ID`            | `number` | `1`                     | Ethereum chain id; 1 - mainnet / 3 - ropsten / ...                                                                                 |
| `REACT_APP_API_URL`             | `string` | `http://localhost:3001` | URL of the REST API.                                                                                                               |
| `REACT_APP_MIN_BALANCE_ETH`     | `number` | `0.5`                   | User minimum account balance (below this their deposits will not be protected). This should match the value in `keeper-service`.   |
| `REACT_APP_WARNING_BALANCE_ETH` | `number` | `0.75`                  | User warning account balance (below this notifications will be sent to the user). This should match the value in `keeper-service`. |
| `REACT_APP_MIN_PAYMENT_ETH`     | `number` | `1`                     | Minimum amount of ETH that a user can deposit into their account.                                                                  |

## Deployment

You may deploy this repo to e.g. https://www.netlify.com/.

Detailed deployment instructions can be found [here](https://docs.netlify.com/).

## Building

Run `npm run build`.

## Development

Run `npm start`.
