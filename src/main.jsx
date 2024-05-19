import React from "react";
import { Sepolia } from "@thirdweb-dev/chains";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ContractContext, ContractProvider } from "./context/ContractContext";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = { Sepolia };

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain={Sepolia}
    >
      <ContractProvider>
        <App />
      </ContractProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
function Component() {
  const { contract, isLoading } = useContract(
    "0x7291497a76db9AaBaFD5B0a0dFC7373A4189028c"
  );
}
