import React, { useState, useEffect } from "react";
import moment from "moment";

const Launch = (params) => {
  const styles = {
    backgroundColor: params.success
      ? "var(--success-color)"
      : "var(--failure-color)",
    borderRadius: "var(--rounded-corners)",
    padding: "var(--padding-sm)",
    flex: "1 1 25%",
  };

  const [now, setNow] = useState();

  useEffect(() => {
    const interval = setInterval(
      () => setNow(moment().diff(params.date, "seconds")),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);


  const getLastDigits = (number) =>
    number.toString().slice(number.toString().length - 2);

  const getElapsedTime = () => {
    let hours = moment().diff(params.date, "hours");
    let minutes = getLastDigits(moment().diff(params.date, "minutes"));
    let seconds = getLastDigits(
      moment().diff(params.date, "seconds") - minutes * 60
    );

    return (
      <div>
        {hours} : {minutes} : {seconds}
      </div>
    );
  };

  return (
    <div className="launch" style={styles}>
      <h1>{params.name}</h1>
      <div style={{ justifyContent: "space-between" }} className="wrapper">
        {!params.simple && <div>Time elapsed since launch {getElapsedTime()} </div>}
        <p>#{params.id}</p>
      </div>
    </div>
  );
};

export default Launch;
