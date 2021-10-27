import "./App.css";
import Body from "./Body";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import Popup from "./Popup";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
