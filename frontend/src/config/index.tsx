import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, arbitrum, sepolia } from "@reown/appkit/networks";
import type { AppKitNetwork } from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId = import.meta.env.VITE_PROJECT_ID as string;
// import.meta.env.VITE_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694"; // this is a public projectId only to use on localhost

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const metadata = {
  name: "Availed Network",
  description:
    "The new frontier, explore with confidence, on the Availed Network.",
  url: "https://availed.network/", // origin must match your domain & subdomain
  icons: ["https://availed.network/logo.svg"],
};

// for custom networks visit -> https://docs.reown.com/appkit/react/core/custom-networks
export const networks = [mainnet, arbitrum, sepolia] as [
  AppKitNetwork,
  ...AppKitNetwork[],
];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
