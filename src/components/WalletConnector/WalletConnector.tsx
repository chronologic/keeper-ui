import React from "react";
import styled from "styled-components";
import { useWallet } from "use-wallet";

import Connect from "./Connect";
import Connected from "./Connected";

function WalletConnector() {
  const wallet = useWallet();

  return (
    <Container>
      {wallet.status === "connected" ? (
        <Connected wallet={wallet} />
      ) : (
        <Connect wallet={wallet} />
      )}
    </Container>
  );
}

const Container = styled.div``;

export default WalletConnector;
