import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Web3Button } from "@thirdweb-dev/react";
import { ContractContext } from "../context/ContractContext";

export default function Article() {
  const navigate = useNavigate();
  const { data, handleLike, handleDislike, handleUpdate, contractAddress } =
    useContext(ContractContext);

  const [articles, setArticles] = useState([]);
  const handleUpdateArt = async (contra, id, title) => {
    try {
      await handleUpdate(contra, id, title);
      navigate("/updates");
    } catch (error) {}
  };

  useEffect(() => {
    if (data && !data.error) {
      try {
        const parsedArticles = data.map((article, index) => {
          console.log(article, true);
          const upvotes = parseInt(article[2]._hex, 16);
          const downvotes = parseInt(article[3]._hex, 16);
          const articleId = parseInt(article[7]._hex, 16);
          const createdAt = parseInt(article[5]._hex, 16);

          return {
            title: article[0],
            content: article[1],
            upvotes: upvotes,
            downvotes: downvotes,
            posted: article[4],
            createdAt: createdAt,
            articleId: articleId,
            creator: article[8] || "",
            id: index,
          };
        });
        setArticles(parsedArticles);
      } catch (error) {
        console.error("Error parsing articles: ", error);
      }
    } else if (data && data.error) {
      console.error("Error fetching data:", data.error);
    }
  }, [data]);

  return (
    <React.Fragment>
      <div className="main">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div className="" key={`${article.id}-${article.creator}`}>
              <div className="flex flex-row justify-between">
                <h2 className="font-bold">{article.title}</h2>
                <Web3Button
                  contractAddress={contractAddress}
                  action={(contra) => {
                    handleUpdateArt(contra, article.articleId, article.title);
                  }}
                >
                  Updates
                </Web3Button>
              </div>
              <p>{article.content}</p>
              <div className="flex flex-row gap-3">
                <Web3Button
                  contractAddress={contractAddress}
                  action={(contra) => handleLike(contra, article.articleId)}
                >
                  Like: {article.upvotes}
                </Web3Button>
                <Web3Button
                  contractAddress={contractAddress}
                  action={(contra) => handleDislike(contra, article.articleId)}
                >
                  Dislike: {article.downvotes}
                </Web3Button>
              </div>
              <p>Posted: {article.posted ? "Yes" : "No"}</p>
              <p>
                Created At:{" "}
                {new Date(article.createdAt * 1000).toLocaleString()}
              </p>
              <p>Creator: {article.creator}</p>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </React.Fragment>
  );
}
