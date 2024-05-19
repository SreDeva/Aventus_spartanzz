import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Web3Button } from "@thirdweb-dev/react";
import { ContractContext } from "../context/ContractContext";

export default function UpdatePage() {
  const location = useLocation();

  const [content, setContent] = useState("");
  const { data, handleSubmit, contractAddress } = useContext(ContractContext);

  return (
    <div className="relative z-50">
      <div className="absolute inset-20 inset-y-36"></div>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-row justify-around items-center w-full max-w-5xl p-4">
          <div className="pr-24">
            <h1 className="text-5xl">
              <span className="text-7xl">Update </span>this post!..
            </h1>
            <Link to={"/article"}>
              <div>
                <h3 className="mt-5 text-5xl text-blue-500">&larr;</h3>
              </div>
            </Link>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg w-full max-w-2xl">
            <div className="flex flex-col">
              <label htmlFor="content" className="mb-2 font-semibold">
                Content:
              </label>
              <div className="border border-gray-300 rounded p-4 bg-white flex-grow mb-4">
                <textarea
                  id="content"
                  className="w-full h-40 border-none outline-none resize-none"
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Type your content here..."
                ></textarea>
              </div>
              <Web3Button
                contractAddress={contractAddress}
                action={(contra) =>
                  handleSubmit(contra, data[0].articleId, content)
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-end"
              >
                Submit
              </Web3Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
