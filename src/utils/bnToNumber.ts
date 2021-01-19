import { BigNumber, BigNumberish } from "ethers";

import { ETH_DECIMALS } from "../constants";

export function bnToNumber(
  bn: BigNumberish,
  { decimals = ETH_DECIMALS, precision = 6 } = {}
): number {
  const bnWithPrecision = BigNumber.from(bn).div(
    BigNumber.from("10").pow(BigNumber.from(decimals - precision))
  );
  return bnWithPrecision.toNumber() / 10 ** precision;
}
