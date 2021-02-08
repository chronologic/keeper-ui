import React from "react";
import styled from "styled-components";
import { Layout, Typography, Space, Button } from "antd";
import { turquoise } from "../colors";
import WalletConnector from "../WalletConnector";

const { Title, Link } = Typography;

function LandingPage() {
  return (
    <Layout>
      <LayoutHeader>
        <HeaderTitle>
          <Title>Overview</Title>
        </HeaderTitle>
      </LayoutHeader>
      <Main>
        <StyledContent>
          <Title level={2}>
            Welcome to Keeper, the liquidation preventer tool for Keep node
            operators!
          </Title>
          <Title level={3}>
            To get started, please click &apos;Connect Wallet&apos;.
          </Title>
          <ConnectFooter>
            <Space direction="horizontal" size={[48, 0]}>
              <ConnectWallet>
                <Button type="primary">
                  <WalletConnector className="wallet-connector" />
                </Button>
              </ConnectWallet>
              <Link href="url" target="_blank">
                What is Keeper?
              </Link>
              <Link href="https://keep.network/" target="_blank">
                More about Keep Network
              </Link>
              <Link href="https://chat.keep.network/" target="_blank">
                Join our Discord channel
              </Link>
            </Space>
          </ConnectFooter>
        </StyledContent>
      </Main>
    </Layout>
  );
}

const StyledContent = styled.div`
  text-align: left;
  background: #fff;
  margin: 0 30px 30px;
  padding: 24px;
  box-shadow: 0 4px 4px hsla(0, 0%, 75%, 0.3);
`;

const ConnectWallet = styled.div`
  display: flex;
  flex-direction: row;

  > .ant-btn {
    padding: 0;
  }

  .wallet-connector .ant-dropdown-trigger {
    padding: 1rem 2.25rem;
  }
`;

const HeaderTitle = styled.div`
  margin: 1rem 2rem 0;
`;

const ConnectFooter = styled.div`
  margin-top: 3rem;
`;

const Main = styled.div`
  margin-top: -150px;
`;

const LayoutHeader = styled.div`
  background: ${turquoise};
  height: 250px;
`;

export default LandingPage;
