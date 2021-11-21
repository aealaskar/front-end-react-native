import React from "react";
import { View, Text, Image } from "react-native";
import { baseURL } from "../stores/instance";
import { observer } from "mobx-react";

const ProductsItem = ({ product }) => {
  return (
    <View>
      <Image source={{ uri: baseURL + product.image }}></Image>
      <Text>{product.name}</Text>
    </View>
  );
};

export default observer(ProductsItem);
