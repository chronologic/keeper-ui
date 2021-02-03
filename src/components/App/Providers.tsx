import React from "react";
import { UseWalletProvider } from "use-wallet";

import { AuthProvider, UserProvider, EthersProvider } from "../../contexts";
import { CHAIN_ID } from "../../env";

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => (
  <UseWalletProvider chainId={CHAIN_ID}>
    <EthersProvider>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </EthersProvider>
  </UseWalletProvider>
);

export default Providers;
