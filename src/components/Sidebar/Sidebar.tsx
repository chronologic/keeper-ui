import React from "react";
import styled from "styled-components";
import { Layout, Menu, Typography } from "antd";
import home from "../../img/home.svg";
import zendesk from "../../img/zendesk.svg";
import discord from "../../img/discord.svg";

const { Text, Link } = Typography;

function Sidebar() {
  return (
    <Layout.Sider>
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item
          key="1"
          icon={<img src={home} className="menu-icon" alt="home" />}
        >
          Overview
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<img src={zendesk} className="menu-icon" alt="zendesk" />}
        >
          <Link
            className="menu-link"
            href="https://chronologic.zendesk.com/hc/en-us"
            target="_blank"
          >
            Support
          </Link>
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<img src={discord} className="menu-icon" alt="discord" />}
        >
          <Link className="menu-link" href="url" target="_blank">
            Discord
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

const StyledLink = styled.div`
  color: rgba(0, 0, 0, 0.85);
`;

export default Sidebar;
