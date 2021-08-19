import { makeAutoObservable } from "mobx";

class LaunchStore {
  cartItems;

  constructor() {
    this.launches = [];
    makeAutoObservable(this);
  }

  componentDidMount() {
      console.log(this.launches);
    fetch("https://api.spacexdata.com/v4/launches/past")
      .then((response) => response.json())
      .then((data) => this.putData(data));
  }

  putData(data) {
      data.forEach(launch => {
          this.launches.push({ name: launch.name, id: launch.id });
      });
      
  }

  dehydrate() {
    return {
      cartItems: this.cartItems,
    };
  }
}

const launchStore = new LaunchStore();

export default launchStore;
