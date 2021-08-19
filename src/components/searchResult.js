import React from "react";
import Launch from "./Launch";
import { useObserver } from "mobx-react";
import launchStore from "../stores/launchStore";

const SearchResult = () => {
  return useObserver(
    () =>
      launchStore.searchString !== "" && (
        <section>
          <h1>Search Result</h1>

          {launchStore.searchResult && (
            <Launch
              key={launchStore.searchResult.id}
              name={launchStore.searchResult.name}
              id={launchStore.searchResult.id}
            />
          )}
        </section>
      )
  );
};

export default SearchResult;
