import React from "react";
import styled from "styled-components";
import { Layout, Typography, Menu, Dropdown, message, Space, Tag } from "antd";
import { DownOutlined, CloseCircleOutlined } from "@ant-design/icons";
import logo from "../../img/logo.svg";
import metamask from "../../img/metamask.svg";
import trezor from "../../img/trezor.svg";
import ledger from "../../img/ledger.svg";

function handleMenuClick() {
  message.info("Click on menu item.");
  console.log("click");
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item
      key="1"
      icon={<img src={metamask} className="wallet-icon" alt="metamask" />}
    >
      Metamask
    </Menu.Item>
    <Menu.Item
      key="2"
      icon={<img src={ledger} className="wallet-icon" alt="ledger" />}
    >
      Ledger
    </Menu.Item>
    <Menu.Item
      key="3"
      icon={<img src={trezor} className="wallet-icon" alt="trezor" />}
    >
      Trezor
    </Menu.Item>
  </Menu>
);

const { Text } = Typography;

function Header() {
  return (
    <Layout.Header>
      <Space>
        <img src={logo} className="App-logo" alt="logo" />
        <ChronoLogic>
          <Text>by ChronoLogic</Text>
        </ChronoLogic>
      </Space>
      <ConnectWallet>
        <Space>
          <Tag icon={<CloseCircleOutlined />} color="error">
            Network Disconnected
          </Tag>
          <Dropdown overlay={menu}>
            <WalletButton>
              Connect Wallet <DownOutlined />
            </WalletButton>
          </Dropdown>
        </Space>
      </ConnectWallet>
    </Layout.Header>
  );
}

const ConnectWallet = styled.div`
  float: right;
`;

const WalletButton = styled.div`
  height: 56px;
`;

const ChronoLogic = styled.div`
  font-size: 0.9rem;
  opacity: 0.5;
`;

export default Header;
