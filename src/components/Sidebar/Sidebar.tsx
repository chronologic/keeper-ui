import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

function Sidebar() {
  return (
    <Layout.Sider>
      <StyledSidebar>Sidebar</StyledSidebar>
    </Layout.Sider>
  );
}

const StyledSidebar = styled.div`
  color: white;
  padding: 24px;
`;

export default Sidebar;
