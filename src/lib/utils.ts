import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TTelegramUser } from "@/types/telegram-user";
import { retrieveLaunchParams, serializeThemeParams } from "@tma.js/sdk";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTelegramUser(): TTelegramUser | never {
  const launchParams = retrieveLaunchParams();
  const user = launchParams?.initData?.user;
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

export function getSerializedWallet(walletAddress?: string): string {
  if (!walletAddress) {
    return "";
  }
  return walletAddress.slice(0, 4) + "..." + walletAddress.slice(-4);
}

export function getSerilizedBalance(
  chainSymbol?: string,
  balance = BigInt(0)
): string {
  return balance.toString() + " " + chainSymbol;
}
