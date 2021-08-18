import React from "react";
import Searchbar from "./components/searchbar";
import PastLaunches from "./components/pastLaunches";

const App = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
    }}
  >
    <Searchbar />
    <PastLaunches />
  </div>
);

export default App;
