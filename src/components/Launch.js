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
    let bgc = "var(--secondary-bg-color)";

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

    return (
      <span
        style={{ opacity: blink ? 0.5 : 0.75, padding: "0 var(--padding-sm)" }}
      >
        :
      </span>
    );
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
      <div style={{ paddingTop: "var(--padding-md)" }}>
        <table style={{ textAlign: "center" }}>
          <tr>
            <th>Hours</th>
            <th />
            <th>Minutes</th>
            <th />
            <th>Seconds</th>
          </tr>
          <tr style={{ fontSize: "2rem" }}>
            <td>{hours}</td>
            <td>
              <Separator />
            </td>
            <td>{minutes}</td>
            <td>
              <Separator />
            </td>
            <td>{seconds}</td>
          </tr>
        </table>
      </div>
    );
  };

  const cardStyles = {
    backgroundColor: getBGColor(),
    color: params.simple
      ? "var(--secondary-font-color)"
      : "var(--primary-font-color)",
  };

  return (
    <div className="card" style={cardStyles}>
      <h1>{params.name}</h1>
      <div
        style={{ justifyContent: "space-between", alignItems: "flex-end" }}
        className="wrapper"
      >
        {!params.simple && (
          <div>Time elapsed since launch {getElapsedTime()} </div>
        )}
        #{params.id}
      </div>
    </div>
  );
};

export default Launch;
