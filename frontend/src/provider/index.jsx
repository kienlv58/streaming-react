import { ConnectionProvider } from "@solana/wallet-adapter-react";
import React, { createContext, useContext, useReducer } from "react";
import { getClusterDetail } from "../utils/solana";
import AppReducer from "./AppReducer";
import WalletProvider from "./WalletProvider";

const initialState = {};

export const GlobalContext = createContext({
  state: initialState,
  dispatch: () => undefined,
});

export const useStore = () => {
  const store = useContext(GlobalContext);
  return store;
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { clusterApiUrl } = getClusterDetail();

  return (
    <ConnectionProvider endpoint={clusterApiUrl}>
      <WalletProvider>
        <GlobalContext.Provider value={{ state, dispatch }}>
          {children}
        </GlobalContext.Provider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
