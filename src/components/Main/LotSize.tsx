import React from "react";

export default function LotSize({ lot }: { lot: number }) {
  return (
    <div>
      <div>{`${lot} BTC`}</div>
    </div>
  );
}
