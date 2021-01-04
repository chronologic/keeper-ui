import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

function Main() {
  return (
    <Layout.Content>
      <StyledMain>Main content</StyledMain>
    </Layout.Content>
  );
}

const StyledMain = styled.div`
  text-align: center;
  padding: 24px;
`;

export default Main;
