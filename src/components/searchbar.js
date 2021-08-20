import React from "react";
import launchStore from "../stores/launchStore";

const Searchbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      className="searchbar-wrapper"
    >
      <form
        className="searchbar"
        onSubmit={(e) => launchStore.triggerSearch(e)}
      >
        <label htmlFor="search">
          launch
          <input
            type="text"
            id="search"
            placeholder="by id"
            onChange={(e) => launchStore.setSearchString(e)}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Searchbar;
