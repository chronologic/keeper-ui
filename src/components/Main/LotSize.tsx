import React from "react";

import { BTC_DECIMALS } from "../../constants";
import { bnToNumber } from "../../utils";

export default function LotSize({
  lotSizeSatoshis,
}: {
  lotSizeSatoshis: string;
}) {
  return (
    <div>
      <div>{`${bnToNumber(lotSizeSatoshis, {
        decimals: BTC_DECIMALS,
      })} BTC`}</div>
    </div>
  );
}
