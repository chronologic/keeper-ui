import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Menu, Dropdown, Typography } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { Wallet } from "use-wallet";

import { turquoise } from "../colors";

interface IProps {
  wallet: Wallet<unknown>;
}

const { Text } = Typography;

function Connected({ wallet }: IProps) {
  const handleDisconnect = useCallback(() => wallet.reset(), [wallet]);
  const addressEllipsis = useMemo(() => {
    return `${wallet.account?.substr(0, 6)}...${wallet.account?.substr(-4)}`;
  }, [wallet.account]);

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<PoweroffOutlined />} onClick={handleDisconnect}>
        Disconnect
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown trigger={["click"]} overlay={menu}>
      <Content>
        <Text title={wallet.account || ""}>ADDRESS: {addressEllipsis}</Text>
        <br />
        <Dot />
        <Text className="darkgray-text">Connected: {wallet.networkName}</Text>
      </Content>
    </Dropdown>
  );
}

const Content = styled.div`
  cursor: pointer;
  text-align: right;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
`;

const Dot = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${turquoise};
  margin-right: 4px;
  vertical-align: text-bottom;
`;

export default Connected;
