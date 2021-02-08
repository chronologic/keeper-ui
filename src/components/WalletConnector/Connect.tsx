import React, { useCallback } from "react";
import styled from "styled-components";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Wallet } from "use-wallet";

import metamask from "../../img/metamask.svg";
import walletconnect from "../../img/walletconnect.svg";

interface IProps {
  wallet: Wallet<unknown>;
}

function Connect({ wallet }: IProps) {
  const handleConnectMetamask = useCallback(() => wallet.connect("injected"), [
    wallet,
  ]);
  const handleConnectWalletconnect = useCallback(
    () => wallet.connect("walletconnect"),
    [wallet]
  );

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        icon={<img src={metamask} className="wallet-icon" alt="MetaMask" />}
        onClick={handleConnectMetamask}
      >
        Metamask
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={
          <img
            src={walletconnect}
            className="wallet-icon"
            alt="WalletConnect"
          />
        }
        onClick={handleConnectWalletconnect}
      >
        WalletConnect
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown trigger={["click"]} overlay={menu}>
      <WalletButton>
        Connect Wallet <DownOutlined />
      </WalletButton>
    </Dropdown>
  );
}

const WalletButton = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
`;

export default Connect;
