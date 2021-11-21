import React from "react";
import { View } from "react-native";
import ProductsItem from "./ProductsItem";
import { observer } from "mobx-react";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductsItem product={product} key={product._id} />
  ));
  return <View>{productList}</View>;
};

export default observer(ProductList);
