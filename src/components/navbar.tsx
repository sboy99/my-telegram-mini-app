import { ConnectWalletButton } from "./connect-wallet-button";
import { Me } from "./me";

type NavbarProps = {};

export function Navbar(props: NavbarProps) {
  return (
    <nav className="border-b p-2 flex items-center justify-between">
      <Me />
      <ConnectWalletButton />
    </nav>
  );
}
