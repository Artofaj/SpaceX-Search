import React from "react";
import Launch from "./Launch";
import launchStore from "../stores/launchStore";
import { useObserver } from "mobx-react";

const PastLaunches = () => {
  const launches = launchStore.launches.sort((a, b) =>
    a.date > b.date ? -1 : 1
  );

  const numberOfLaunches = 3;

  return useObserver(() => (
    <section id="Past Launches">
      <h1>Past launches</h1>

      <div className="wrapper launch-container">
        {launches.map((launch, index) => {
          if (index < numberOfLaunches) {
            return (
              <Launch
                key={launch.id}
                name={launch.name}
                id={launch.id}
                success={launch.success}
                date={launch.date}
                simple
              />
            );
          }
          return null;
        })}
      </div>
    </section>
  ));
};

export default PastLaunches;
