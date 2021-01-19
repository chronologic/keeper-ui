import React from "react";
import { UseWalletProvider } from "use-wallet";

import { UserProvider } from "../../contexts";
import { CHAIN_ID } from "../../env";

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => (
  <UseWalletProvider chainId={CHAIN_ID}>
    <UserProvider>{children}</UserProvider>
  </UseWalletProvider>
);

export default Providers;
