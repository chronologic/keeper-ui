import EthAddress from "react-eth-address";

export default function EthAddressFormat() {
  return EthAddress.EthAddressFormat({
    address: "depositAddress",
    compact: false,
    etherscan: true,
  });
}
