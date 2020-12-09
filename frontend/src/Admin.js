import React, { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/admin/posts";
import PostLoadingComponent from "./components/posts/PostLoading";
import axiosInstance from "./axios";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Admin() {
  const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    loading: true,
    posts: null,
  });

  useEffect(() => {
    axiosInstance.get().then((res) => {
      const allPosts = res.data;
      setAppState({ loading: false, posts: allPosts });
      console.log(res.data);
    });
  }, [setAppState]);

  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <PostLoading isLoading={appState.loading} posts={appState.posts} />
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Admin;
