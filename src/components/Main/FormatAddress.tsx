import React from "react";

export default function FormatAddress({ address }: { address: string }) {
  return (
    <a
      href={`https://etherscan.io/address/${address}`}
      target="_blank"
      rel="noreferrer"
    >
      {address}
    </a>
  );
}
