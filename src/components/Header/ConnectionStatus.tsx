import React, { useMemo } from "react";
import { Space, Tag } from "antd";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { useWallet } from "use-wallet";

function ConnectionStatus() {
  const wallet = useWallet();

  const connector = useMemo(() => {
    switch (wallet.connector) {
      case "injected": {
        return "MetaMask";
      }
      case "walletconnect": {
        return "WalletConnect";
      }
      default: {
        return wallet.connector;
      }
    }
  }, [wallet.connector]);

  return (
    <Space direction="horizontal" size={[48, 0]}>
      {wallet.status === "connected" ? (
        <Tag icon={<CheckCircleOutlined />} color="success">
          Connected to {connector}
        </Tag>
      ) : (
        <Tag icon={<CloseCircleOutlined />} color="error">
          Network Disconnected
        </Tag>
      )}
    </Space>
  );
}

export default ConnectionStatus;
