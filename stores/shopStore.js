import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ShopStore {
  shops = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchShops = async () => {
    try {
      const res = await instance.get("/shops");
      this.shops = res.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
