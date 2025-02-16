// React -%- ////
import * as React from "react";

// Packages -%- ////
import { WagmiProvider, createConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

// Types -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
const config = createConfig(
  getDefaultConfig({
    // Required App Info
    appName: "availed",

    // Required API Keys
    walletConnectProjectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID!,

    // Optional App Info
    appDescription: "Your App Description",
    appUrl: "https://availed.network", // your app's url
    appIcon: "https:///availed.network/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);
const queryClient = new QueryClient();

// Application -%- ////
export const Web3Provider = ({ children }: any) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
