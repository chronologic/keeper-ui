import React, { useCallback, useContext, useMemo } from "react";
import styled from "styled-components";
import { Layout, Typography, Row, Col, Table } from "antd";
import { TablePaginationConfig } from "antd/lib/table";

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
import { UserContext } from "../../contexts";

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
    dataIndex: "lotSizeSatoshis",
    render: (lotSizeSatoshis: string) => LotSize({ lotSizeSatoshis }),
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
  const { user } = useContext(UserContext);
  const { loading, items, pagination, onPaginationChange } = useDepositList({
    current: 1,
    pageSize: 10,
    operatorAddress: user?.operatorAddress,
  });

  const handleTableChange = useCallback(
    (newPagination: IPagination) => {
      onPaginationChange(newPagination);
    },
    [onPaginationChange]
  );

  const paginationConfig: TablePaginationConfig = useMemo(
    () => ({
      ...pagination,
      pageSizeOptions: ["10", "25", "50", "100"],
      showSizeChanger: true,
    }),
    [pagination]
  );

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
            rowKey="depositAddress"
            columns={columns}
            dataSource={items}
            pagination={paginationConfig}
            loading={loading}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
