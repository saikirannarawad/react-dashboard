import React from "react";
import PostList from "./API/PostList";
import "./Body.css";
import Header from "./Header";
import PopupModal from "./PopupModal";

function Body() {
  return (
    <div className="body">
      <Header />
      <PostList />
    </div>
  );
}

export default Body;
