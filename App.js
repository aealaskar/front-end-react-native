import React from "react";
import { StyleSheet, View } from "react-native";
import ShopList from "./ShopList";
import { NativeBaseProvider } from "native-base";
import ShopDetail from "./components/ShopDetail";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
