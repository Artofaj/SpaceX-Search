import React, { useEffect } from "react";
import Searchbar from "./components/searchbar";
import PastLaunches from "./components/pastLaunches";
import SearchResult from "./components/searchResult";
import launchStore from "./stores/launchStore";

const App = () => {
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches/past")
      .then((response) => response.json())
      .then((data) => launchStore.putData(data));
    return () => {};
  }, []);

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
