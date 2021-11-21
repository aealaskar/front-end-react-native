import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../CartList";
import CartButton from "../buttons/CartButton";
import Signin from "../Auth/Signin";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home}></Screen>
      <Screen
        name="ShopList"
        component={ShopList}
        options={({ navigation }) => ({
          title: "Shops",
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      ></Screen>
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ navigation }) => ({
          title: "items",
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      ></Screen>
      <Screen name="CartList" component={CartList}></Screen>
      <Screen name="Signin" component={Signin}></Screen>
    </Navigator>
  );
};

export default RootNavigator;
