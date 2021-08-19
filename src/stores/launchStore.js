import { makeAutoObservable } from "mobx";

class LaunchStore {
  launches;

  constructor() {
    this.launches = [];
    makeAutoObservable(this);
  }

  putData(data) {
      data.forEach(launch => {
          this.launches.push({
            name: launch.name,
            id: launch.id,
            date: launch.launch_date_utc,
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
