import React, { useEffect } from "react";
import Launch from "./Launch";

const PastLaunches = () => {
  const Launches = [];

  const putData = (data) => {
    Launches.push({ name: data.name, id: data.id });
    console.log(Launches);
  };

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches/latest")
      .then((response) => response.json())
      .then((data) => putData(data));
    return () => {};
  }, []);

  return (
    <section id="Past Launches">
      <h1>Past launches</h1>

      <div className="launch-container">
          <Launch key={564564564} name={"Launch1"} id={564564564} />
      </div>
    </section>
  );
};

export default PastLaunches;
