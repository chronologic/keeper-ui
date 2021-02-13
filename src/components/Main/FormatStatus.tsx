import React from "react";
import {
  HistoryOutlined,
  LoadingOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

import active from "../../img/active.svg";
import { purple, turquoise } from "../colors";

export default function FormatStatus({ status }: { status: string }) {
  return (
    <StatusWrapper>
      {(() => {
        switch (status) {
          case "ACTIVE":
            return (
              <div>
                <img src={active} className="table-icon" alt="active" />
                <div className="table-active">Active</div>
              </div>
            );
          case "REDEEMED":
            return <div>Redeemed</div>;
          case "KEEPER_REDEEMED":
            return (
              <div className="redeemed">
                <CheckCircleOutlined className="status-icon" />
                Redeemed by Keeper
              </div>
            );
          case "KEEPER_REDEEMING":
            return (
              <div className="redeeming">
                <LoadingOutlined spin className="status-icon" />
                Redeeming with Keeper
              </div>
            );
          case "KEEPER_QUEUED_FOR_REDEMPTION":
            return (
              <div className="queued">
                <HistoryOutlined className="status-icon" /> Queued for
                redemption
              </div>
            );
          case "KEEPER_ERROR":
            return (
              <div className="error">
                <CloseCircleOutlined className="status-icon" /> Redemption error
              </div>
            );
          default:
            return <div>{status}</div>;
        }
      })()}
    </StatusWrapper>
  );
}

const StatusWrapper = styled.div`
  .status-icon {
    margin-right: 4px;
    vertical-align: middle;

    > svg {
      width: 18px;
      height: 18px;
    }
  }

  .queued {
    color: #1890ff;
  }
  .redeeming {
    color: ${purple};
  }
  .redeemed {
    color: ${turquoise};
  }
  .error {
    color: red;
  }
`;
