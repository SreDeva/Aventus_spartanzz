import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Web3Button } from "@thirdweb-dev/react";
import intro from "../assets/intro.png";
import file from "../assets/file.png";
import { ContractContext } from "../context/ContractContext";

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { handleSearch, contractAddress } = useContext(ContractContext);

  const handleSubmit = async (contra) => {
    try {
      await handleSearch(contra, search);
      navigate("/article");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="relative h-screen">
      {/* <img
        className="intro absolute inset-0 w-full h-full object-cover"
        src={intro}
        alt="Background"
      /> */}
      <div className="relative z-10 flex flex-col h-screen justify-center items-center">
        <h1 className="text-6xl font-bold">WikiOnChains</h1>
        <img className="w-96 h-96 mt-20" src={file} alt="File" />
        <div>
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="shadow-md shadow-gray-300 p-3 w-96 mr-3 rounded-lg mt-16 border border-blue-500"
          />
          <Web3Button contractAddress={contractAddress} action={handleSubmit}>
            Search
          </Web3Button>
        </div>
      </div>
    </div>
  );
}
