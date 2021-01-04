import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

function Footer() {
  return (
    <Layout.Footer>
      <StyledFooter>Footer</StyledFooter>
    </Layout.Footer>
  );
}

const StyledFooter = styled.div``;

export default Footer;
