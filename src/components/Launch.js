import React, { useState, useEffect } from "react";
import moment from "moment";

const Launch = (params) => {
  useEffect(() => {
    const interval = setInterval(
      () => setNow(moment().diff(params.date, "seconds")),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [now, setNow] = useState();

  const getBGColor = () => {
    let bgc = "var(--primary-color)";

    if (!params.simple && params.success) {
      bgc = "var(--success-color)";
    }
    if (!params.simple && !params.success) {
      bgc = "var(--failure-color)";
    }

    return bgc;
  };

  const getLastDigits = (number) =>
    number.toString().slice(number.toString().length - 2);

  const isOdd = (num) => {
    return num % 2;
  };
  const Separator = () => {
    let blink = isOdd(now) === 1 ? true : false;

    return <span style={{ opacity: blink ? 0.5 : 0.75 }}>:</span>;
  };

  const getElapsedTime = () => {
    let hours = moment().diff(params.date, "hours");
    let minutes = getLastDigits(
      moment().diff(params.date, "minutes") - hours * 60
    );
    let seconds = getLastDigits(
      moment().diff(params.date, "seconds") - minutes * 60
    );

    return (
      <div>
        {hours} <Separator /> {minutes} <Separator /> {seconds}
      </div>
    );
  };

  const styles = {
    backgroundColor: getBGColor(),
    borderRadius: "var(--rounded-corners)",
    padding: "var(--padding-sm) var(--padding-md)",
    flex: "1 1 25%",
  };

  return (
    <div className="launch" style={styles}>
      <h1>{params.name}</h1>
      <div style={{ justifyContent: "space-between" }} className="wrapper">
        {!params.simple && (
          <div>Time elapsed since launch {getElapsedTime()} </div>
        )}
        <p>#{params.id}</p>
      </div>
    </div>
  );
};

export default Launch;
