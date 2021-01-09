import React from "react";
import styled from "styled-components";
import { Layout, Typography, Space } from "antd";

import logo from "../../img/logo.svg";
import FlexSpacer from "../FlexSpacer";
import { darkgray } from "../colors";
import ConnectionStatus from "./ConnectionStatus";
import WalletConnector from "../WalletConnector";

const { Text } = Typography;

function Header() {
  return (
    <Layout.Header>
      <HeaderContent>
        <Space>
          <img src={logo} alt="logo" />
          <ChronoLogic>
            <Text>by ChronoLogic</Text>
          </ChronoLogic>
        </Space>
        <FlexSpacer />
        <ConnectWallet>
          <ConnectionStatus />
          <WalletConnector />
        </ConnectWallet>
      </HeaderContent>
    </Layout.Header>
  );
}

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  line-height: normal;
`;

const ConnectWallet = styled.div`
  display: flex;
  flex-direction: row;
`;

const ChronoLogic = styled.div`
  font-size: 0.9rem;
  > * {
    color: ${darkgray};
  }
`;

export default Header;
