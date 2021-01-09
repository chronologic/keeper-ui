import React from "react";
import { useWallet } from "use-wallet";

import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";

function Main() {
  const wallet = useWallet();

  return wallet.status === "connected" ? <Dashboard /> : <LandingPage />;
}

export default Main;
