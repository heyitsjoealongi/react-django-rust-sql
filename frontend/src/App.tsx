// React -%- ////
import * as React from "react";
import "./App.css";

// Packages -%- ////
import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ActionButtonList } from "./components/ActionButtonList";
import { SmartContractActionButtonList } from "./components/SmartContractActionButtonList";
import { InfoList } from "./components/InfoList";
import { projectId, metadata, networks, wagmiAdapter } from "./config";

// Components -%- ////
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Types -%- ////

// Middleware & Integrations -%- ////
const queryClient = new QueryClient();
const generalConfig = {
  projectId,
  networks,
  metadata,
  themeMode: "light" as const,
  themeVariables: {
    "--w3m-accent": "#000000",
  },
};
// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  ...generalConfig,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

// Application -%- ////
export function App({ children }: any) {
  // const [transactionHash, setTransactionHash] = useState<
  //   `0x${string}` | undefined
  // >(undefined);
  // const [signedMsg, setSignedMsg] = useState("");
  // const [balance, setBalance] = useState("");

  // const receiveHash = (hash: `0x${string}`) => {
  //   setTransactionHash(hash); // Update the state with the transaction hash
  // };

  // const receiveSignedMsg = (signedMsg: string) => {
  //   setSignedMsg(signedMsg); // Update the state with the transaction hash
  // };

  // const receivebalance = (balance: string) => {
  //   setBalance(balance);
  // };

  return (
    <React.Fragment>
      <main className="flex flex-col h-auto min-h-screen w-full">
        <Navbar />
        <article className="block min-w-auto max-w-auto min-w-[90vw] max-w-[90vw] min-[1000px]:min-w-[69vw] min-[1000px]:max-w-[69vw] min-[2000px]:min-w-[39vw] min-[2000px]:max-w-[39vw] p-9 my-9 mx-auto border border-dark rounded-xl bg-dark border-opacity-10 bg-opacity-10">
          {children}
          <div className={"pages"}>
            <WagmiProvider config={wagmiAdapter.wagmiConfig}>
              <QueryClientProvider client={queryClient}>
                <appkit-button />
                {/* <ActionButtonList
                  sendHash={receiveHash}
                  sendSignMsg={receiveSignedMsg}
                  sendBalance={receivebalance}
                />
                <SmartContractActionButtonList />
                <div className="advice">
                  <p>
                    This projectId only works on localhost. <br />
                    Go to{" "}
                    <a
                      href="https://cloud.reown.com"
                      target="_blank"
                      className="link-button"
                      rel="Reown Cloud"
                    >
                      Reown Cloud
                    </a>{" "}
                    to get your own.
                  </p>
                </div>
                <InfoList
                  hash={transactionHash}
                  signedMsg={signedMsg}
                  balance={balance}
                /> */}
              </QueryClientProvider>
            </WagmiProvider>
          </div>
        </article>
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;
