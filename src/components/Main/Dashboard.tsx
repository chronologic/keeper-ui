import React from "react";
import styled from "styled-components";
import {
  Layout,
  Typography,
  Row,
  Col,
  Input,
  Button,
  Space,
  Card,
  Progress,
  Table,
} from "antd";
import eth from "../../img/eth.svg";
import shield from "../../img/shield.svg";
import redeemed from "../../img/redeemed.svg";
import active from "../../img/active.svg";
import mail from "../../img/mail.svg";
import { purple, turquoise } from "../colors";

const { Title } = Typography;

const dataSource = [
  {
    key: "1",
    date: "1 day ago",
    contract: <a href="url">0xe7b40e97f3bb8355ae1c3a26a635d7b1af105594</a>,
    lot: "1 BTC",
    state: (
      <div>
        <img src={redeemed} className="table-icon" alt="redeemed" />
        Redeemed by Keeper
      </div>
    ),
    cost: "0.15 ETH",
  },
  {
    key: "2",
    date: "1 day ago",
    contract: <a href="url">0xe7b40e97f3bb8355ae1c3a26a635d7b1af105594</a>,
    lot: "1 BTC",
    state: (
      <div>
        <img src={active} className="table-icon" alt="active" />
        <div className="table-active">Active</div>
      </div>
    ),
    cost: "",
  },
];

const columns = [
  {
    title: "Created",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Contract",
    dataIndex: "contract",
    key: "contract",
  },
  {
    title: "Lot",
    dataIndex: "lot",
    key: "lot",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Redemption cost",
    dataIndex: "cost",
    key: "cost",
  },
];

function Dashboard() {
  return (
    <Layout>
      <LayoutHeader>
        <HeaderTitle>
          <Title>Overview</Title>
        </HeaderTitle>
      </LayoutHeader>
      <Main>
        <StyledContent>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
              <Space direction="vertical" size={[24, 0]}>
                <Title level={4}>ETH balance</Title>
                <Balance>0.1391 ETH</Balance>
                <div>You’re running out of ETH</div>
                <Progress type="circle" percent={10} format={() => ""} />
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card>
                <Space direction="vertical" size={[24, 0]}>
                  <CircleIcon>
                    <img src={eth} className="circle-icon" alt="eth" />
                  </CircleIcon>
                  <div>Provide Payment</div>
                  <Input placeholder="Min 1 ETH" />
                  <Button type="primary">Deposit</Button>
                </Space>
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card>
                <Space direction="vertical" size={[24, 0]}>
                  <CircleIcon>
                    <img src={shield} className="circle-icon" alt="shield" />
                  </CircleIcon>
                  <div>Operator Address</div>
                  <Input placeholder="ETH Address" />
                  <Button type="link">Submit</Button>
                </Space>
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card>
                <Space direction="vertical" size={[24, 0]}>
                  <CircleIcon>
                    <img src={mail} className="circle-icon" alt="mail" />
                  </CircleIcon>
                  <div>Contact Email</div>
                  <Input placeholder="Email" />
                  <Button type="link">Submit</Button>
                </Space>
              </Card>
            </Col>
          </Row>
        </StyledContent>
        <StyledContent>
          <Table dataSource={dataSource} columns={columns} />
        </StyledContent>
      </Main>
    </Layout>
  );
}

const CircleIcon = styled.div`
  background: #d7f6ee;
  border-radius: 50%;
  display: table;
  margin: 0 auto;
  height: 60px;
  width: 60px;
  line-height: 60px;
`;

const HeaderTitle = styled.div`
  margin: 1rem 2rem 0;
`;

const Balance = styled.div`
  color: ${purple};
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 42px;
  line-height: 1.35;
  font-feature-settings: "tnum" on, "lnum" on, "zero" on;
`;

const StyledContent = styled.div`
  text-align: center;
  background: #fff;
  margin: 0 30px 30px;
  padding: 24px;
  box-shadow: 0 4px 4px hsla(0, 0%, 75%, 0.3);
`;

const LayoutHeader = styled.div`
  background: ${turquoise};
  height: 250px;
`;

const Main = styled.div`
  margin-top: -150px;
`;

export default Dashboard;
