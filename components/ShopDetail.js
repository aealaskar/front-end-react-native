import { observer } from "mobx-react";
import React from "react";
import { Text, View, Image } from "react-native";
import { baseURL } from "../stores/instance";
import shopStore from "../stores/shopStore";
import ProductList from "./ProductList";

const ShopDetail = ({ route }) => {
  const shop = route.params.shop;

  return (
    <View>
      <Image source={{ uri: baseURL + shop.image }} />
      <Text>{shop.name}</Text>
      <ProductList products={shop.products} />
    </View>
  );
};

export default observer(ShopDetail);
