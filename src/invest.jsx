import React, { useState } from "react";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import "../src/styles/invest.css";
// import './investPage.css'; // Import your CSS file for styling
import web3 from "web3";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { utils } from "ethers";

function InvestPage() {
  // State for input field values
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  let contractAddress = import.meta.env.CONTRACT_ADDRESS;
  const { contract } = useContract(contractAddress);
  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "invest"
  );
  const handleInvest = async () => {
    try {
      const valueInWei = utils.parseEther("0.1"); // Replace with the desired amount in ETH
      const tx = await mutateAsync({
        contract, // Reference to your contract instance
        functionName: "invest", // Replace with your payable function name // Optional arguments (if needed)
        overrides: {
          value: valueInWei, // Set the amount of ETH to send
        },
      });
      console.log("Transaction hash:", tx.hash);
    } catch (error) {
      console.error("Investment error:", error);
      // Handle transaction error (important)
    }
  };

  const buttonStyle = {
    background: "#00d395",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
    fontSize: "1em",
    color: "#fff",
    fontWeight: 500,
    transition: "0.5s",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  };
  const buttonHoverStyle = {
    background: "black",
    color: "#00d395",
    width: "150px", // Adjust the width as needed
    margin: "0 10px", // Add spacing between buttons
  };

  // Event handlers for input changes
  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };

  const handleInputChange3 = (event) => {
    setInput3(event.target.value);
  };

  // Event handler for button clicks
  const handleButtonClick = (inputValue) => {
    alert(`Button clicked with input value: ${inputValue}`);
  };

  return (
    <div className="invest-page-container">
      <h2>Invest Page</h2>
      <ConnectWallet />

      <div className="input-section">
        <input
          type="text"
          placeholder="Naive Token Value For Invest"
          value={input1}
          onChange={handleInputChange1}
        />
        <br />
        <input
          type="text"
          placeholder="Naive Token Value For Mortgage"
          value={input2}
          onChange={handleInputChange2}
        />
        <br />
        <input
          type="text"
          placeholder="Amount To Pay EMI"
          value={input3}
          onChange={handleInputChange3}
        />
      </div>

      <div className="button-section">
        <Web3Button contractAddress={contractAddress} action={handleInvest}>
          Invest
        </Web3Button>
        <Web3Button
          style={buttonStyle}
          hoverStyle={buttonHoverStyle}
          contractAddress="0xB7765fca8D09aF940f7D98f6bE92c9206531FF11"
          action={(contra) => {
            contra.call("payEMI", [input3]);
          }}
        >
          Mortgage Ether
        </Web3Button>
        <Web3Button
          style={buttonStyle}
          hoverStyle={buttonHoverStyle}
          contractAddress="0xf3f04834128fA806AF03b19458A35fEf4Cfb580C"
          action={(contra) => {
            contra.call("payEMI", []);
          }}
        >
          PayEMI
        </Web3Button>
      </div>
    </div>
  );
}

export default InvestPage;
