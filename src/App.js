import React from "react";
import Searchbar from "./components/searchbar";
import PastLaunches from "./components/pastLaunches";
import SearchResult from "./components/searchResult";

const App = () => {
  return (
    <div
      style={{
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
      <div className="limited-width wrapper --column">
        <Searchbar />
        <main>
          <SearchResult />
          <PastLaunches />
        </main>
      </div>
    </div>
  );
};
export default App;
