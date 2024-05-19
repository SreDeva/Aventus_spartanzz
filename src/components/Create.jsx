import React, { useState } from "react";
import { Link } from "react-router-dom";

import bg from "../assets/bg.png";
import { Web3Button } from "@thirdweb-dev/react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (contra) => {
    const response = await contra.call("createArticle", [title, content]);
    console.log(response);
  };
  return (
    <div className="relative z-50">
      <div className="absolute  inset-20 inset-y-36">
        <img src={bg} alt="" className="w-96 h-96 object-cover" />
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-row justify-around items-center w-full max-w-5xl p-4">
          <div className="pr-24">
            <h1 className="text-5xl">
              <span className="text-7xl">Create</span> your own decentralised
              post
            </h1>
            <Link to={"/article"}>
              <div>
                <h3 className="mt-5 text-5xl text-blue-500">&larr;</h3>
              </div>
            </Link>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg w-full max-w-2xl">
            <div className="flex flex-col">
              <label htmlFor="title" className="mb-2 font-semibold">
                Title:
              </label>
              <input
                type="text"
                id="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="w-full border border-gray-300 rounded p-2 mb-4"
                placeholder="Enter title..."
              />

              <label htmlFor="content" className="mb-2 font-semibold">
                Content:
              </label>
              <div className="border border-gray-300 rounded p-4 bg-white flex-grow mb-4">
                <textarea
                  id="content"
                  className="w-full h-40 border-none outline-none resize-none"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  placeholder="Type your content here..."
                ></textarea>
              </div>
              <Web3Button
                contractAddress="0x41c085c97B6D9a76be765c81810225dBDCF9F849"
                action={handleSubmit}
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
