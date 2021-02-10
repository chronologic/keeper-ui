export const CHAIN_ID = Number(process.env.REACT_APP_CHAIN_ID || "1");
export const API_URL = process.env.REACT_APP_API_URL as string;
export const RPC_URL = process.env.REACT_APP_RPC_URL as string;
export const MIN_BALANCE_ETH = Number(process.env.REACT_APP_MIN_BALANCE_ETH);
export const WARNING_BALANCE_ETH = Number(
  process.env.REACT_APP_WARNING_BALANCE_ETH
);
export const MIN_PAYMENT_ETH = Number(process.env.REACT_APP_MIN_PAYMENT_ETH);
