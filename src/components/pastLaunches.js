import React from "react";
import Launch from "./Launch";
import launchStore from "../stores/launchStore";
import { useObserver } from "mobx-react";

const PastLaunches = () => {
  const launches = launchStore.launches;

  return useObserver(() => (
    <section id="Past Launches">
      <h1>Past launches</h1>

      <div id="launch-container" className="wrapper">
        {launches.map((launch) => (
          <Launch key={launch.id} name={launch.name} id={launch.id} />
        ))}
      </div>
    </section>
  ));
};

export default PastLaunches;
