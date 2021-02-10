import React from "react";
import { Layout, Row, Col, Space, Typography } from "antd";
import logo from "../../img/ChronoLogic.svg";

const { Link } = Typography;

function Footer() {
  return (
    <Layout.Footer>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <Space direction="horizontal">
            <img src={logo} className="App-logo" alt="logo" />
          </Space>
        </Col>
        <Col className="gutter-row" span={6}>
          <Space direction="vertical">
            <Link
              className="footer-link"
              href="https://chronologic.zendesk.com/hc/en-us"
              target="_blank"
            >
              Support
            </Link>
            <Link
              className="footer-link"
              href="https://blog.chronologic.network/"
              target="_blank"
            >
              Medium
            </Link>
            <Link
              className="footer-link"
              href="https://twitter.com/ChronoLogicETH"
              target="_blank"
            >
              Twitter
            </Link>
            <Link
              className="footer-link"
              href="https://t.me/chronologicnetwork"
              target="_blank"
            >
              Telegram
            </Link>
          </Space>
        </Col>
        <Col className="gutter-row" span={6}>
          <Space direction="vertical">
            <Link
              className="footer-link"
              href="https://blog.chronologic.network/chronologic-is-awarded-grant-from-keep-network-7c3d0e36a4be"
              target="_blank"
            >
              What is Keeper?
            </Link>
            <Link
              className="footer-link"
              href="https://app.chronologic.network/"
              target="_blank"
            >
              Chronos &amp; other dApps
            </Link>
          </Space>
        </Col>
        <Col className="gutter-row" span={6}>
          <Space direction="vertical" />
        </Col>
      </Row>
    </Layout.Footer>
  );
}

export default Footer;
