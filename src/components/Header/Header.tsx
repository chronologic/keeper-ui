import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

function Header() {
  return (
    <Layout.Header>
      <StyledHeader>Header</StyledHeader>
    </Layout.Header>
  );
}

const StyledHeader = styled.div`
  color: white;
`;

export default Header;
