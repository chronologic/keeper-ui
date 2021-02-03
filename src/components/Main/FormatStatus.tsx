import React from "react";
import redeemed from "../../img/redeemed.svg";
import active from "../../img/active.svg";

export default function FormatStatus({ status }: { status: string }) {
  return (
    <div>
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
              <div>
                <img src={redeemed} className="table-icon" alt="redeemed" />
                Redeemed by Keeper
              </div>
            );
          case "KEEPER_REDEEMING":
            return <div>Redeeming</div>;
          case "KEEPER_QUEUED_FOR_REDEMPTION":
            return <div>Queued for redemption</div>;
          default:
            return <div />;
        }
      })()}
    </div>
  );
}
