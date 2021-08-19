import React from "react";


const Launch = (params) => {

  const styles = {
    backgroundColor: params.success
      ? "var(--success-color)"
      : "var(--failure-color)",
    borderRadius: "var(--rounded-corners)",
    padding: "var(--padding-sm)",
    flex: "1 1 25%"
  }; 


  return (
    <div className="launch" style={styles}>
      <h1>{params.name}</h1>
      <p>#{params.id}</p>
    </div>
  );
};

export default Launch;
