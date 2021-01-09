import React from "react";
import { Layout as AntLayout } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

import Providers from "./Providers";
import GlobalStyle from "./GlobalStyle";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Main from "../Main";
import Footer from "../Footer";

function App() {
  return (
    <Providers>
      <StyledApp>
        <GlobalStyle />
        <AntLayout className="layout">
          <Header />
          <AntLayout>
            <Sidebar />
            <Main />
          </AntLayout>
          <Footer />
        </AntLayout>
      </StyledApp>
    </Providers>
  );
}

const StyledApp = styled.div`
  .layout {
    min-height: 100vh;
  }
`;

export default App;
