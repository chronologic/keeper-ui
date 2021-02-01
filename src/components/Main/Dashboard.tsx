import React from "react";
import styled from "styled-components";
import { Layout, Typography, Row, Col, Table } from "antd";
import redeemed from "../../img/redeemed.svg";
import active from "../../img/active.svg";
import { turquoise } from "../colors";
import EmailCard from "./EmailCard";
import PaymentCard from "./PaymentCard";
import OperatorAddressCard from "./OperatorAddressCard";
import UserBalance from "./UserBalance";

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
              <UserBalance />
            </Col>
            <Col className="gutter-row" span={6}>
              <PaymentCard />
            </Col>
            <Col className="gutter-row" span={6}>
              <OperatorAddressCard />
            </Col>
            <Col className="gutter-row" span={6}>
              <EmailCard />
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

const HeaderTitle = styled.div`
  margin: 1rem 2rem 0;
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
