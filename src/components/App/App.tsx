import React from "react";
import { Layout as AntLayout } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

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
        <AntLayout>
          <AntSider>
            <Sidebar />
          </AntSider>
          <AntContent>
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
    min-height: 100vh;
  }
`;

export default App;
