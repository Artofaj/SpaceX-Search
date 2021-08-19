import { makeAutoObservable } from "mobx";

class LaunchStore {
  launches;

  constructor() {
    this.launches = [];
    this.searchTriggered = false;
    this.searchString = "";
    this.searchResult = null;
    makeAutoObservable(this);
    this.fetchData();
  }

  fetchData() {
    fetch("https://api.spacexdata.com/v4/launches/past")
      .then((response) => response.json())
      .then((data) => this.putData(data));
  }

  setSearchString(e) {
    this.searchString = e.target.value;
  }

  triggerSearch(e) {
    e.preventDefault();
    this.searchTriggered = true;
    this.searchResult = this.launches.filter(
      (launch) => launch.id === this.searchString
    )[0];
  }

  putData(data) {
    data.forEach((launch) => {
      this.launches.push({
        name: launch.name,
        id: launch.id,
        date: launch.date_utc,
        success: launch.success,
      });
    });
  }

  dehydrate() {
    return {
      launches: this.launches,
    };
  }
}

const launchStore = new LaunchStore();

export default launchStore;
