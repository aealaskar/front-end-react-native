import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
class UserAuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }
  signUp = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      console.log(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  signIn = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);

      console.log(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `bearer ${token}`;
      this.user = decode(token);
    } catch (error) {
      console.log(error);
    }
  };
  logout = async () => {
    try {
      delete instance.defaults.headers.common.Authorization;
      /*  localStorage.removeItem("myToken"); */
      await AsyncStorage.removeItem("myToken");

      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };
  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("myToken");
      if (token) {
        const currenTime = Date.now();
        let tempUser = decode(token);
        if (tempUser.exp >= currenTime) {
          this.setUser(token);
        } else {
          this.logout();
        }
      }
    } catch (error) {}
  };
}
const userAuthStore = new UserAuthStore();
/* userAuthStore.checkForToken(); */
export default userAuthStore;
