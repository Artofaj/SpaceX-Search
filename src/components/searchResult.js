import React, { useState } from "react";
import Launch from "./Launch";
import { useObserver } from "mobx-react";
import launchStore from "../stores/launchStore";

const SearchResult = () => {
  const getResult = () => {
    let result = <p>Sorry, no results </p>;

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

          {getResult()}
        </section>
      )
  );
};

export default SearchResult;
