import React from "react";
import Launch from "./Launch";
import launchStore from "../stores/launchStore";
import { useObserver } from "mobx-react";

const PastLaunches = () => {
  const launches = launchStore.launches.sort((a, b) =>
    a.date > b.date ? -1 : 1
  );

  const latestLaunches = launches.filter((launch, index) => index < 3);

  return useObserver(() => (
    <section id="Past Launches">
      <h1>Past launches</h1>

      <div id="launch-container" className="wrapper">
        {latestLaunches.map((launch) => (
          <Launch
            key={launch.id}
            name={launch.name}
            id={launch.id}
            success={launch.success}
            date={launch.date}
            simple
          />
        ))}
      </div>
    </section>
  ));
};

export default PastLaunches;
