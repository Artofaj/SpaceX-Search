import React from "react";
import launchStore from "../stores/launchStore";

const Searchbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    launchStore.triggerSearch(e);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      className="searchbar-wrapper"
    >
      <form className="searchbar" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="search">
          <input type="text" id="search" placeholder="search by id" />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Searchbar;
