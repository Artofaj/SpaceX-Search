import React from "react";

const Searchbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      className="searchbar-wrapper"
    >
      <form className="searchbar">
        <label htmlFor="search">
        <input type="text"  id="search" placeholder="search"/>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Searchbar;
