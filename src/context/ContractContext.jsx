import React, { createContext, useState, useEffect } from "react";

export const ContractContext = createContext();

export const ContractProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const contractAddress = "0x41c085c97B6D9a76be765c81810225dBDCF9F849";

  const handleSearch = async (contra, search) => {
    try {
      setLoading(true);
      const response = await contra.call("getArticleByTitle", [search]);
      console.log("hi");

      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (contra, id) => {
    try {
      setLoading(true);
      await contra.call("upvoteArticle", [id]);
      const response = await contra.call("getArticle", [id]);
      console.log(response);
      setData(response); // Update data state immediately after like operation
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDislike = async (contra, id) => {
    try {
      setLoading(true);
      await contra.call("downvoteArticle", [id]);
      const response = await contra.call("getArticle", [id]);

      setData(response); // Update data state immediately after dislike operation
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (contra, id, title) => {
    try {
      setLoading(true);
      const response = await contra.call("getUpdatesByArticleId", [id]);

      setUpdates(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLikeUpdate = async (contra, id) => {
    try {
      setLoading(true);
      await contra.call("upvoteUpdate", [id]);
      const response = await contra.call("getUpdatesByArticleId", [id]);
      // Fetch updated data here if needed
      setUpdates(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDislikeUpdate = async (contra, id) => {
    try {
      setLoading(true);
      await contra.call("downvoteUpdate", [id]);
      const response = await contra.call("getUpdatesByArticleId", [id]);
      // Fetch updated data here if needed
      setUpdates(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (contra, articleId, content) => {
    try {
      setLoading(true);
      console.log(articleId, content);
      const response = await contra.call("submitUpdate", [articleId, content]);
      console.log(response);
      // Handle the response or update the state as needed
    } catch (error) {
      setError(error);
      console.error("Error submitting update:", error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    data,
    updates,
    search,
    setSearch,
    loading,
    error,
    handleSearch,
    handleLike,
    handleDislike,
    handleUpdate,
    handleLikeUpdate,
    handleDislikeUpdate,
    handleSubmit,
    contractAddress,
  };

  return (
    <ContractContext.Provider value={contextValue}>
      {children}
    </ContractContext.Provider>
  );
};
