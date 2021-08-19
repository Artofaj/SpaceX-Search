import React from "react";

const Searchbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
