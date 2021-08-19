import React from "react";

const Launch = (params) => {
  const styles = {
    backgroundColor: params.success
      ? "var(--success-color)"
      : "var(--failure-color)",
    borderRadius: "var(--rounded-corners)",
    padding: "var(--padding-sm)",
    flex: "1 1 25%",
  };

  return (
    <div className="launch" style={styles}>
      <h1>{params.name}</h1>
      <div style={{justifyContent:"space-between"}} className="wrapper">
        {!params.simple && <p>time since launch</p>}
        <p>#{params.id}</p>
      </div>
    </div>
  );
};

export default Launch;
