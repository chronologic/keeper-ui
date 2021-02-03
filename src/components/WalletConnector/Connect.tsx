import React, { useCallback } from "react";
import styled from "styled-components";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Wallet } from "use-wallet";

import metamask from "../../img/metamask.svg";
import trezor from "../../img/trezor.svg";
import ledger from "../../img/ledger.svg";

interface IProps {
  wallet: Wallet<unknown>;
}

function Connect({ wallet }: IProps) {
  const handleConnectMetamask = useCallback(() => wallet.connect("injected"), [
    wallet,
  ]);

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        icon={<img src={metamask} className="wallet-icon" alt="metamask" />}
        onClick={handleConnectMetamask}
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
