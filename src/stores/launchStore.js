import { makeAutoObservable } from "mobx";

class LaunchStore {
  cartItems;

  constructor() {
    this.launches = [];
    makeAutoObservable(this);
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/launches/past")
      .then((response) => response.json())
      .then((data) => this.putData(data));
  }

  putData(data){
    console.log(data);
    this.launches.push({ name: data.name, id: data.id });
  };


/*   removeItem(e, item) {
    e.preventDefault();
    const index = this.cartItems.indexOf(item);

    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  } */

  dehydrate() {
    return {
      cartItems: this.cartItems,
    };
  }
}

const launchStore = new LaunchStore();

export default launchStore;
