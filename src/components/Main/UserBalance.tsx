import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { Typography, Space, Progress } from "antd";
import { BigNumber } from "ethers";

import { purple } from "../colors";
import { UserContext } from "../../contexts";
import { bnToNumber, numberToBn } from "../../utils";
import { MIN_BALANCE_ETH, WARNING_BALANCE_ETH } from "../../env";

const { Title } = Typography;

function UserBalance() {
  const { loading, user } = useContext(UserContext);

  const isWarningLevel = useMemo(() => {
    return BigNumber.from(user?.balanceEth || "0").lte(
      numberToBn(WARNING_BALANCE_ETH)
    );
  }, [user]);

  const isCriticalLevel = useMemo(() => {
    return BigNumber.from(user?.balanceEth || "0").lte(
      numberToBn(MIN_BALANCE_ETH)
    );
  }, [user]);

  const color = useMemo(() => {
    if (isCriticalLevel) {
      return "red";
    }
    if (isWarningLevel) {
      return "orange";
    }
    return purple;
  }, [isCriticalLevel, isWarningLevel]);

  const message = useMemo(() => {
    if (isCriticalLevel) {
      return "ETH level too low! Your node is not being protected!";
    }
    if (isWarningLevel) {
      return "You’re running out of ETH";
    }
    return "Your node is being protected.";
  }, [isCriticalLevel, isWarningLevel]);

  const percent = useMemo(() => {
    // only for presentation purposes, it's not an actual limit
    const maxBalance = numberToBn(MIN_BALANCE_ETH).mul("10");
    const res = BigNumber.from(user?.balanceEth || "0")
      .mul("100")
      .div(maxBalance)
      .toNumber();
    return res || 1;
  }, [user]);

  return (
    <Space direction="vertical" size={[24, 0]}>
      <Title level={4}>ETH balance</Title>
      <Balance color={color}>{bnToNumber(user?.balanceEth || "0")} ETH</Balance>
      <div>{message}</div>
      <Progress
        type="circle"
        percent={percent}
        strokeColor={color}
        format={() => ""}
      />
    </Space>
  );
}

const Balance = styled.div`
  color: ${(props) => props.color};
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 42px;
  line-height: 1.35;
  font-feature-settings: "tnum" on, "lnum" on, "zero" on;
`;

export default UserBalance;
