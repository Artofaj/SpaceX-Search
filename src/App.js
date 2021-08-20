import React from "react";
import Searchbar from "./components/searchbar";
import PastLaunches from "./components/pastLaunches";
import SearchResult from "./components/searchResult";

const App = () => {
  return (
      <div style={{gap:0}} className="limited-width wrapper --column">
        <Searchbar />
        <main>
          <SearchResult />
          <PastLaunches />
        </main>
    </div>
  );
};
export default App;
