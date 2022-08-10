import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import React, { useMemo } from "react";

import("@solana/wallet-adapter-react-ui/styles.css");

export function ClientWalletProvider(props) {
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <WalletProvider wallets={wallets} {...props}>
      <WalletModalProvider {...props}>{props.children}</WalletModalProvider>
    </WalletProvider>
  );
}

export default ClientWalletProvider;
