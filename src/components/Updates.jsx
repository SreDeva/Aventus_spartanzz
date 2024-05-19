import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Web3Button } from "@thirdweb-dev/react";
import { ContractContext } from "../context/ContractContext";

export default function Updates() {
  const { updates, handleLikeUpdate, handleDislikeUpdate } =
    useContext(ContractContext);
  const navigate = useNavigate();
  const [parsedUpdates, setParsedUpdates] = useState([]);

  useEffect(() => {
    if (updates && !updates.error) {
      try {
        const parsedUpdates = updates.map((update, index) => {
          console.log(update, "bye");
          const upvotes = parseInt(update[1]._hex, 16);
          const downvotes = parseInt(update[2]._hex, 16);
          const updateId = parseInt(update[5]._hex, 16);
          const createdAt = parseInt(update[4]._hex, 16);
          return {
            content: update[0].toString(),
            upvotes: upvotes,
            downvotes: downvotes,
            applied: update[3],
            createdAt: createdAt,
            updateId: updateId,
          };
        });
        setParsedUpdates(parsedUpdates);
      } catch (error) {
        console.error("Error parsing updates: ", error);
      }
    } else if (updates && updates.error) {
      console.error("Error fetching updates:", updates.error);
    }
  }, [updates]);

  const handleUpdateClick = () => {
    navigate("/updatePage");
  };

  return (
    <div>
      <div className="main">
        <button
          onClick={handleUpdateClick}
          className="bg-purple-500 text-white rounded-md p-2"
        >
          Update
        </button>
        {parsedUpdates.length > 0 ? (
          parsedUpdates.map((update, index) => (
            <div className="" key={index}>
              <div className="flex flex-row justify-between">
                <h2 className="font-bold">{update.title}</h2>
                <div className="flex flex-row gap-4">
                  <Link to={"/article"}>
                    <button className="bg-purple-500 text-white rounded-md p-2">
                      Back
                    </button>
                  </Link>
                </div>
              </div>
              <p>{update.content}</p>
              <div className="flex flex-row gap-3">
                <Web3Button
                  contractAddress="0x41c085c97B6D9a76be765c81810225dBDCF9F849"
                  action={(contra) => handleLikeUpdate(contra, update.updateId)}
                >
                  Like: {update.upvotes}
                </Web3Button>
                <Web3Button
                  contractAddress="0x41c085c97B6D9a76be765c81810225dBDCF9F849"
                  action={(contra) =>
                    handleDislikeUpdate(contra, update.updateId)
                  }
                >
                  Dislike: {update.downvotes}
                </Web3Button>
              </div>
              <p>Applied: {update.applied ? "Yes" : "No"}</p>
              <p>
                Created At: {new Date(update.createdAt * 1000).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p>No updates found.</p>
        )}
      </div>
    </div>
  );
}
