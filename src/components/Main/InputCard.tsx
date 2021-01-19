import React from "react";
import styled from "styled-components";
import { Space, Card } from "antd";

interface IProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
}

function InputCard({ icon, title, children }: IProps) {
  return (
    <Card>
      <Space direction="vertical" size={[24, 0]}>
        <CircleIcon>{icon}</CircleIcon>
        <div>{title}</div>
        {children}
      </Space>
    </Card>
  );
}

const CircleIcon = styled.div`
  background: #d7f6ee;
  border-radius: 50%;
  display: table;
  margin: 0 auto;
  height: 60px;
  width: 60px;
  line-height: 60px;
`;

export default InputCard;
