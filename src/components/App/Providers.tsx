import React from "react";
import { UseWalletProvider } from "use-wallet";
import { CHAIN_ID } from "../../env";

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => (
  <UseWalletProvider chainId={CHAIN_ID}>{children}</UseWalletProvider>
);

export default Providers;
