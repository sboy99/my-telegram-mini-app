"use client";

import { getSerializedWallet, getSerilizedBalance } from "@/lib/utils";
import { useAccount, useBalance } from "wagmi";
import { useTma } from "../tma/hook";
import { Info } from "../info";

export function Account() {
  const tma = useTma();
  const account = useAccount();
  const balance = useBalance({
    address: account?.address,
  });

  const walletAddress = getSerializedWallet(account?.address);
  const walletBalance = getSerilizedBalance(
    balance.data?.symbol,
    balance.data?.value
  );
  const userFirstName = tma.user?.firstName;

  return (
    <Info
      address={walletAddress}
      balance={walletBalance}
      name={userFirstName}
    />
  );
}
