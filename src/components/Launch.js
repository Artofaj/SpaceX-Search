import React from "react";

const Launch = (params) => {
  return (
    <div className="launch">
      <h1>{params.name}</h1>
      <p>#{params.id}</p>
    </div>
  );
};

export default Launch;
