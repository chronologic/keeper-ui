import React from "react";
import { Layout as AntLayout } from "antd";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Main from "../Main";
import Footer from "../Footer";

const {
  Header: AntHeader,
  Footer: AntFooter,
  Sider: AntSider,
  Content: AntContent,
} = AntLayout;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <AntLayout className="layout">
        <AntHeader>
          <Header />
        </AntHeader>
        <AntLayout className="layout-inner">
          <AntSider className="sider">
            <Sidebar className="sidebar" />
          </AntSider>
          <AntContent className="content">
            <Main />
          </AntContent>
        </AntLayout>
        <AntFooter>
          <Footer />
        </AntFooter>
      </AntLayout>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .layout-inner {
    display: flex;
    flex-grow: 1;
  }

  .sider {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    > .ant-layout-sider-children {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
  }

  .sidebar {
    flex-grow: 1;
  }

  .content {
    flex-grow: 1;
  }
`;

export default App;
