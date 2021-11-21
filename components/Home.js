import React from "react";
import { Button } from "native-base";
export default function Home({ navigation }) {
  return (
    <Button onPress={() => navigation.navigate("ShopList")}>Shop List</Button>
  );
}
