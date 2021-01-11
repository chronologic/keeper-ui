import { createGlobalStyle } from "styled-components";

import { black, purple, turquoise } from "../colors";

const Style = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Work Sans",sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    font-feature-settings: "tnum" on,"lnum" on,"zero" on;
  }
  h1.ant-typography, .ant-typography h1 {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 3rem;
    font-feature-settings: normal;
  }
  h2.ant-typography, .ant-typography h2 {
    font-size: 36px;
  }
  h3.ant-typography, .ant-typography h3 {
    font-weight: 300;
    font-size: 21px;
  }
  ::selection {
    background: ${turquoise};
  }
  .ant-layout-header {
    height: 80px;
    padding: 8px 50px;
  }
  .ant-space-vertical {
    width: 100%;
  }
  .ant-menu {
    background: #F6F6F6;
    font-size: 1rem;
  }
  .ant-input {
    padding: 12px 12px;
  }
  .ant-card {
    font-size: 1rem;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${turquoise};
  }
  .ant-menu-inline .ant-menu-item::after {
    border-right: none;
  }
  .ant-menu-item-selected, .ant-menu-item:active, 
  .ant-menu-item:hover {
    color: rgba(0, 0, 0, 0.85);
  }
  .ant-menu-inline .ant-menu-item {
    margin-top: 0;
  }
  .ant-btn {
    height: 56px;
  }
  .ant-btn-primary {
    font-weight: 600;
    padding: 1rem 2.25rem;
    font-size: 1.25rem!;
    line-height: 1.5rem;
    background-color: ${black};
    border-color: ${black};
    color: ${turquoise};
    letter-spacing: .05rem;
    text-transform: uppercase;
  }
  .ant-btn-primary:hover, .ant-btn-primary:focus {
    color: #fff;
    background: ${black};
    border-color: ${black};
  }
  .ant-btn-link {
    font-weight: 500;
    color: ${turquoise};
    letter-spacing: .05rem;
    text-transform: uppercase;
  }
  .ant-btn-link:hover, .ant-btn-link:focus {
    color: ${black};
  }
  .ant-input:focus, .ant-input-focused, .ant-input:hover {
    border-color: ${turquoise};
    box-shadow: none;
  }
  .ant-layout {
    background: #E6E6E6;
  }
  .ant-layout-sider {
    background: #F6F6F6;
  }
  .ant-layout-header {
    background: #F6F6F6;
  }
  .ant-layout-content {
    background: white;
  }
  .ant-layout-footer {
    background: ${black};
  }
  .ant-progress-inner:not(.ant-progress-circle-gradient) 
  .ant-progress-circle-path {
    stroke: ${purple};
  }
  .ant-pagination-item-active, .ant-pagination-item-active a, .ant-pagination-item-active a:hover, 
  .ant-pagination-item-active:focus, .ant-pagination-item-active:hover {
    border-color: ${turquoise};
    color: ${turquoise};
  }
  .wallet-icon {
    max-width: 18px;
    margin: 8px;
    opacity: 15%;
  }
  .table-icon {
    max-width: 18px;
    margin: 0 8px;
  }
  .table-active {
    color: ${turquoise};
    display: inline;
  }
  .footer-link {
    color: white !important;
    text-transform: uppercase;
  }
  .footer-link:focus, .footer-link:hover, .footer-link a:focus, .footer-link a:hover {
    color: ${purple} !important;
  }
  .menu-link {
    color: rgba(0,0,0,0.85) !important;
  }
  a.ant-typography, .ant-typography a {
    color: ${purple};
  }
  a.ant-typography:focus, .ant-typography a:focus, 
  a.ant-typography:hover, .ant-typography a:hover {
    color: ${purple};
    text-decoration: underline;
  }
  a {
    color: ${purple};
  }
  a:hover {
    color: ${purple};
    text-decoration: underline;
  }
`;

export default Style;
