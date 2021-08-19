import { makeAutoObservable } from "mobx";

class LaunchStore {
  launches;

  constructor() {
    this.launches = [];
    makeAutoObservable(this);
    this.fetchData()
  }

  fetchData() {
    fetch("https://api.spacexdata.com/v4/launches/past")
      .then((response) => response.json())
      .then((data) => this.putData(data));
  }

  putData(data) {
      data.forEach(launch => {
          this.launches.push({
            name: launch.name,
            id: launch.id,
            date: launch.date_utc,
            success: launch.success,
          });
          console.log(launch)
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
