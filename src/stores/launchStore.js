import { makeAutoObservable } from "mobx";

class LaunchStore {
  launches;

  constructor() {
    this.launches = [];
    makeAutoObservable(this);
  }

  putData(data) {
      data.forEach(launch => {
          this.launches.push({ name: launch.name, id: launch.id });
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
