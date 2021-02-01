import React, { useContext } from "react";
import styled from "styled-components";
import { Typography, Space, Progress } from "antd";

import { purple } from "../colors";
import { UserContext } from "../../contexts";
import { bnToNumber } from "../../utils";

const { Title } = Typography;

function UserBalance() {
  const { loading, user } = useContext(UserContext);
  return (
    <Space direction="vertical" size={[24, 0]}>
      <Title level={4}>ETH balance</Title>
      <Balance>{bnToNumber(user?.balanceEth)} ETH</Balance>
      <div>You’re running out of ETH</div>
      <Progress
        type="circle"
        status={loading ? "active" : "normal"}
        percent={10}
        format={() => ""}
      />
    </Space>
  );
}

const Balance = styled.div`
  color: ${purple};
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 42px;
  line-height: 1.35;
  font-feature-settings: "tnum" on, "lnum" on, "zero" on;
`;

export default UserBalance;
