// React -%- ////
import * as React from "react";

// Packages -%- ////
// import { useAccount } from "wagmi";

// Types -%- ////

// Components -%- ////
import Header from "../components/Header";
// const MyComponent = () => {
//   const { address, isConnecting, isDisconnected } = useAccount();
//   if (isConnecting) return <div>Connecting...</div>;
//   if (isDisconnected) return <div>Disconnected</div>;
//   return <div>Connected Wallet: {address}</div>;
// };

// Middleware & Integrations -%- ////

// Application -%- ////
export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      {/* <MyComponent /> */}
    </React.Fragment>
  );
}
