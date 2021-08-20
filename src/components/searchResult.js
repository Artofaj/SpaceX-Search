import React, { useState, useEffect } from "react";
import Launch from "./Launch";
import { useObserver } from "mobx-react";
import launchStore from "../stores/launchStore";

const ResultError = () => {
  const getRandom = () => {
    let randomNumber = Math.floor(Math.random() * launchStore.launches.length);
    return randomNumber;
  };

  const [random, setRandom] = useState(getRandom());

  return (
    <div style={{ border: " 1px solid #FFF" }} className="card wrapper">
      <div style={{ margin: "auto" }}>
        <p>Sorry, we could not find this launch, please try a valid id.</p>
        <p>
          How about the <u>{launchStore.launches[random].id}</u> ?
        </p>

        <button onClick={() => setRandom(getRandom())}>
          Try a different one
        </button>
      </div>
    </div>
  );
};

const SearchResult = () => {
  const getResult = () => {
    let result = <ResultError />;

    if (launchStore.searchResult) {
      result = (
        <Launch
          key={launchStore.searchResult.id}
          name={launchStore.searchResult.name}
          id={launchStore.searchResult.id}
          success={launchStore.searchResult.success}
          date={launchStore.searchResult.date}
        />
      );
    }

    return result;
  };

  return useObserver(
    () =>
      launchStore.searchTriggered && (
        <section>
          <h1>Search Result</h1>
          <div className="wrapper launch-container">{getResult()}</div>
        </section>
      )
  );
};

export default SearchResult;
