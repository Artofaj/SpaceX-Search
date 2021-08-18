import React from "react";

const styles= {
  backgroundColor: "var(--primary-color)",
  borderRadius: "var(--rounded-corners)",
  padding: "var(--padding-sm)"
} 

const Launch = (params) => {
  return (
    <div className="launch" style={styles}>
      <h1>{params.name}</h1>
      <p>#{params.id}</p>
    </div>
  );
};

export default Launch;
