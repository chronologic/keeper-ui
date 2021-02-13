import React from "react";

export default function FormatAddress({ address }: { address: string }) {
  return (
    <a
      href={`https://keepscan.com/deposits/${address}`}
      target="_blank"
      rel="noreferrer"
    >
      {address}
    </a>
  );
}
