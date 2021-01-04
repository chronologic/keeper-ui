import React from "react";
import styled from "styled-components";

interface IProps {
  className: string;
}

function Sidebar({ className }: IProps) {
  return <StyledSidebar className={className}>Sidebar</StyledSidebar>;
}

const StyledSidebar = styled.div`
  background-color: lightgray;
  padding: 24px;
`;

export default Sidebar;
