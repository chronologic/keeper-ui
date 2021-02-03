import React from "react";
import styled from "styled-components";
import { Layout, Typography, Row, Col, Table } from "antd";
import { turquoise } from "../colors";
import EmailCard from "./EmailCard";
import PaymentCard from "./PaymentCard";
import OperatorAddressCard from "./OperatorAddressCard";
import { useDepositList } from "../../hooks";
import { bnToNumber } from "../../utils/bnToNumber";
import LastSeen from "./LastSeen";
import FormatAddress from "./FormatAddress";
import FormatStatus from "./FormatStatus";
import LotSize from "./LotSize";
import UserBalance from "./UserBalance";
import { IPagination } from "../../hooks/useDepositList";

const { Title } = Typography;

const columns = [
  {
    title: "Created",
    dataIndex: "createdAt",
    render: (createdAt: string) => LastSeen({ date: createdAt }),
  },
  {
    title: "Contract",
    dataIndex: "depositAddress",
    render: (depositAddress: string) =>
      FormatAddress({ address: depositAddress }),
  },
  {
    title: "Lot size",
    dataIndex: "lotSize",
    render: (lot: number) => LotSize({ lot }),
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status: string) => FormatStatus({ status }),
  },
  {
    title: "Redemption cost",
    dataIndex: "redemptionCost",
    render: (redemptionCost: string) =>
      redemptionCost ? `${bnToNumber(redemptionCost)} ETH` : "",
  },
];

function Dashboard() {
  const { loading, items, pagination, onPaginationChange } = useDepositList({
    current: 1,
    pageSize: 20,
    total: 0,
  });

  function handleTableChange(newPagination: IPagination) {
    onPaginationChange(newPagination);
  }

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
          <Table
            columns={columns}
            dataSource={items}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange as any}
          />
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
